function categoryTemp (dishcategory){
    return /*html*/`
    <div class="category_card">
        <h4 id="dish_category">${dishcategory}</h4>
       <div id="dish_place"></div> 
    </div>
    `
}

function dishTemp (singleDish){
    return/*html*/`
        <div class="dish_card">
            <h5>${singleDish.name}</h5>
            <img id="picture_dish_temp" src="${singleDish.picture}" alt="Ups! Something went wrong">
            <p id="discription_dish_temp">${singleDish.description}</p>
            <p id="price_dish_temp">${singleDish.price}€</p>
            <button id="atc_button_temp" >Add to Cart</button>
        </div>
    `
}