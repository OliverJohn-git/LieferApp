function init(){
    renderCategory()
}

function renderCategory(){
    let categoryContent = document.getElementById(`menues`);
    categoryContent.innerHTML="";

    const renderdCategorys = {};

    for (let i = 0; i < menus.length; i++) {
        let dishcategory = menus[i].category;

        if(!renderdCategorys[dishcategory]){
            renderdCategorys[dishcategory] = true;

            categoryContent.innerHTML += categoryTemp(dishcategory, i);
           
            renderDish(dishcategory , i);
        }
        
    }
    
}

function renderDish(dishcategory, i){
    let dishContent = document.getElementById(`dish_place${i}`);

    for (let d = 0; d < menus.length; d++) {
        const singleDish = menus[d];

        if(singleDish.category === dishcategory){
        dishContent.innerHTML += dishTemp(singleDish, i);
        }
    }
}

function renderCart(){
    let cartContent = document.getElementById(`shoping_cart`);

    if(shoping_cart.length)
        shoping_cart.length == 0;
        cartContent.innerHTML="<h3>Dein Warenkorb ist leer!</h3>";
    } else {
        for (let c = 0; c < shoping_cart.length; c++) {
        const cartItems = shoping_cart[c];

        cartItems.innerHTML="";
        cartItems.innerHTML+=cartTemp(cartItems, c)

     //     if (cartDish.inCart) {
    //         cartDish.inCart == true;
    //         if (cartDish){
    //             cartDish.amount >0;
    //         }
    //         cartContent.innerHTML += cartTemp(cartDish, i, c);
    //     }
    // }
    // let renderedItems = new Set();

    // menus.forEach(item => {
    //     // Wenn das Objekt die Bedingung erfüllt und noch nicht gerendert wurde
    //     if (item.inCart === true && !renderedItems.has(item.id)) {
    //     console.log(`Rendering ${item.name}`);
      
    //     // Markiere das Objekt als gerendert
    //     renderedItems.add(item.id);
        // }
        };
    }

function addToBasket(i){
    
    let dishToCart = menus.find(item => item.id);

    let dishName = dishToCart.name;
    let dishPrice = dishToCart.price;
    let dishAmount = dishToCart.amount;

    let newCartItem =[
        newName = dishName,
        newPrice = dishPrice,
        newAmount = dishAmount,
    ]

    shoping_cart.push(newCartItem);
        renderCart()
}