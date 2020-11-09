
import {showLoading} from './toggleLoading.js'
import {hideLoading} from './toggleLoading.js'
import get from './getElement.js'

const displayDrinks = ({drinks})=>{
    showLoading();
   const section = get('.section-center')
   const title = get('.title');
   if(!drinks){
       //hide loading
       title.textContent = 'Sorry, no drinks matched tour search';
       section.innerHTML = null;
       return;
   }
   const newDrinks = drinks.map((drink)=>{
       const{idDrink:id, strDrink:name,strDrinkThumb:image} = drink;
       return `<a href="drink.html">
          <article class="cocktail"data-id="${id}">
            <img src="${image}" alt="cocktail">
            <h3>${name}</h3>
          </article>
        </a>`
   }).join('');
   hideLoading();
   // hide loading
   title.textContent = '';
   section.innerHTML = newDrinks;
   return section;
}

export default displayDrinks;