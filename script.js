function init(){
    renderCategory();
    renderDish();
}

function renderCategory(){
    let categoryContent = document.getElementById("menues");
    categoryContent.innerHTML="";

    for (let i = 1; i < menus.length; i++) {
        const dishcategory = menus.category[i];
        
        categoryContent.innerHTML += categoryTemp(dishcategory);
    }
}

function renderDish(){
    let dishContent = document.getElementsById("dish_place")
    dishContent.innerHTML="";

    for (let i = 0; i < menus.length; i++) {
        const singleDish = menus[i];
        
        dishContent.innerHTML += dishTemp(singleDish);
    }
}