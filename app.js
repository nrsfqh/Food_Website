const express = require('express');
const { ObjectId } = require('mongodb');
const {connectToDb,getDb} = require('./db');

//initialise app
const app = express();

//db connection

let db

connectToDb((err) => {
    if(!err){

        app.listen(3000, function(){

            console.log("Server is running")
        })

        db = getDb()
    }
})


//Routes

app.get('/recipes',(req,res) => {
    let recipes = []

    db.collection('recipes')
        .find()
        .sort({title: 1})
        .forEach(recipe => recipes.push(recipe))
        .then(() => {
            console.log("Recipes fetched successfully");
             res.send(recipes); // Send the fetched recipes as the response
         })
         .catch(error => {
             console.log("Error fetching recipes:", error);
             res.status(500).send("Error fetching recipes"); // Send an error response if there's an issue with fetching recipes
         });
})

app.get('/recipes/:id', (req, res) => {

    if(ObjectId.isValid(req.params.id)){

        db.collection('recipes')
            .findOne({_id: new ObjectId(req.params.id)})
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({error: "Could not fetch Document"})

            })
    } else{

        res.status(500).json({error: "Not valid doc id"})
    }
    
    
})

