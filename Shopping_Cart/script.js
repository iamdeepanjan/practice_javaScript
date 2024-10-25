document.addEventListener("DOMContentLoaded", ()=>{
    const products = [
        {id:1, name:"Mobile", price:20000},
        {id:2, name:"Laptop", price:40000},
        {id:3, name:"Tablet", price:30000},
        {id:4, name:"Watch", price:10000},
    ];

    let cart = [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    function loadCartFromLocalStorage() {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            cart = JSON.parse(savedCart);
            renderCart();
        }
    }

    function saveCartToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name} - ₹${product.price}</span>
            <button data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', (event)=>{
        if(event.target.tagName === "BUTTON"){
            const productId = parseInt(event.target.getAttribute("data-id"));
            const product = products.find(product => product.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product){
        cart.push(product);
        saveCartToLocalStorage();
        renderCart();
    }

    function renderCart(){
        cartItems.innerHTML = ""
        let totalPrice = 0;

        if(cart.length>0){
            cartTotal.classList.remove("hidden");
            cart.forEach((item) => {
                totalPrice += item.price;
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item");
                itemDiv.innerHTML = `
                    <span>${item.name} - ₹${item.price} </span>
                    <button data-id="${item.id}"> Remove Item </button>
                `;
                cartItems.appendChild(itemDiv);
                totalPriceDisplay.textContent = `${totalPrice}`;
            })
        }
        else{
            totalPriceDisplay.textContent = `0.00`;
            const emptyDiv = document.createElement("p");
            emptyDiv.innerHTML = `Your cart is empty`
            emptyDiv.classList.add("empty-cart")
            cartItems.appendChild(emptyDiv);    

        }
    }

    cartItems.addEventListener('click', (event)=>{
        if(event.target.tagName === 'BUTTON'){
            const itemId = parseInt(event.target.getAttribute("data-id"));
            cart = cart.filter(cartItem => cartItem.id !== itemId);
            saveCartToLocalStorage();
            renderCart();
        }
    })

    checkoutBtn.addEventListener('click', ()=>{
        cart.length = 0;
        alert("Check out Successfully")
        renderCart();
    })

    loadCartFromLocalStorage();
});