import presentDrinks from './src/presentDrinks.js'
import './src/searchForm.js'


const URL ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'


window.addEventListener('DOMContentLoaded',()=>{
    presentDrinks(URL);
});