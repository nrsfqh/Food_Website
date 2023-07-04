// The main functions
// Some of the scripts are the same as the local ones, 
// the only changes are the AJAX Routes and others

function change() {
    // Declare variables
    const input = document.querySelectorAll('.ingredient_list input[type=checkbox]');
    const cuisineInput = document.querySelectorAll('.cuisine-list input[type=checkbox]');

    // Selected ingredients & cuisines are now stored in their respective array
    const selectedIngredients = Array.from(input)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const selectedCuisine = Array.from(cuisineInput)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    if (selectedIngredients.length > 0) {
        var Ingredientdata = {
            ingredients: selectedIngredients.join(',')
        };
    }

    // Make an AJAX request to the server-side route for filtering

    // Filter for ingredients AND Cuisine (main)
    // Checks if BOTH array lengths are more than 0

    if (selectedCuisine.length > 0 && selectedIngredients.length > 0) {

        $.ajax({
            url: '/recipes/filter/' + selectedIngredients.join(',') + '/' + selectedCuisine.join(','),
            type: 'GET',
            success: function (response) {
                console.log('Filtered recipes:', response);
                //Update to show cards
                displayFilteredRecipes(response);
            },
            error: function (xhr, status, error) {
                console.log('Error filtering recipes by cuisine:', error);
            }
        });
    }

    // Filter for ingredients ONLY 
    else if (selectedIngredients.length > 0) {

        $.ajax({
            url: '/recipes/ingredients/' + selectedIngredients.join(','),
            method: 'GET',
            success: function (response) {
                console.log('Filtered recipes:', response);
                // Update to show Card
                displayFilteredRecipes(response);
            },
            error: function (error) {
                console.log('Error filtering recipes:', error);
            }
        });
    }

    // Filter by cuisine ONLY
    else if (selectedCuisine.length > 0) {

        $.ajax({
            url: '/recipes/cuisine_filter/' + selectedCuisine.join(','),
            type: 'GET',
            success: function (response) {
                console.log('Filtered recipes by cuisine:', response);
                //Update to show cards
                displayFilteredRecipes(response);
            },
            error: function (xhr, status, error) {
                console.log('Error filtering recipes by cuisine:', error);
            }
        });
    }

    // No filters selected
    else {
        console.log("No filters selected");
        // Clear the displayed recipes so no recipes show
        displayFilteredRecipes([]); 
    }

}

function displayFilteredRecipes(recipes) {
    const recipeResult = document.getElementById('recipeResult');
    recipeResult.innerHTML = '';

    if (recipes.length > 0) {
        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'card';

            const cardImage = document.createElement('img');
            cardImage.src = `img/${recipe.image}`;
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

function showAllRecipe(recipes) {

    //Reset Cuisine and Ingredients 
    selectedCuisine = null;
    selectedIngredients = null;

    //Clear any checkbox ticks
    const checkboxes = document.querySelectorAll(".ingredient_list input[type=checkbox]");
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    const checkboxes2 = document.querySelectorAll(".cuisine-list input[type=checkbox]");
    checkboxes2.forEach(checkbox2 => {
        checkbox2.checked = false;
    });

    //Ajax Route
    $.ajax({
        url: '/recipes',
        type: 'GET',
        success: function (response) {
            console.log('Filtered recipes successfully');
            //Update to show cards
            displayFilteredRecipes(response);
        },
        error: function (xhr, status, error) {
            console.log('Error filtering recipes by cuisine:', error);
        }
    });

    //Declare Variables
    const recipeResult = document.getElementById('recipeResult');
    recipeResult.innerHTML = '';

    if (recipes && recipes.length > 0) {
        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'card';

            const cardImage = document.createElement('img');
            cardImage.src = `img/${recipe.image}`;
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
    recipeImage.width = "450";
    recipeImage.height = "300";
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
    closeButton.addEventListener('click', function () {
        modalInstance.hide();
    });
};

