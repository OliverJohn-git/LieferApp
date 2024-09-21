function init(){
    renderCategory();
    renderDish();
}

function renderCategory(){
    let categoryContent = document.getElementById("menues");
    categoryContent.innerHTML="";

    for (let i = 0; i < menus.length; i++) {
        const dishcategory = menus[i].category;

        if(menus[i].rendert == false){
            categoryContent.innerHTML += categoryTemp(dishcategory);
            menus[i].rendert == "true"; 
        }else{
        }
        renderDish(dishcategory);
    }
    
}

function renderDish(dishcategory){
    let dishContent = document.getElementById("dish_place");
    dishContent.innerHTML="";

    for (let i = 0; i < menus.length; i++) {
        const singleDish = menus[i];

        dishContent.innerHTML += dishTemp(singleDish);
    }
}

function renderCart(){
    let cartContent = document.getElementById("shoping_cart");
    cartContent.innerHTML="";

    for (let i = 0; i < menus.length; i++) {
        const cartDish = menus[i].inCart;
        
        cartContent.innerHTML += cartTemp(cartDish);
    }
}

function amountUp(i){
    let amountUp = menus[i].amount;
    amountUp += 1;
    
    renderCart()
}

function amountDown(i){
    let amountDown = menus[i].amount;
    amountDown -=1;

    if(menus[i].amount){
        menus[i].amount == 0;
        deleteDish(i);
    }

    renderCart()
}

function deleteDish(i) {
    menus[i].inCart = false

    renderCart()
}