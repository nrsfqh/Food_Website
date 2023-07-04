// getRecipes.js

const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  try {
    // Connection URL and database
    const uri = process.env.MONGODB_URL;

    // Create a new MongoClient
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to the MongoDB server
    await client.connect();

    // Get the recipes collection from the database
    const db = client.db();
    const collection = db.collection("recipes_list");

    // Find all recipes and return as JSON response
    const recipes = await collection.find().sort({ title: 1 }).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(recipes),
    };
  } catch (error) {
    console.log("Error fetching recipes:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching recipes" }),
    };
  } finally {
    // Close the MongoDB connection
    client.close();
  }
};
