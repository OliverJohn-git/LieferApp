function init(){
    renderCategory()
}

function renderCategory(){
    let categoryContent = document.getElementById("menues");
    categoryContent.innerHTML="";

    const renderdCategorys = {};

    for (let i = 0; i < menus.length; i++) {
        let dishcategory = menus[i].category;

        if(!renderdCategorys[dishcategory]){
            renderdCategorys[dishcategory] = true;

            categoryContent.innerHTML += categoryTemp(dishcategory);
           
            renderDish(dishcategory , i);
        }
        
    }
    
}

function renderDish(dishcategory, i){
    let dishContent = document.getElementById("dish_place");

    for (let j = 0; j < menus.length; j++) {
        const singleDish = menus[j];

        if(singleDish.category === dishcategory){
        dishContent.innerHTML += dishTemp(singleDish, i);
        }
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

// function amountUp(i){
//     let amount = menus[i].amount;
//     if (menus[i].amount == 0) {
        
//     }else{
//     amount +1;
//     }
//     renderCart()
// }

// function amountDown(i){
//     let amountDown = menus[i].amount;
//     amountDown -1;

//     if(menus[i].amount){
//         menus[i].amount == 0;
//         deleteDish(i);
//     }

//     renderCart()
// }

// function deleteDish(i) {
//     menus[i].inCart = false

//     renderCart()
// }