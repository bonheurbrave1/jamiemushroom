// pages/Recipes.js
import React from 'react';

const Recipes = () => {
  const recipes = [
    {
      title: "Creamy Oyster Mushroom Pasta",
      image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ingredients: [
        "8 oz pasta of choice",
        "1 lb fresh oyster mushrooms, sliced",
        "2 cloves garlic, minced",
        "1 cup heavy cream",
        "1/2 cup grated Parmesan",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
        "Fresh parsley for garnish"
      ],
      instructions: [
        "Cook pasta according to package directions.",
        "Heat olive oil in a large skillet over medium heat.",
        "Add mushrooms and cook until golden brown, about 5-7 minutes.",
        "Add garlic and cook for 1 minute until fragrant.",
        "Pour in heavy cream and bring to a simmer.",
        "Stir in Parmesan until melted and sauce has thickened.",
        "Season with salt and pepper.",
        "Toss with cooked pasta and garnish with parsley."
      ]
    },
    {
      title: "Grilled Oyster Mushrooms",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ingredients: [
        "1 lb fresh oyster mushrooms, clusters separated",
        "3 tbsp olive oil",
        "2 tbsp soy sauce",
        "1 tbsp balsamic vinegar",
        "2 cloves garlic, minced",
        "1 tsp smoked paprika"
      ],
      instructions: [
        "Whisk together olive oil, soy sauce, balsamic vinegar, garlic, and paprika.",
        "Toss mushrooms in the marinade and let sit for 15-20 minutes.",
        "Preheat grill to medium-high heat.",
        "Grill mushrooms for 3-4 minutes per side until tender and slightly charred.",
        "Serve as a side dish or on sandwiches."
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center text-green-800 mb-4">Oyster Mushroom Recipes</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Discover delicious ways to enjoy our fresh oyster mushrooms with these simple recipes.
        </p>
        
        <div className="space-y-16 mb-16">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h2 className="text-2xl font-serif font-bold text-green-800 mb-4">{recipe.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ingredients</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {recipe.ingredients.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Instructions</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        {recipe.instructions.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-green-800 mb-6 text-center">Cooking Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <span className="text-green-700">🍄</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Cleaning Mushrooms</h3>
                <p className="text-gray-700">Don't wash mushrooms—brush off any dirt with a soft brush or cloth.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <span className="text-green-700">🔥</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Cooking Temperature</h3>
                <p className="text-gray-700">Cook oyster mushrooms until they're golden brown for the best flavor.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <span className="text-green-700">✂️</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Using Stems</h3>
                <p className="text-gray-700">The stems are edible and delicious—no need to discard them.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <span className="text-green-700">💧</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Water Content</h3>
                <p className="text-gray-700">Oyster mushrooms release liquid when cooking—make sure to cook until evaporated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;