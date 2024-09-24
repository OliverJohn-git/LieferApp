function categoryTemp(dishcategory, i){
    return /*html*/`
    <div class="category_card">
        <h4 id="dish_category">${dishcategory}</h4>
       <div id="dish_place${i}"></div> 
    </div>
    `
}

function dishTemp(singleDish, i){
    return/*html*/`
        <div class="dish_card">
            <h5>${singleDish.name}</h5>
            <img id="picture_dish_temp" src="${singleDish.picture}" alt="Ups! Something went wrong">
            <p id="discription_dish_temp">${singleDish.description}</p>
            <p id="price_dish_temp">${singleDish.price}€</p>
            <button onclick="addToBasket(${i})" id="atc_button_temp" >Add to Cart</button>
        </div>
    `
}

function cartTemp(cartDish, c){
    return/*html*/`
        <div id="cart_name" >${cartDish.newName}</div>
        <div id="cart_price"> ${cartDish.newPrice}</div>
        <div class="amount_cart" >
            <img class="cart_amount_btn" onclick="amountDown(${c})" src="./img/icon/minus.svg" alt="">
            <p id="cart_amount">${cartDish.newAmount}</p>
            <img class="cart_amount_btn" onclick="amountUp(${c})" src="./img/icon/plus.svg" alt="">
            <img class="cart_amount_btn" onclick="deleteDish(${c})" src="./img/icon/trash_bin.svg" alt="">
        </div>
    `
}