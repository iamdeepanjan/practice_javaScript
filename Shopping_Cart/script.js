document.addEventListener("DOMContentLoaded", ()=>{
    const products = [
        {id:1, name:"Mobile", price:20000},
        {id:2, name:"Laptop", price:40000},
        {id:3, name:"Tablet", price:30000},
        {id:4, name:"Watch", price:10000},
    ];

    const cart = [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMsg = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

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
        renderCart();
    }

    function renderCart(){
        cartItems.innerHTML = ""
        let totalPrice = 0;

        if(cart.length>0){
            emptyCartMsg.classList.add("hidden");
            cartTotal.classList.remove("hidden");
            cart.forEach((item) => {
                totalPrice += item.price;
                const itemDiv = document.createElement("div");
                itemDiv.innerHTML = `
                    ${item.name} - ₹${item.price}
                `
                cartItems.appendChild(itemDiv);
                totalPriceDisplay.textContent = `${totalPrice}`;
            })
        }
        else{
            totalPriceDisplay.textContent = `0.00`;
            emptyCartMsg.classList.remove("hidden");
            // cartTotal.classList.add("hidden");

        }
    }

    checkoutBtn.addEventListener('click', ()=>{
        cart.length = 0;
        alert("Check out Successfully")
        renderCart();
    })
});