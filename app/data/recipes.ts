
export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
  id: 1,
  title: "Margherita Pizza",
  cuisine: "Italian",
  minutes: 30,
  difficulty: "Easy",
  image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",

  ingredients: [
    "Pizza dough",
    "Tomato sauce",
    "Mozzarella cheese",
    "Fresh basil",
  ],

  steps: [
    "Prepare the pizza dough.",
    "Spread tomato sauce over the dough.",
    "Add mozzarella cheese.",
    "Bake until golden and crispy.",
    "Garnish with fresh basil and serve.",
  ],
},
  {
    id: 2,
    title: "Chicken Biryani",
    cuisine: "Indian",
    minutes: 60,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",

     ingredients: [
    "Bone-in chicken pieces",
    "Basmati rice",
    "Plain yogurt",
    "Ginger-garlic paste",
    "Biryani masala and spices",
    "Crispy fried onions",
    "Fresh coriander and mint leaves",
    "Ghee and saffron milk",
  ],

  steps: [
    "Marinate the chicken in yogurt, ginger-garlic paste, spices, and herbs.",
    "Soak the basmati rice in water, then parboil it with whole spices until 70% cooked.",
    "Cook the marinated chicken in ghee with half the fried onions until mostly tender.",
    "Layer the partially cooked rice over the chicken, topping with remaining fried onions, herbs, ghee, and saffron milk.",
    "Seal the pot tightly and steam on low heat for 15 to 20 minutes.",
    "Let it rest for 10 minutes, gently fluff, and serve hot.",
  ],
  },
  {
    id: 3,
    title: "Sushi Rolls",
    cuisine: "Japanese",
    minutes: 45,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",

     ingredients: [
    "Sushi rice",
    "Rice vinegar, sugar, and salt",
    "Nori (seaweed sheets)",
    "Fresh sushi-grade fish or crab sticks",
    "Ripe avocado",
    "Cucumber",
    "Soy sauce, wasabi, and pickled ginger",
  ],

  steps: [
    "Cook the sushi rice and season it with rice vinegar, sugar, and salt.",
    "Slice the fish, avocado, and cucumber into thin, even strips.",
    "Place a nori sheet on a bamboo mat and spread a thin layer of seasoned rice over it.",
    "Arrange the fillings horizontally across the center of the rice.",
    "Roll the bamboo mat tightly to seal the sushi into a cylinder.",
    "Slice into bite-sized pieces with a sharp wet knife and serve with soy sauce.",
  ],
  },
  {
    id: 4,
    title: "Chocolate Pancakes",
    cuisine: "American",
    minutes: 20,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",

    ingredients: [
    "All-purpose flour",
    "Unsweetened cocoa powder",
    "Sugar and baking powder",
    "Milk",
    "Egg",
    "Melted butter",
    "Vanilla extract",
    "Chocolate chips",
  ],

  steps: [
    "Whisk together flour, cocoa powder, sugar, baking powder, and a pinch of salt.",
    "Mix milk, egg, melted butter, and vanilla extract in a separate bowl.",
    "Combine the wet and dry ingredients until just mixed, then fold in chocolate chips.",
    "Pour batter onto a lightly greased, preheated skillet over medium heat.",
    "Cook until bubbles form on the surface, flip, and cook for another 1 to 2 minutes.",
    "Serve warm with maple syrup, whipped cream, or fresh berries.",
  ],
  },
  {
  id: 5,
  title: "Classic Beef Tacos",
  cuisine: "Mexican",
  minutes: 25,
  difficulty: "Easy",
  image: "https://plus.unsplash.com/premium_photo-1664476631037-87a2714dd04e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  ingredients: [
    "Ground beef",
    "Taco seasoning",
    "Corn or flour tortillas",
    "Shredded cheddar cheese",
    "Diced tomatoes and lettuce",
    "Sour cream and salsa",
  ],

  steps: [
    "Brown the ground beef in a skillet over medium heat and drain excess fat.",
    "Stir in taco seasoning and a splash of water, simmering until thickened.",
    "Warm the tortillas in a dry pan or microwave.",
    "Spoon the seasoned beef into the tortillas.",
    "Top with cheese, lettuce, tomatoes, salsa, and sour cream, then serve.",
  ],
},
{
  id: 6,
  title: "Pad Thai",
  cuisine: "Thai",
  minutes: 30,
  difficulty: "Medium",
  image: "https://images.unsplash.com/photo-1655091273851-7bdc2e578a88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  ingredients: [
    "Flat rice noodles",
    "Shrimp or chicken breast",
    "Eggs",
    "Bean sprouts and green onions",
    "Tamarind paste, fish sauce, and palm sugar",
    "Crushed peanuts and lime wedges",
  ],

  steps: [
    "Soak the rice noodles in warm water until pliable, then drain.",
    "Whisk together tamarind paste, fish sauce, and sugar to make the sauce.",
    "Stir-fry the shrimp or chicken in a hot wok, then push aside and scramble the eggs.",
    "Add the noodles and sauce, tossing quickly until the noodles absorb the liquid.",
    "Fold in bean sprouts and green onions, then serve topped with peanuts and lime.",
  ],
},
{
  id: 7,
  title: "Greek Salad",
  cuisine: "Mediterranean",
  minutes: 15,
  difficulty: "Easy",
  image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  ingredients: [
    "Ripe tomatoes",
    "Cucumber",
    "Red onion",
    "Kalamata olives",
    "Feta cheese block",
    "Extra virgin olive oil, lemon juice, and dried oregano",
  ],

  steps: [
    "Chop the tomatoes, cucumber, and red onion into bite-sized chunks.",
    "Combine the chopped vegetables and Kalamata olives in a large bowl.",
    "Whisk olive oil, lemon juice, dried oregano, and salt to make the dressing.",
    "Drizzle the dressing over the salad and toss gently.",
    "Top with slices or chunks of feta cheese and serve chilled.",
  ],
},
{
  id: 8,
  title: "Butter Chicken",
  cuisine: "Indian",
  minutes: 45,
  difficulty: "Medium",
  image: "https://images.unsplash.com/photo-1772730064951-89b427965dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  ingredients: [
    "Boneless chicken thighs",
    "Plain yogurt and garam masala",
    "Tomato puree",
    "Butter and heavy cream",
    "Ginger-garlic paste",
    "Kasuri methi (dried fenugreek leaves)",
  ],

  steps: [
    "Marinate chicken pieces in yogurt, ginger-garlic paste, and spices for 20 minutes.",
    "Sear the chicken in a pan until lightly charred, then set aside.",
    "Simmer tomato puree with butter and spices until rich and smooth.",
    "Stir in heavy cream and crushed kasuri methi, then add the cooked chicken.",
    "Simmer for 5 to 10 minutes until tender and serve with naan or rice.",
  ],
},
{
  id: 9,
  title: "Spaghetti Carbonara",
  cuisine: "Italian",
  minutes: 20,
  difficulty: "Medium",
  image: "https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  ingredients: [
    "Spaghetti",
    "Pancetta or guanciale",
    "Egg yolks",
    "Grated Pecorino Romano or Parmesan",
    "Freshly cracked black pepper",
  ],

  steps: [
    "Boil the spaghetti in salted water until al dente, reserving a cup of pasta water.",
    "Crisp the diced pancetta in a skillet over medium heat.",
    "Whisk egg yolks, grated cheese, and plenty of black pepper in a bowl.",
    "Toss the hot drained pasta into the skillet with the pancetta off the heat.",
    "Quickly stir in the egg mixture and splashes of pasta water until creamy, then serve.",
  ],
},
{
  id: 10,
  title: "Classic Tiramisu",
  cuisine: "Italian",
  minutes: 30,
  difficulty: "Medium",
  image: "https://images.unsplash.com/photo-1605621234603-421e591840cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  ingredients: [
    "Ladyfinger biscuits (Savoiardi)",
    "Mascarpone cheese",
    "Heavy whipping cream",
    "Sugar and vanilla extract",
    "Strong brewed espresso, cooled",
    "Unsweetened cocoa powder",
  ],

  steps: [
    "Whip heavy cream, sugar, and vanilla until soft peaks form, then fold in mascarpone.",
    "Briefly dip each ladyfinger into the cooled espresso.",
    "Arrange a layer of soaked ladyfingers in the bottom of a serving dish.",
    "Spread half of the mascarpone cream mixture evenly over the biscuits.",
    "Repeat the layers, dust generously with cocoa powder, and chill for 4 hours before serving.",
  ],
},

];


export function getRecipe(id: number) {
  return recipes.find((recipe) => recipe.id === id);
}

