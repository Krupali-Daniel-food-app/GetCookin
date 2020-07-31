
const recipeApp = {};


recipeApp.getRecipes = function(query) {
    $.ajax({
        url: "https://api.edamam.com/search?app_key=ce398087faaa6cb49e91f5c2860b1493&app_id=ae9c0914&",
        method: 'GET',
        dataType: 'json',
        data: {
            q: query
        }

    }).then(function(result) {
        // console.log(result);
        $('.result').empty();
        recipeApp.displayRecipes(result.hits)
    })
}

recipeApp.displayRecipes = function(data){
    data.forEach(function(food){
        const recipeHtml = `
        <div class"recipeCard">
            <div class"recipeImg">
                <p>${food.recipe.label}</p>
            </div>
        </div>`

        $('.result').append(recipeHtml);
    })
}

$('form').on('submit', function(e){
    e.preventDefault();
    const selection1 = $('.firstIngredient').val();
    const selection2 = $('.secondIngredient').val();
    const selection3 = $('.thirdIngredient').val();
    recipeApp.getRecipes(selection1, selection2, selection3);
})

recipeApp.init = function() {
    recipeApp.getRecipes('');
}

$(function(){
    recipeApp.init();
})


// recipeApp.getRecipes();
// const image = result.recipe.image;
// const title = result.recipe.label;
// const recipeUrl = result.recipe.url;
// const calories = result.recipe.calories;




// $('p.recipeTest').html(`The ${image}`)

// recipeApp.showResults = () => {

//     const recipePromise = recipeApp.getRecipeDetails();

//     recipePromise.then((recipeData) => {
        
//         const chosenRecipe = document.querySelector('input[name="ingredients"]:checked')
//         $('#firstIngredient', '#secondIngredient', '#thirdIngredient').val();
//     })
// }

//information needed from API
// results.forEach(function (item){
//     const image = item.recipe.image;
//     const title = item.recipe.label;
//     const recipeUrl = item.recipe.url;
//     const calories = item.recipe.calories;
// })

// //displaying results to webpage

// $('.recipeCard').append(
//     `<div class="recipeCard"></div>`
// )

// recipeApp.showResults();

// namespace
// Recipe API and the URL key
// Intialise the init
// set up the first page at initial load
// watch for user input in search bar
// make sure the users select atleast 3 ingredients 
// retrive data from the api to reflect on the pages
// get multiple recipes
// display recipe title, image and link to the recipe
// function to reset page on the refresh
// doc ready
// stretch goals
// display time to cook recipe and nutritional count on dom for users