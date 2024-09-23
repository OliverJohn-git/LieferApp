function categoryTemp(dishcategory, i){
    return /*html*/`
    <div class="category_card">
        <h4 id="dish_category">${dishcategory}</h4>
       <div id="dish_place${i}"></div> 
    </div>
    `
}

function dishTemp(singleDish){
    return/*html*/`
        <div class="dish_card">
            <h5>${singleDish.name}</h5>
            <img id="picture_dish_temp" src="${singleDish.picture}" alt="Ups! Something went wrong">
            <p id="discription_dish_temp">${singleDish.description}</p>
            <p id="price_dish_temp">${singleDish.price}€</p>
            <button onclick="amountUp(${singleDish})" id="atc_button_temp" >Add to Cart</button>
        </div>
    `
}

function cartTemp(cartDish, i){
    return/*html*/`
        <h3>Warenkorb</h3>
        <div id="cart_name" >${cartDish.name}</div>
        <div id="cart_price"> ${cartDish.price}</div>
        <div class="amount_cart" >
            <img onclick="amountDown(${i})" src="./img/icon/minus.svg" alt="">
            <p id="cart_amount">${cartDish.amount}</p>
            <img onclick="amountUp(${i})" src="./img/icon/plus.svg" alt="">
            <img onclick="deleteDish(${i})" src="./img/icon/trash_bin.svg" alt="">
        </div>
    `
}