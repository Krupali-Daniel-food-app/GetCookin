//namespace
const recipeApp = {};


//make ajax call to request to get recipe
recipeApp.getRecipes = function (query) {
    $.ajax({
        url: "https://api.edamam.com/search?app_key=ce398087faaa6cb49e91f5c2860b1493&app_id=ae9c0914&",
        method: 'GET',
        dataType: 'json',
        data: {
            q: query,
            from: 0,
            to: 6
        }

    }).then(function (result) {
        $('.result').empty();
        recipeApp.displayRecipes(result.hits)
    })
}

//make a call to API for users to select ingredients
//display images, url and info
recipeApp.displayRecipes = function (data) {
    data.forEach(function (food) {
        const recipeHtml = `
        <div class="recipeCard">
            <div class="recipeImg">
                <img src="${food.recipe.image}">
            </div>
            <div class="recipeText">
                <a target="_blank" class="recipeLink" href="${food.recipe.url}">${food.recipe.label}</a>
                <p class="recipeContent" >Calories: ${Math.round(food.recipe.calories)} kcal</p>
                <p class="recipeContent">Serves: ${food.recipe.yield}</p>
            </div>
        </div>`

        //append the results
        $('.result').append(recipeHtml);
    })
}

//prevent default after the form is submitted
$('form').on('submit', function (e) {
    e.preventDefault();
    const selection = $('input').val();
    recipeApp.getRecipes(selection);
})

//init function
recipeApp.init = function () {
    recipeApp.getRecipes('');
}

//document ready
$(function () {
    recipeApp.init();
})



