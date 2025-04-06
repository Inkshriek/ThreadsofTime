// priority: 0

const debug = false;

const jsonArray = (items, useItem) => {
  if (!Array.isArray(items)) items = [items];
  let result = [];
  items.forEach((element) => {
    if (typeof element == "object" && "fluid" in element) {
      element = Fluid.of(element, element.amount).toJson();
    } else {
      element = (useItem ? Item.of(element) : Ingredient.of(element)).toJson();
    }
    result.push(element);
    if (debug)
      Utils.server.tell(
        Text.of(useItem ? "=>" : "+")
          .color(useItem ? "gold" : "green")
          .append(Text.prettyPrintNbt(element))
      );
  });
  return result;
};

// Custom function to replicate Object.fromEntries()
function fromEntries(entries) {
  var result = {};
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var key = entry[0];
    var value = entry[1];
    result[key] = value;
  }
  return result;
}

const basicRecipe = (type) => (output, input) => ({
  type: `create:${type}`,
  ingredients: jsonArray(input),
  results: jsonArray(output, true),
});

const create = {
  compacting: basicRecipe("compacting"),
  crushing: basicRecipe("crushing"),
  cutting: basicRecipe("cutting"),
  deploying: basicRecipe("deploying"),
  emptying: basicRecipe("emptying"),
  filling: basicRecipe("filling"),
  haunting: basicRecipe("haunting"),
  item_application: basicRecipe("item_application"),
  mechanical_crafting: (output, pattern, key) => ({
    type: "create:mechanical_crafting",
    result: Item.of(output).toJson(),
    pattern: pattern,
    key: /*Object.*/ fromEntries(
      Object.entries(key).map(([k, v]) => [k, Ingredient.of(v).toJson()])
    ),
  }),
  milling: basicRecipe("milling"),
  mixing: basicRecipe("mixing"),
  pressing: basicRecipe("pressing"),
  sandpaper_polishing: basicRecipe("sandpaper_polishing"),
  sequenced_assembly: (output, input, recipes) => {
    let sequence = recipes.map((recipe) => {
      // Mark each component recipe as intermediate so they don't get registered
      return recipe.markAsIntermediate();
    });
    // Then, create the sequenced assembly recipe
    return {
      type: "create:sequenced_assembly",
      ingredient: Ingredient.of(input).toJson(),
      results: jsonArray(output, true),
      sequence: sequence.map((r) => r.markAsIntermediate().getRecipe()), // Assuming we need to pass the recipe objects here
      loops: 1,
      transitionalItem: Ingredient.of(input).toJson(),
    };
  },
  splashing: basicRecipe("splashing"),
};

let pendingRecipes = [];

function createRecipeWrapper(recipeJson) {
  let recipe = Utils.copy(recipeJson);
  let customId = null; // Placeholder for the generated ID
  let shouldBeRegistered = true; // Only register if not marked as intermediate

  // Method modifications, keeping them chained but not immediately finalizing
  const methods = {
    acceptMirrored: function (value) {
      recipe.acceptMirrored = value ?? true;
      return this;
    },
    getRecipe() {
      return recipe;
    },
    heated: function () {
      recipe.heatRequirement = "heated";
      return this;
    },
    id: function (id) {
      customId = id;
      return this;
    },
    keepHeldItem: function (value) {
      recipe.keepHeldItem = value ?? true;
      return this;
    },
    loops: function (value) {
      recipe.loops = value;
      return this;
    },
    markAsIntermediate: function () {
      shouldBeRegistered = false;
      return this;
    },
    processingTime: function (processingTime) {
      recipe.processingTime = processingTime;
      return this;
    },
    superheated: function () {
      recipe.heatRequirement = "superheated";
      return this;
    },
    transitionalItem: function (item) {
      recipe.transitionalItem = Ingredient.of(item).toJson();
      return this;
    },
    register: function () {
      pendingRecipes.push({
        recipe: recipe,
        finalize: (event) => {
          if (shouldBeRegistered) {
            if (debug) Utils.server.tell(Text.prettyPrintNbt(recipe));
            let registeredRecipe = event.custom(recipe);
            if (customId != null) {
              registeredRecipe.id(customId);
            }
            if (debug) Utils.server.tell(registeredRecipe);
            return registeredRecipe;
          }
        },
      });
    },
  };

  // Immediately register the recipe for eventual finalization
  methods.register();

  return methods;
}

function addCreateRecipeHandler(event) {
  event.recipes.create = {};
  Object.keys(create).forEach((type) => {
    event.recipes.create[type] = function () {
      let args = Array.prototype.slice.call(arguments);
      let recipeJson = create[type].apply(null, args);
      return createRecipeWrapper(recipeJson, event);
    };
    if (Utils.snakeCaseToCamelCase(type) != type)
      event.recipes.create[Utils.snakeCaseToCamelCase(type)] =
        event.recipes.create[type];
    event.recipes[
      `create${Utils.snakeCaseToTitleCase(type)}`.replace(" ", "")
    ] = event.recipes.create[type];
  });

  // Introduce a method to finalize all pending recipes
  event.recipes.create.finalize = function () {
    pendingRecipes.forEach((pending) => pending.finalize(event));
    pendingRecipes = []; // Clear the pending list after finalization
  };
}
