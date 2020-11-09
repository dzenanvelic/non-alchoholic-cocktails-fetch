import {hideLoading} from './toggleLoading.js';
import get from './getElement.js'



const displayDrink =(data)=>{
   hideLoading();
const drink = data.drinks[0]
const {strDrinkThumb:image, strDrink:name,strInstructions:desc} = drink;
const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
];
const img = get('.drink-img')
const drinkName = get('.drink-name')
const description = get('.drink-desc')
const ingerdients = get('.drink-ingredients')
img.src = image;
document.title = name;
drinkName.textContent = name;
description.textContent = desc;
ingerdients.innerHTML = list.map((item)=>{
    if(item === null){
        return
    }else{
        return `<li class="far fa-check-square"><i></i>${item}</li>`
    }
}).join('')

}

export default displayDrink;