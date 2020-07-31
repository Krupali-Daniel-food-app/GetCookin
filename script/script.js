
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
                <img src="${food.recipe.image}">
            </div>
            <div class="recipeText">
                <p>${food.recipe.label}</p>
                <p>Calories: ${Math.round(food.recipe.calories)}</p>
                <p>${food.recipe.url}"</p>
            </div>
        </div>`

        $('.result').append(recipeHtml);
    })
}

$('form').on('submit', function(e){
    e.preventDefault();
    const selection = $('input').val();
    recipeApp.getRecipes(selection);
})

recipeApp.init = function() {
    recipeApp.getRecipes('');
}

$(function(){
    recipeApp.init();
})



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