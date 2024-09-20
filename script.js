function init(){
    renderCategory();
    renderDish();
}

function renderCategory(){
    let categoryContent = document.getElementById("menues");
    categoryContent.innerHTML="";

    for (let i = 0; i < menus.length; i++) {
        const dishcategory = menus[i].category;

        if(menus[i].rendert === false){
            let a =  menus[i].rendert;
            categoryContent.innerHTML += categoryTemp(dishcategory);
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

