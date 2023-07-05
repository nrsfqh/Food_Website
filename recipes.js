const recipes = [
  { id: 1, title: 'Nasi Lemak', ingredients: ['Rice', 'Coconut Milk', 'Anchovies', 'Peanuts', 'Cucumber', 'Sambal'], 
  cuisine: 'Malaysian', description: 'Nasi lemak is a dish originating in Malay cuisine that consists of fragrant rice cooked in coconut milk and pandan leaf.',
  image: './img/nasi-lemak.jpg', steps: ["Cooking the rice:  Add all the ingredients and start the cooking process. After 10 minutes, you can open the lid and fluff the rice. ",
      "Fried anchovies: For fried anchovies, preheat a pan with cooking oil and fry the anchovies until crispy. Season with a pinch of salt and sugar. In the same pan, fry the peanuts until lightly browned. Season with a pinch of sugar and salt. Stir everything together and remove from heat.",
      "When ready to serve, plate the rice and place sambal, fried anchovies and peanuts, and cucumber slices on the side."
    ]},
  { id: 2, title: 'Fish & Chips', ingredients: ['Fish fillets', 'Potatoes ','All-purpose flour','Baking powder'], 
  cuisine: 'Western', description: 'Fish and chips is a hot dish consisting of fried fish in batter, served with chips.',
  image: './img/fish-chips.jpg', steps: ["Batter the fish and fry it until golden and crispy.",
  "Drain excess oil and season with salt and pepper.",
  "Serve with crispy chips or French fries.",
  "Garnish with lemon wedges or tartar sauce, if desired."]},
  { id: 3, title: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Ground Beef', 'Onion', 'Garlic', 'Tomato Sauce', 'Tomato Paste', 'Dried Oregano', 'Dried Basil', 'Salt', 'Black Pepper', 'Olive Oil'], 
  cuisine: 'Western', description: 'A true Italian classic with a meaty, chilli sauce',
  image: './img/spaghetti.jpg', steps:["Heat olive oil in a large pan.", "Add minced beef and cook until browned.", "Add chopped onion, garlic, and carrots. Cook until softened.",
  "Stir in tomato paste, diced tomatoes, and beef broth.", "Season with salt, pepper, and Italian herbs. Simmer for 20 minutes.", "Meanwhile, cook spaghetti in boiling water until al dente.",
  "Drain the spaghetti and mix with the Bolognese sauce.", "Serve hot, topped with grated Parmesan cheese."]},
  { id: 4, title: 'Nasi Ayam', ingredients: ['Chicken', 'Rice', 'Soy sauce', 'Ginger', 'Garlic', 'Cucumber', 'Chili Sauce'], 
  cuisine: 'Malaysian', description: 'Also known as "Chicken Rice". It is a dish consisting chicken, seasoned rice, chilli sauce and cucumber garnishes.',
  image: './img/nasi-ayam.jpg', steps:["Cook the rice with chicken broth for added flavor.", "Prepare the chicken by marinating it with a mixture of spices and herbs.",
      "Grill or roast the chicken until cooked through and golden brown.", "Make the fragrant chicken rice by sautéing garlic and ginger, then adding the cooked rice and stirring it together.",
     "Prepare the condiments, such as soy sauce, chili sauce, and cucumber slices.", "Slice the cooked chicken and serve it on a plate with the fragrant chicken rice and condiments."]},
  { id: 5, title: 'Biryani', ingredients:  ['Mutton', 'Chicken', 'Beef', 'Eggs', 'Nuts', 'Dried fruits', 'Vegetables', 'Potatoes', 'Rice'] , 
  cuisine: 'Indian', description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia.',
  image: './img/Biryani.jpg', steps:["Rinse and soak the rice to remove excess starch", "Cook the rice with whole spices, such as cinnamon, cardamom, and cloves, to infuse it with aromatic flavors",
  "In a separate pan, sauté onions until golden brown and set them aside for garnishing", "Prepare the meat (chicken, lamb, or beef) by marinating it with a mixture of yogurt and spices, such as turmeric, cumin, and coriander",
  "Cook the meat until tender and flavorful", "Layer the cooked rice and meat in a deep pot, alternating between rice and meat layers",
  "Drizzle saffron-infused milk and ghee over the layered rice and meat for added richness", "Cover the pot with a tight-fitting lid and cook on low heat, allowing the flavors to meld together and the rice to steam",
  "Once cooked, garnish the Biryani with fried onions, fresh herbs, and roasted nuts",]},
  { id: 6, title: 'Roti Prata', ingredients: ['Flour', 'Water', 'Salt', 'Ghee', 'Curry', "Instant Prata (If you don't want to create from scratch"], 
  cuisine: 'Indian', description: 'Roti Prata, also known as Roti Canai, is a flatbread dish found in several countries in Southeast Asia.',
  image: './img/roti-prata.jpg', steps:["You can either use Instant Prata or create it from scratch using flour, salt and water", "For curry: Heat oil in a pan and add chopped onions, garlic, and ginger. Sauté until onions turn translucent",
  "Add curry powder, turmeric, cumin, and coriander powder to the pan. Stir and cook for a minute to release the flavors", "Add diced tomatoes and cook until they soften and break down",
  "Pour in coconut milk and water. Stir well to combine", "Add diced potatoes and simmer until they are cooked through and tender", 
  "Season with salt and pepper according to taste", "Optional: Add other vegetables like carrots or peas if desired",
  "Simmer the curry for a few more minutes to allow the flavors to meld together", "In a separate pan, heat a little oil and cook Roti Prata until crispy and golden brown on both sides",
  "Serve the Roti Prata hot with the prepared curry for dipping or pouring over the bread", ]},
  { id: 7, title: 'Laksa', ingredients: ['Noodles', 'Herbs', 'Coconut Milk', 'Tamarind', 'Spice paste'], 
  cuisine: 'Malaysian', description: 'Laksa is a spicy noodle dish popular in Southeast Asia.',
  image: './img/laksa.jpg', steps:["Prepare the Laksa paste by blending ingredients such as shallots, garlic, lemongrass, galangal, dried chilies, shrimp paste, and spices into a smooth paste",
  "Heat oil in a large pot and sauté the Laksa paste until fragrant", "Add chicken or vegetable broth to the pot and bring it to a simmer",
  "Add coconut milk to the broth and stir well to combine", "Add ingredients like chicken, shrimp, tofu, or vegetables to the broth and let them cook until they are tender and cooked through",
  "Boil water in a separate pot and cook rice noodles according to package instructions. Drain and set aside", "Prepare garnishes such as bean sprouts, sliced boiled eggs, cilantro, lime wedges, and fried shallots", 
  "To serve, place a portion of rice noodles in a bowl and ladle the Laksa broth over it, ensuring it covers the noodles and ingredients", 
  "Top with garnishes according to preference",]},
  { id: 8, title: 'Steak', ingredients: ['Steak', 'Salt', 'Black pepper', 'Butter', 'Garlic', 'Fresh herbs'], 
  cuisine: 'Western', description: 'A juicy and flavorful steak cooked to perfection and served with a delicious herb butter sauce.',
  image: './img/steak.jpg', steps:["Season the steak with salt, black pepper, and any desired additional spices or marinade. Let it sit at room temperature for about 30 minutes to allow the flavors to penetrate.",
  "Preheat a grill or a skillet over high heat. Ensure it is hot before placing the steak on it.",
  "Place the steak on the grill or skillet and cook for a few minutes on each side, depending on the desired level of doneness. For a medium-rare steak, aim for about 3-4 minutes per side.",
  "Once cooked to your liking, remove the steak from the heat and let it rest for a few minutes to allow the juices to redistribute.",
  "Slice the steak against the grain into thin strips for serving."]},
  { id: 9, title: 'Chapati', ingredients: ['Whole wheat flour', 'Water', 'Salt', 'Oil or ghee', 'Instant Chapati'], 
  cuisine: 'Indian', description: 'Chapati is a staple in Indian cuisine and is often served with curries or used to make wraps.',
  image: './img/chapati.jpg', steps:["You can either make Chapati with whole wheat flour, salt, and waterfrom scratch or use an instant Chapati.",
  "Heat a skillet or a tawa over medium heat. Place a rolled chapati onto the skillet and cook for about 30 seconds to a minute, or until small bubbles start to form.",
  "Flip the chapati and cook the other side for another 30 seconds to a minute, or until it puffs up slightly and develops light brown spots.",
  "Remove the cooked chapati from the skillet and place it in a clean kitchen towel to keep it warm and soft.",
  "Repeat the process for the remaining portions of dough, cooking each chapati individually."]},
  // { id: 10, title: '', ingredients: , 
  // cuisine: '', description: '', image: '', steps:[]},
];
  