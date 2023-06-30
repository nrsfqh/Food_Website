    let selectedCuisine = null;

    // Function to filter recipes based on ingredient filters
    function filterRecipes(ingredients, cuisine) {
        //check if ingredient and cuisine array is 0
        //or if either is null
        if (ingredients.length === 0  && (!cuisine || cuisine.length === 0)) {
            return []; // Show no recipes unless ingredients are selected (first view)
      }

        // Update the selected cuisine if a new cuisine is selected
        if (cuisine && cuisine.length > 0) {
            selectedCuisine = cuisine;
        } else {
            selectedCuisine = [];
    }
      
      // Filter the recipes based on selected ingredients
        return recipes.filter(recipe => {
        // Check if the recipe's ingredients include all selected ingredients
        const ingredientsMatch = ingredients.length === 0 || ingredients.every(ingredient => recipe.ingredients.includes(ingredient));
        console.log("Recipe Ingredients:", recipe.ingredients);
        console.log("Selected Ingredients:", ingredients);
        console.log("Ingredients Match:", ingredientsMatch);

        // Check if the recipe's cuisine matches the selected cuisine
        //cusineMatch = no cuisine selected OR if selectedCuisine array is empty OR if selected cuisine includes the recipe.cuisine (matches)
        const cuisineMatch = !selectedCuisine || selectedCuisine.length === 0 || selectedCuisine.includes(recipe.cuisine);
        console.log("Selected Cuisine:", selectedCuisine);
        console.log("Recipe Cuisine:", recipe.cuisine);
        console.log("Cuisine Match:", cuisineMatch);

        // Return true if both ingredients and cuisine match
        return ingredientsMatch && cuisineMatch;
        });
    }
    
    
    function change(){
        // Declare variables
        const input = document.querySelectorAll('.ingredient_list input[type=checkbox]'); 
        const cuisineInput = document.querySelectorAll('.cuisine-list input[type=checkbox]');
        console.log(cuisineInput)
      
        const recipeResult = document.getElementById('recipeResult');
        recipeResult.innerHTML = '';
    
        //Selected ingredients are now stored in the selectedIngredients array
        var selectedIngredients = Array.from(input)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
        console.log("Selected Ingredients:", selectedIngredients);

        var selectedCuisine = Array.from(cuisineInput)
        .filter(checkbox2 => checkbox2.checked)
        .map(checkbox2 => checkbox2.value)
        // .toString();
        console.log("Selected Cuisine:", selectedCuisine);

        // If selectedCuisine is an empty string, (and it's true) set it to null
        const cuisine = selectedCuisine.length > 0 ? selectedCuisine : null;
        console.log("Selected Cuisine:", cuisine);    

        var filteredRecipes = filterRecipes(selectedIngredients, selectedCuisine);
        console.log("Filtered Recipes:", filteredRecipes);
    
        //Filltered recipes are then iterated over to append to recipeResult container 
        
        if (filteredRecipes){
            filteredRecipes.forEach(recipe => {
                // For each recipe, create a div card
                const card = document.createElement('div');
                card.className = 'card';
                //card.style.width = '18rem';
                //card.style.height = "15rem";

                const cardImage = document.createElement('img');
                cardImage.src = recipe.image;
                cardImage.className = "card-img-top";

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = recipe.title;

                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = recipe.description;

                 //Creates Button 
                const cardMore = document.createElement('button');
                cardMore.className = 'btn btn-custom';
                cardMore.textContent = "Show More";

                //'Listens' if the button is clicked, if so, run openModal()
                cardMore.addEventListener('click', () => {
                    openModal(recipe);
                });

                card.appendChild(cardImage);
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardMore);
                card.appendChild(cardBody);
                recipeResult.appendChild(card);
               

            });
        }
    
    
        
    }
    
    function showAllRecipe(ingredients){

        //Reset Cuisine 
        selectedCuisine = null;

        //Clear any checkbox ticks
        const checkboxes = document.querySelectorAll(".ingredient_list input[type=checkbox]");
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });;

        const checkboxes2 = document.querySelectorAll(".cuisine-list input[type=checkbox]");
        checkboxes2.forEach(checkbox2 => {
            checkbox2.checked = false;
        });;
        
        //Declare Variables
        const recipeResult = document.getElementById('recipeResult');
        recipeResult.innerHTML = '';
    
        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'card';
            //card.style.width = '18rem';
            //card.style.height = "20rem";

            const cardImage = document.createElement('img');
            cardImage.src = recipe.image;
            cardImage.className = "card-img-top";

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = recipe.title;

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.textContent = recipe.description;

            //Creates Button 
            const cardMore = document.createElement('button');
            cardMore.className = 'btn btn-custom';
            cardMore.textContent = "Show More";

            //'Listens' if the button is clicked, if so, run openModal()
            cardMore.addEventListener('click', () => {
                openModal(recipe);
            });
 
            card.appendChild(cardImage);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardMore);
            card.appendChild(cardBody);
            recipeResult.appendChild(card);

        });
    
    };
    
    // Code for Modal
    function openModal(recipe) {
            const modalTitle = document.querySelector('.modal-title');
            const modalBody = document.querySelector('.modal-body');

            // Clear previous modal content
            modalTitle.textContent = '';
            modalBody.innerHTML = '';

            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.width="450";
            recipeImage.height="300";
            recipeImage.style.display = 'block';
            recipeImage.style.margin = '0 auto';

            const modalDescHeading = document.createElement('h5');
            modalDescHeading.textContent = 'Description';

            const modalDesc = document.createElement('p');
            modalDesc.textContent = recipe.description;
            
            const modalIngrHeading = document.createElement('h5');
            modalIngrHeading.textContent = 'Ingredients:';

            const recipeList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = ingredient;
                recipeList.appendChild(listItem);
            });

            const modalStepHeading = document.createElement('h5');
            modalStepHeading.textContent = 'Steps:';

            const modalSteps = document.createElement('p');
            modalSteps.type = "1";
            let stepNumber = 1;

            recipe.steps.forEach(ingredient => {
                const listItem2 = document.createElement('p');
                listItem2.textContent = stepNumber + '. ' + ingredient;
                modalSteps.appendChild(listItem2);
                stepNumber++;
            });


            // Set modal title and body content based on the recipe
            modalTitle.textContent = recipe.title;
            
            modalBody.appendChild(recipeImage);
            modalBody.appendChild(document.createElement('br'));
            modalBody.appendChild(modalDescHeading);
            modalBody.appendChild(modalDesc);
            modalBody.appendChild(document.createElement('br'));
            modalBody.appendChild(modalIngrHeading);
            modalBody.appendChild(recipeList);
            modalBody.appendChild(document.createElement('br'));
            modalBody.appendChild(modalStepHeading);
            modalBody.appendChild(modalSteps);

            // Show the modal
            const modal = document.getElementById('myModal');
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();

            // Get the "Close" button element
            const closeButton = document.querySelector('.modal-header button[data-dismiss="modal"]');

            // Add event listener to the close button
            closeButton.addEventListener('click', function() {
                modalInstance.hide();
            });
    };
        
