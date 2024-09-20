function init(){
    renderCategory();
    renderDish();
}

function renderCategory(){
    let categoryContent = document.getElementById("menues");
    categoryContent.innerHTML="";

    for (let i = 0; i < menus.length; i++) {
        const dishcategory = menus[i].category;

        if(menus[i].rendert = false){
            categoryContent.innerHTML += categoryTemp(dishcategory);
            menus[i].rendert = true 
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
    let cartContent = document.getElementById("shoping_cart")
    cartContent.innerHTML="";

    for (let i = 0; i < menus.length; i++) {
        const cartDish = menus[i].inCart;
        
        if(cartDish = false)
            cartContent.innerHTML += cartTemp(cartDish)
    }
}