const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./db');
const path = require('path');
const serverless = require('serverless-http');

//initialise app
const app = express()

app.use(express.static('public'));

//db connection

let db;

connectToDb((err) => {
  if (!err) {

    app.listen(3000, function () {

      console.log("Server is running")
    })

    db = getDb()
  }
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Recipe arrays
app.get('/recipes', (req, res) => {
  //This is the mongodb collection name
  db.collection('recipes_list') 
    .find()
    .sort({ title: 1 })
    .toArray()
    .then((recipes) => {
      //console.log('Recipes fetched successfully:', recipes);
      console.log('Recipes fetched successfully:');
      // Send the fetched recipes as the response
      res.status(200).json(recipes); 
    })
    .catch((error) => {
      console.log('Error fetching recipes:', error);
      // Send an error response IF there's an issue with fetching recipes
      res.status(500).json({ error: 'Error fetching recipes' }); 
    });
});

//Filters based on ID (to get the indv ingredients, steps, ect... for each recipe)
app.get('/recipes/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    // mongodb collection name
    db.collection('recipes_list') 
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json({ error: 'Recipe not found' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: 'Could not fetch document' });
      });
  } else {
    res.status(400).json({ error: 'Invalid document ID' });
  }
});


// Filtering based on cuisine
app.get('/recipes/cuisine_filter/:cuisines', (req, res) => {
  const cuisines = req.params.cuisines.split(',');

  db.collection('recipes_list')
    .find({ cuisine: { $in: cuisines } })
    .toArray()
    .then((recipes) => {
      console.log('Recipes fetched successfully:', recipes);
      res.status(200).json(recipes);
    })
    .catch((error) => {
      console.log('Error fetching recipes:', error);
      res.status(500).json({ error: 'Error fetching recipes' });
    });
});


//Filter based on Ingredients
app.get('/recipes/ingredients/:ingredients', (req, res) => {
  const ingredients = req.params.ingredients.split(',');

  // Remove any whitespace from each ingredient
  const cleanedIngredients = ingredients.map((ingredient) => ingredient.trim());

  // Query the database using ingredients and return the matching recipes
  db.collection('recipes_list')
    .find({ ingredients: { $all: cleanedIngredients } })
    .sort({ title: 1 })
    .toArray()
    .then((recipes) => {
      console.log('Recipes fetched successfully:', recipes);
      res.status(200).json(recipes); 
    })
    .catch((error) => {
      console.log('Error fetching recipes:', error);
      res.status(500).json({ error: 'Error fetching recipes' });
    });
});


//Filter on Ingredients + Cuisine
app.get('/recipes/filter/:ingredients/:cuisines', (req, res) => {
  const ingredients = req.params.ingredients.split(',');
  const cuisines = req.params.cuisines.split(',');

  const query = {};

  if (ingredients.length > 0) {
    query.ingredients = { $all: ingredients };
  }

  if (cuisines.length > 0) {
    query.cuisine = { $in: cuisines };
  }

  db.collection('recipes_list')
    .find(query)
    .toArray()
    .then((recipes) => {
      console.log('Recipes fetched successfully:', recipes);
      res.status(200).json(recipes);
    })
    .catch((error) => {
      console.log('Error fetching recipes:', error);
      res.status(500).json({ error: 'Error fetching recipes' });
    });
});


// Get Recipe images
app.get('/img/:imageUrl', (req, res) => {
  // Read the image file from the 'img' folder using the imageUrl
  const imageUrl = req.params.imageUrl;
  const imagePath = path.join(__dirname, 'img', imageUrl);

  // Send the image file as the response
  res.sendFile(imagePath);
});

module.exports.handler = app;
