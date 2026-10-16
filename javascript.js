
/* =========================
   PRODUCT DATA
========================= */

const products = [
{
id:1,name:"Fresh Red Apples",category:"Fruits",price:149,oldPrice:189,unit:"1 kg",
rating:4.8,reviews:124,badge:"Bestseller",stock:20,image:"apple fruit"
},
{
id:2,name:"Premium Bananas",category:"Fruits",price:59,oldPrice:75,unit:"1 dozen",
rating:4.7,reviews:98,badge:"Fresh",stock:30,image:"banana fruit"
},
{
id:3,name:"Alphonso Mangoes",category:"Fruits",price:249,oldPrice:299,unit:"1 kg",
rating:4.9,reviews:156,badge:"Premium",stock:15,image:"mango fruit"
},
{
id:4,name:"Fresh Oranges",category:"Fruits",price:119,oldPrice:149,unit:"1 kg",
rating:4.6,reviews:87,badge:"Fresh",stock:24,image:"orange fruit"
},
{
id:5,name:"Pomegranate",category:"Fruits",price:179,oldPrice:219,unit:"1 kg",
rating:4.8,reviews:112,badge:"Popular",stock:18,image:"pomegranate fruit"
},
{
id:6,name:"Green Grapes",category:"Fruits",price:139,oldPrice:169,unit:"500 g",
rating:4.7,reviews:74,badge:"Fresh",stock:19,image:"green grapes"
},
{
id:7,name:"Fresh Tomatoes",category:"Vegetables",price:49,oldPrice:65,unit:"1 kg",
rating:4.7,reviews:145,badge:"Fresh",stock:40,image:"tomatoes vegetable"
},
{
id:8,name:"Potatoes",category:"Vegetables",price:45,oldPrice:55,unit:"1 kg",
rating:4.6,reviews:102,badge:"Value",stock:50,image:"potatoes vegetable"
},
{
id:9,name:"Onions",category:"Vegetables",price:55,oldPrice:69,unit:"1 kg",
rating:4.7,reviews:117,badge:"Fresh",stock:45,image:"onions vegetable"
},
{
id:10,name:"Fresh Broccoli",category:"Vegetables",price:79,oldPrice:99,unit:"500 g",
rating:4.8,reviews:91,badge:"Healthy",stock:16,image:"broccoli vegetable"
},
{
id:11,name:"Fresh Carrots",category:"Vegetables",price:59,oldPrice:75,unit:"500 g",
rating:4.6,reviews:65,badge:"Fresh",stock:26,image:"carrots vegetable"
},
{
id:12,name:"Cucumbers",category:"Vegetables",price:45,oldPrice:59,unit:"1 kg",
rating:4.5,reviews:56,badge:"Fresh",stock:28,image:"cucumber vegetable"
},
{
id:13,name:"Full Cream Milk",category:"Dairy",price:68,oldPrice:74,unit:"1 L",
rating:4.8,reviews:231,badge:"Daily",stock:35,image:"milk bottle"
},
{
id:14,name:"Farm Fresh Eggs",category:"Dairy",price:99,oldPrice:115,unit:"12 pcs",
rating:4.9,reviews:187,badge:"Farm Fresh",stock:22,image:"fresh eggs carton"
},
{
id:15,name:"Fresh Paneer",category:"Dairy",price:129,oldPrice:149,unit:"200 g",
rating:4.8,reviews:92,badge:"Fresh",stock:17,image:"paneer cheese"
},
{
id:16,name:"Amul Butter",category:"Dairy",price:58,oldPrice:62,unit:"100 g",
rating:4.7,reviews:154,badge:"Popular",stock:30,image:"butter dairy"
},
{
id:17,name:"Greek Yogurt",category:"Dairy",price:89,oldPrice:109,unit:"400 g",
rating:4.6,reviews:68,badge:"Healthy",stock:18,image:"greek yogurt"
},
{
id:18,name:"Whole Wheat Bread",category:"Bakery",price:49,oldPrice:60,unit:"400 g",
rating:4.7,reviews:156,badge:"Fresh",stock:20,image:"whole wheat bread"
},
{
id:19,name:"Butter Croissant",category:"Bakery",price:99,oldPrice:129,unit:"2 pcs",
rating:4.8,reviews:81,badge:"Premium",stock:12,image:"croissant bakery"
},
{
id:20,name:"Chocolate Muffins",category:"Bakery",price:119,oldPrice:149,unit:"4 pcs",
rating:4.7,reviews:76,badge:"Popular",stock:14,image:"chocolate muffins"
},
{
id:21,name:"Fresh Burger Buns",category:"Bakery",price:69,oldPrice:79,unit:"4 pcs",
rating:4.5,reviews:48,badge:"Fresh",stock:19,image:"burger buns"
},
{
id:22,name:"Chocolate Cookies",category:"Bakery",price:89,oldPrice:109,unit:"250 g",
rating:4.8,reviews:131,badge:"Bestseller",stock:23,image:"chocolate cookies"
},
{
id:23,name:"Potato Chips",category:"Snacks",price:35,oldPrice:40,unit:"100 g",
rating:4.6,reviews:190,badge:"Popular",stock:35,image:"potato chips"
},
{
id:24,name:"Salted Popcorn",category:"Snacks",price:69,oldPrice:85,unit:"150 g",
rating:4.5,reviews:61,badge:"Snack",stock:24,image:"popcorn snack"
},
{
id:25,name:"Chocolate Bar",category:"Snacks",price:55,oldPrice:65,unit:"100 g",
rating:4.8,reviews:173,badge:"Popular",stock:32,image:"chocolate bar"
},
{
id:26,name:"Masala Namkeen",category:"Snacks",price:75,oldPrice:90,unit:"200 g",
rating:4.7,reviews:84,badge:"Indian Snack",stock:20,image:"indian namkeen"
},
{
id:27,name:"Cream Biscuits",category:"Snacks",price:40,oldPrice:50,unit:"120 g",
rating:4.6,reviews:93,badge:"Value",stock:28,image:"cream biscuits"
},
{
id:28,name:"Orange Juice",category:"Beverages",price:109,oldPrice:129,unit:"1 L",
rating:4.7,reviews:105,badge:"Fresh",stock:20,image:"orange juice bottle"
},
{
id:29,name:"Cold Coffee",category:"Beverages",price:99,oldPrice:119,unit:"300 ml",
rating:4.8,reviews:78,badge:"Popular",stock:18,image:"cold coffee"
},
{
id:30,name:"Mineral Water",category:"Beverages",price:25,oldPrice:30,unit:"1 L",
rating:4.6,reviews:74,badge:"Essential",stock:50,image:"water bottle"
},
{
id:31,name:"Green Tea",category:"Beverages",price:149,oldPrice:179,unit:"25 bags",
rating:4.7,reviews:69,badge:"Healthy",stock:15,image:"green tea"
},
{
id:32,name:"Mango Juice",category:"Beverages",price:99,oldPrice:119,unit:"1 L",
rating:4.6,reviews:84,badge:"Popular",stock:21,image:"mango juice"
},
{
id:33,name:"Premium Basmati Rice",category:"Staples",price:249,oldPrice:299,unit:"5 kg",
rating:4.8,reviews:204,badge:"Premium",stock:25,image:"basmati rice"
},
{
id:34,name:"Whole Wheat Flour",category:"Staples",price:219,oldPrice:249,unit:"5 kg",
rating:4.7,reviews:143,badge:"Daily",stock:24,image:"wheat flour"
},
{
id:35,name:"Toor Dal",category:"Staples",price:159,oldPrice:179,unit:"1 kg",
rating:4.8,reviews:111,badge:"Popular",stock:18,image:"toor dal lentils"
},
{
id:36,name:"White Sugar",category:"Staples",price:49,oldPrice:55,unit:"1 kg",
rating:4.6,reviews:89,badge:"Value",stock:40,image:"white sugar"
},
{
id:37,name:"Cooking Oil",category:"Staples",price:159,oldPrice:179,unit:"1 L",
rating:4.7,reviews:121,badge:"Daily",stock:30,image:"cooking oil bottle"
},
{
id:38,name:"Table Salt",category:"Staples",price:28,oldPrice:32,unit:"1 kg",
rating:4.6,reviews:74,badge:"Essential",stock:45,image:"salt packet"
}
];

/* =========================
   STATE
========================= */

function readStorage(key, fallback){
    try{
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    }catch(error){
        return fallback;
    }
}

let cart = readStorage("freshcartCart", []);
let users = readStorage("freshcartUsers", []);
let currentUser = readStorage("freshcartUser", null);
let orders = readStorage("freshcartOrders", []);
let savedAddress = localStorage.getItem("freshcartAddress") || "";

cart = Array.isArray(cart)
    ? cart.map(item => ({ id:Number(item.id), qty:Number(item.qty) || 0 })).filter(item => item.id && item.qty > 0)
    : [];

try{
    localStorage.setItem("freshcartCart", JSON.stringify(cart));
}catch(error){}

if(currentUser && !users.some(u => u.id === currentUser.id)){
    users.push(currentUser);
    try{
        localStorage.setItem("freshcartUsers", JSON.stringify(users));
    }catch(error){}
}
let activeCategory = "All";
let couponDiscount = 0;
let currentTrackingOrder = null;

const trackingStatuses = [
    "Order Placed",
    "Confirmed",
    "Packed",
    "Out for Delivery",
    "Delivered"
];

/* =========================
   IMAGE URL
========================= */

const productImageMap = {
    apple:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=70",
    banana:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=70",
    mango:"https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=70",
    orange:"https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=70",
    pomegranate:"https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=600&q=70",
    grapes:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=70",
    tomato:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=70",
    potato:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=70",
    onion:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=70",
    broccoli:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=70",
    carrot:"https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=600&q=70",
    cucumber:"https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=70",
    milk:"https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=70",
    egg:"https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=70",
    paneer:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=70",
    butter:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=70",
    yogurt:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=70",
    bread:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=70",
    croissant:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=70",
    muffin:"https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=600&q=70",
    buns:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=70",
    cookie:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=70",
    chips:"https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=70",
    popcorn:"https://images.unsplash.com/photo-1578849278619-7f8b4b8e9c1f?auto=format&fit=crop&w=600&q=70",
    chocolate:"https://images.unsplash.com/photo-1575377222312-dd1a95f2f3f8?auto=format&fit=crop&w=600&q=70",
    namkeen:"https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=70",
    biscuit:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=70",
    juice:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=70",
    coffee:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=70",
    water:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=70",
    tea:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=70",
    rice:"https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=70",
    flour:"https://images.unsplash.com/photo-1623428187969-5da2dcea5a8b?auto=format&fit=crop&w=600&q=70",
    dal:"https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=600&q=70",
    sugar:"https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=600&q=70",
    oil:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=70",
    salt:"https://images.unsplash.com/photo-1518110925495-5f9c0e9f6f0d?auto=format&fit=crop&w=600&q=70"
};

function getImage(product){
    const key = product.image.toLowerCase();
    for(const name in productImageMap){
        if(key.includes(name)) return productImageMap[name];
    }
    return productImageMap.apple;
}

function fallbackImage(text){
    const label = String(text || "Fresh Product").replace(/[<>&"']/g, "");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="500" viewBox="0 0 600 500"><rect width="600" height="500" rx="32" fill="#eaf7f0"/><circle cx="300" cy="210" r="105" fill="#c9ecd9"/><text x="300" y="225" text-anchor="middle" font-family="Arial" font-size="42">🥬</text><text x="300" y="365" text-anchor="middle" font-family="Arial" font-size="24" font-weight="700" fill="#123b2b">${label.slice(0,28)}</text></svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

/* =========================
   PRODUCT DISPLAY
========================= */

function displayProducts(list = products){

    const grid = document.getElementById("productGrid");

    if(!list.length){
        grid.innerHTML = `
        <div class="col-12">
            <div class="text-center py-5">
                <i class="bi bi-search fs-1 text-success"></i>
                <h4 class="mt-3">No products found</h4>
                <p class="text-muted">Try searching for another grocery item.</p>
            </div>
        </div>`;
        return;
    }

    grid.innerHTML = list.map(p => {

        const wished = JSON.parse(localStorage.getItem("freshcartWishlist") || "[]").includes(p.id);

        return `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="product-card">

                <div class="product-img-wrap image-loading">

                    <img
                        class="product-img"
                        loading="lazy"
                        decoding="async"
                        src="${getImage(p)}"
                        alt="${p.name}"
                        onload="this.parentElement.classList.remove('image-loading')"
                        onerror="this.onerror=null;this.parentElement.classList.remove('image-loading');this.src=fallbackImage(this.alt);"
                    >

                    <span class="product-badge">${p.badge}</span>

                    <button
                        class="wishlist-btn ${wished ? "active" : ""}"
                        onclick="toggleWishlist(${p.id},this)"
                        aria-label="Wishlist">
                        <i class="bi ${wished ? "bi-heart-fill" : "bi-heart"}"></i>
                    </button>

                </div>

                <div class="product-body">

                    <div class="product-category">${p.category}</div>

                    <div class="product-name">${p.name}</div>

                    <div class="rating">
                        ${"★".repeat(Math.round(p.rating))}
                        <span>${p.rating} (${p.reviews})</span>
                    </div>

                    <div class="price-row">
                        <span class="price">₹${p.price}</span>
                        <span class="old-price">₹${p.oldPrice}</span>
                        <span class="unit">${p.unit}</span>
                    </div>

                    <div class="product-bottom">
                        <button
                            type="button"
                            class="add-btn"
                            ${p.stock <= 0 ? "disabled" : ""}
                            data-product-id="${p.id}"
                            onclick="addToCart(${p.id})">

                            ${p.stock <= 0 ? "Out of Stock" : '<i class="bi bi-cart-plus"></i> Add'}
                        </button>
                    </div>

                </div>
            </div>
        </div>`;
    }).join("");
}

/* =========================
   SEARCH
========================= */

function searchProducts(){

    const term = document.getElementById("searchInput").value.toLowerCase().trim();

    let result = products;

    if(activeCategory !== "All"){
        result = result.filter(p => p.category === activeCategory);
    }

    if(term){
        result = result.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term)
        );
    }

    displayProducts(result);
}

/* =========================
   CATEGORY
========================= */

function filterCategory(category, button = null){

    activeCategory = category;

    document.querySelectorAll(".filter-btn").forEach(btn =>
        btn.classList.remove("active")
    );

    if(button){
        button.classList.add("active");
    }else{
        document.querySelectorAll(".filter-btn").forEach(btn=>{
            if(btn.textContent.trim() === category){
                btn.classList.add("active");
            }
        });
    }

    document.getElementById("products").scrollIntoView({
        behavior:"smooth"
    });

    searchProducts();
}

/* =========================
   CART
========================= */

function addToCart(id){

    id = Number(id);

    const product = products.find(p => p.id === id);

    if(!product) return;

    const existing = cart.find(item => Number(item.id) === id);

    if(existing){

        if(existing.qty >= product.stock){
            showToast("Maximum available stock reached.");
            return;
        }

        existing.qty++;

    }else{

        cart.push({
            id:product.id,
            qty:1
        });
    }

    updateCart();
    saveCart();
    showToast(`${product.name} added to cart.`);
}

window.addToCart = addToCart;

function saveCart(){
    try{
        localStorage.setItem("freshcartCart",JSON.stringify(cart));
    }catch(error){}
}

function changeQuantity(id,amount){

    const item = cart.find(x => x.id === id);

    if(!item) return;

    const product = products.find(p => p.id === id);

    item.qty += amount;

    if(item.qty > product.stock){
        item.qty = product.stock;
        showToast("Maximum available stock reached.");
    }

    if(item.qty <= 0){
        cart = cart.filter(x => x.id !== id);
    }

    saveCart();
    updateCart();
}

function calculateSubtotal(){

    return cart.reduce((total,item)=>{

        const product = products.find(p=>p.id===item.id);

        return total + (product ? product.price * item.qty : 0);

    },0);
}

function calculateDelivery(subtotal){

    if(subtotal === 0) return 0;

    return subtotal >= 499 ? 0 : 40;
}

function updateCart(){

    const count = cart.reduce((sum,item)=>sum + item.qty,0);

    document.getElementById("cartCount").textContent = count;

    const container = document.getElementById("cartItems");

    if(!cart.length){

        container.innerHTML = `
        <div class="text-center py-5">
            <i class="bi bi-cart-x fs-1 text-muted"></i>
            <h5 class="mt-3">Your cart is empty</h5>
            <p class="text-muted small">Add some fresh groceries to get started.</p>
        </div>`;

        updateCartSummary();
        return;
    }

    container.innerHTML = cart.map(item=>{

        const p = products.find(x=>x.id===item.id);

        return `
        <div class="cart-item">

            <img loading="lazy" src="${getImage(p)}" alt="${p.name}">

            <div class="cart-item-info">
                <strong>${p.name}</strong>
                <small>₹${p.price} · ${p.unit}</small>

                <div class="quantity">
                    <button onclick="changeQuantity(${p.id},-1)">−</button>
                    <strong>${item.qty}</strong>
                    <button onclick="changeQuantity(${p.id},1)">+</button>
                    <span class="ms-auto fw-bold">₹${p.price * item.qty}</span>
                </div>
            </div>

        </div>`;
    }).join("");

    updateCartSummary();
}

function updateCartSummary(){

    const subtotal = calculateSubtotal();
    const delivery = calculateDelivery(subtotal);
    const discount = Math.min(couponDiscount,subtotal);
    const total = Math.max(0,subtotal + delivery - discount);

    document.getElementById("cartSubtotal").textContent = `₹${subtotal}`;
    document.getElementById("cartDelivery").textContent = delivery === 0 ? "FREE" : `₹${delivery}`;
    document.getElementById("cartDiscount").textContent = `-₹${discount}`;
    document.getElementById("cartTotal").textContent = `₹${total}`;
}

function openCart(){

    document.getElementById("cartSidebar").classList.add("open");
    document.getElementById("cartOverlay").classList.add("show");
}

function closeCart(){

    document.getElementById("cartSidebar").classList.remove("open");
    document.getElementById("cartOverlay").classList.remove("show");
}

/* =========================
   WISHLIST
========================= */

function toggleWishlist(id,button){

    let wishlist = JSON.parse(
        localStorage.getItem("freshcartWishlist") || "[]"
    );

    if(wishlist.includes(id)){

        wishlist = wishlist.filter(x=>x!==id);
        button.classList.remove("active");
        button.innerHTML = '<i class="bi bi-heart"></i>';
        showToast("Removed from wishlist.");

    }else{

        wishlist.push(id);
        button.classList.add("active");
        button.innerHTML = '<i class="bi bi-heart-fill"></i>';
        showToast("Added to wishlist.");
    }

    localStorage.setItem("freshcartWishlist",JSON.stringify(wishlist));
}

/* =========================
   AUTH
========================= */

let authMode = "signin";

function openAuth(mode="signin"){

    closeProfile();

    authMode = mode;

    document.getElementById("authModal").classList.add("show");

    updateAuthUI();
}

function updateAuthUI(){

    const signup = authMode === "signup";

    document.getElementById("authTitle").textContent =
        signup ? "Create Your Account" : "Welcome Back";

    document.getElementById("authSubmit").textContent =
        signup ? "Create Account" : "Sign In";

    document.getElementById("signupFields").style.display =
        signup ? "block" : "none";

    document.getElementById("confirmPasswordField").style.display =
        signup ? "block" : "none";

    document.getElementById("termsField").style.display =
        signup ? "block" : "none";

    document.getElementById("authSwitchText").textContent =
        signup ? "Already have an account?" : "Don't have an account?";

    document.getElementById("authSwitchButton").textContent =
        signup ? "Sign In" : "Create Account";
}

function toggleAuthMode(){

    authMode = authMode === "signin" ? "signup" : "signin";

    clearErrors();
    updateAuthUI();
}

function clearErrors(){

    document.querySelectorAll(".form-error").forEach(el=>{
        el.style.display="none";
        el.textContent="";
    });
}

function showError(id,message){

    const el = document.getElementById(id);

    if(!el) return;

    el.textContent = message;
    el.style.display = "block";
}

function submitAuth(event){

    event.preventDefault();

    clearErrors();

    const email = document.getElementById("authEmail").value.trim().toLowerCase();
    const password = document.getElementById("authPassword").value;

    let valid = true;

    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        showError("emailError","Enter a valid email address.");
        valid=false;
    }

    if(password.length < 6){
        showError("passwordError","Password must contain at least 6 characters.");
        valid=false;
    }

    if(authMode === "signup"){

        const name = document.getElementById("signupName").value.trim();
        const phone = document.getElementById("signupPhone").value.trim();
        const confirm = document.getElementById("confirmPassword").value;
        const terms = document.getElementById("termsCheck").checked;

        if(name.length < 2){
            showError("nameError","Enter your full name.");
            valid=false;
        }

        if(!/^[6-9]\d{9}$/.test(phone)){
            showError("phoneError","Enter a valid 10-digit Indian mobile number.");
            valid=false;
        }

        if(password !== confirm){
            showError("confirmError","Passwords do not match.");
            valid=false;
        }

        if(!terms){
            showError("termsError","Please accept the terms to continue.");
            valid=false;
        }

        if(users.some(u=>u.email===email)){
            showError("emailError","An account with this email already exists.");
            valid=false;
        }

        if(!valid) return;

        const user = {
            id:"U"+Date.now(),
            name,
            phone,
            email,
            password
        };

        users.push(user);

        localStorage.setItem(
            "freshcartUsers",
            JSON.stringify(users)
        );

        currentUser = user;

        localStorage.setItem(
            "freshcartUser",
            JSON.stringify(currentUser)
        );

        closeModal("authModal");
        updateAccountUI();

        showToast("Account created successfully.");

    }else{

        const user = users.find(
            u=>u.email===email && u.password===password
        );

        if(!user){

            showError(
                "emailError",
                "Email or password is incorrect."
            );

            return;
        }

        currentUser = user;

        localStorage.setItem(
            "freshcartUser",
            JSON.stringify(currentUser)
        );

        closeModal("authModal");
        updateAccountUI();

        showToast(`Welcome back, ${user.name.split(" ")[0]}!`);
    }
}

function updateAccountUI(){

    if(currentUser){
        try{
            localStorage.setItem("freshcartUser", JSON.stringify(currentUser));
        }catch(error){}
    }

    const nameElement = document.getElementById("accountName");
    const menuUser = document.getElementById("profileUser");
    const authButton = document.getElementById("profileAuthButton");

    if(currentUser){

        nameElement.textContent =
            currentUser.name.split(" ")[0];

        menuUser.innerHTML = `
            <strong>${currentUser.name}</strong>
            <span>${currentUser.email}</span>
        `;

        authButton.innerHTML =
            '<i class="bi bi-box-arrow-right me-2"></i> Sign Out';

        authButton.onclick = signOut;

    }else{

        nameElement.textContent = "Sign In";

        menuUser.innerHTML = `
            <strong>Welcome to FreshCart</strong>
            <span>Sign in to manage your account</span>
        `;

        authButton.innerHTML =
            '<i class="bi bi-box-arrow-in-right me-2"></i> Sign In';

        authButton.onclick = openAuth;
    }
}

function signOut(){

    currentUser = null;
    localStorage.removeItem("freshcartUser");

    closeProfile();
    updateAccountUI();

    showToast("You have been signed out.");
}

function requireLogin(callback){

    if(!currentUser){

        showToast("Please sign in to continue.");

        setTimeout(()=>{
            openAuth();
        },500);

        return false;
    }

    callback();
    return true;
}

/* =========================
   PROFILE
========================= */

function toggleProfile(){

    document.getElementById("profileMenu").classList.toggle("show");
}

function closeProfile(){

    document.getElementById("profileMenu").classList.remove("show");
}

function openProfileAction(action){

    closeProfile();

    if(!currentUser){

        openAuth();
        return;
    }

    if(action==="orders") openOrders();
    if(action==="track") openTrack();
    if(action==="address") openLocationModal();
}

/* =========================
   LOCATION
========================= */

function openLocationModal(){

    document.getElementById("manualAddress").value =
        savedAddress || "";

    document.getElementById("locationModal").classList.add("show");
}

async function getCurrentLocation(openModal=false){

    if(openModal){
        document.getElementById("locationModal").classList.add("show");
    }

    if(!navigator.geolocation){

        showToast("Location is not supported by this browser.");
        return;
    }

    showToast("Requesting your current location...");

    navigator.geolocation.getCurrentPosition(

        async position => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try{

                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
                );

                if(!response.ok){
                    throw new Error("Location service unavailable");
                }

                const data = await response.json();

                const address =
                    data.display_name ||
                    "Current location detected";

                savedAddress = address;

                localStorage.setItem(
                    "freshcartAddress",
                    savedAddress
                );

                document.getElementById("locationAddress").textContent =
                    savedAddress;

                if(document.getElementById("manualAddress")){
                    document.getElementById("manualAddress").value =
                        savedAddress;
                }

                if(document.getElementById("checkoutAddress")){
                    document.getElementById("checkoutAddress").value =
                        savedAddress;
                }

                showToast("Delivery location updated.");

                if(openModal){
                    setTimeout(()=>{
                        closeModal("locationModal");
                    },700);
                }

            }catch(error){

                showToast(
                    "Location detected, but address lookup failed. Enter it manually."
                );
            }
        },

        error => {

            let message =
                "Unable to access your location. Please enter your address manually.";

            if(error.code === 1){
                message =
                    "Location permission was denied. Please allow location access or enter your address manually.";
            }

            showToast(message);

            if(!openModal){
                openLocationModal();
            }
        },

        {
            enableHighAccuracy:true,
            timeout:10000,
            maximumAge:60000
        }
    );
}

function saveManualAddress(){

    const address =
        document.getElementById("manualAddress").value.trim();

    const error =
        document.getElementById("addressError");

    if(address.length < 10){

        error.textContent =
            "Please enter a complete delivery address.";

        error.style.display="block";

        return;
    }

    error.style.display="none";

    savedAddress = address;

    localStorage.setItem(
        "freshcartAddress",
        savedAddress
    );

    document.getElementById("locationAddress").textContent =
        savedAddress;

    if(document.getElementById("checkoutAddress")){
        document.getElementById("checkoutAddress").value =
            savedAddress;
    }

    closeModal("locationModal");

    showToast("Delivery address saved.");
}

/* =========================
   CHECKOUT
========================= */

function startCheckout(){

    if(!cart.length){

        showToast("Your cart is empty.");
        return;
    }

    requireLogin(()=>{

        closeCart();

        document.getElementById("checkoutAddress").value =
            savedAddress || "";

        updateCheckoutSummary();

        document.getElementById("checkoutModal").classList.add("show");
    });
}

function updateCheckoutSummary(){

    const subtotal = calculateSubtotal();
    const delivery = calculateDelivery(subtotal);
    const discount = Math.min(couponDiscount,subtotal);
    const total = Math.max(0,subtotal + delivery - discount);

    document.getElementById("checkoutSubtotal").textContent =
        `₹${subtotal}`;

    document.getElementById("checkoutDelivery").textContent =
        delivery === 0 ? "FREE" : `₹${delivery}`;

    document.getElementById("checkoutDiscount").textContent =
        `-₹${discount}`;

    document.getElementById("checkoutTotal").textContent =
        `₹${total}`;
}

function applyCoupon(){

    const code =
        document.getElementById("couponInput").value
        .trim()
        .toUpperCase();

    const message =
        document.getElementById("couponMessage");

    const subtotal = calculateSubtotal();

    couponDiscount = 0;

    if(code==="FRESH150"){

        if(subtotal < 999){

            message.textContent =
                "FRESH150 requires a minimum order of ₹999.";

            message.className =
                "small mt-2 text-danger";

            return;
        }

        couponDiscount = 150;

    }else if(code==="SNACK20"){

        couponDiscount = Math.round(subtotal * .20);

    }else if(code){

        message.textContent =
            "Invalid coupon code.";

        message.className =
            "small mt-2 text-danger";

        updateCheckoutSummary();
        return;

    }else{

        message.textContent =
            "Enter a coupon code.";

        message.className =
            "small mt-2 text-danger";

        return;
    }

    message.textContent =
        `Coupon applied. You saved ₹${couponDiscount}.`;

    message.className =
        "small mt-2 text-success fw-bold";

    updateCheckoutSummary();
}

function updatePaymentFields(){

    const payment =
        document.querySelector('input[name="payment"]:checked').value;

    document.getElementById("upiFields").style.display =
        payment==="UPI" ? "block" : "none";

    document.getElementById("cardFields").style.display =
        payment==="Card" ? "block" : "none";
}

function validatePayment(){

    const payment =
        document.querySelector('input[name="payment"]:checked').value;

    if(payment==="UPI"){

        const upi =
            document.getElementById("upiId").value.trim();

        if(!/^[\w.-]+@[\w.-]+$/.test(upi)){

            showError("upiError","Enter a valid UPI ID.");
            return false;
        }
    }

    if(payment==="Card"){

        const card =
            document.getElementById("cardNumber").value
            .replace(/\s/g,"");

        const expiry =
            document.getElementById("cardExpiry").value.trim();

        const cvv =
            document.getElementById("cardCvv").value.trim();

        if(!/^\d{16}$/.test(card)){

            showError(
                "cardError",
                "Enter a valid 16-digit card number."
            );

            return false;
        }

        if(!/^\d{2}\/\d{2}$/.test(expiry)){

            showToast("Enter expiry in MM/YY format.");
            return false;
        }

        if(!/^\d{3}$/.test(cvv)){

            showToast("Enter a valid 3-digit CVV.");
            return false;
        }
    }

    return true;
}

function placeOrder(){

    if(!currentUser){

        closeModal("checkoutModal");
        openAuth();
        return;
    }

    if(!cart.length){

        showToast("Your cart is empty.");
        return;
    }

    const address =
        document.getElementById("checkoutAddress").value.trim();

    if(address.length < 10){

        showError(
            "checkoutAddressError",
            "Please enter a complete delivery address."
        );

        return;
    }

    document.getElementById("checkoutAddressError").style.display =
        "none";

    if(!validatePayment()) return;

    const subtotal = calculateSubtotal();
    const delivery = calculateDelivery(subtotal);
    const discount = Math.min(couponDiscount,subtotal);
    const total = Math.max(0,subtotal + delivery - discount);

    const payment =
        document.querySelector('input[name="payment"]:checked').value;

    const order = {

        id:"FC"+Date.now().toString().slice(-8),

        userId:currentUser.id,

        date:new Date().toLocaleString("en-IN"),

        items:cart.map(item=>{

            const p = products.find(x=>x.id===item.id);

            return {
                id:p.id,
                name:p.name,
                price:p.price,
                unit:p.unit,
                qty:item.qty
            };

        }),

        subtotal,
        delivery,
        discount,
        total,

        address,

        payment,

        status:"Order Placed",

        statusIndex:0
    };

    orders.unshift(order);

    localStorage.setItem(
        "freshcartOrders",
        JSON.stringify(orders)
    );

    cart=[];

    saveCart();
    updateCart();

    couponDiscount=0;

    closeModal("checkoutModal");

    document.getElementById("successOrderId").textContent =
        order.id;

    currentTrackingOrder = order;

    document.getElementById("successModal").classList.add("show");

    showToast("Order placed successfully.");
}

/* =========================
   ORDERS
========================= */

function getUserOrders(){

    if(!currentUser) return [];

    return orders.filter(
        order=>order.userId===currentUser.id
    );
}

function openOrders(){

    closeProfile();

    requireLogin(()=>{

        const userOrders = getUserOrders();

        const container =
            document.getElementById("ordersList");

        if(!userOrders.length){

            container.innerHTML=`
            <div class="text-center py-5">
                <i class="bi bi-bag-x fs-1 text-muted"></i>
                <h5 class="mt-3">No orders yet</h5>
                <p class="text-muted">Your orders will appear here.</p>
                <button class="checkout-btn" onclick="closeModal('ordersModal');document.getElementById('products').scrollIntoView()">
                    Start Shopping
                </button>
            </div>`;

        }else{

            container.innerHTML = userOrders.map(order=>`

            <div class="order-card">

                <div class="order-top">
                    <div>
                        <strong>${order.id}</strong>
                        <div class="small text-muted mt-1">
                            ${order.date}
                        </div>
                    </div>

                    <span class="status-pill">
                        ${order.status}
                    </span>
                </div>

                <div class="small text-muted mt-3">
                    ${order.items.length} item(s) · ₹${order.total}
                </div>

                <div class="d-flex gap-2 mt-3">

                    <button
                        class="btn btn-sm btn-success"
                        onclick="trackSpecificOrder('${order.id}')">
                        <i class="bi bi-truck"></i> Track
                    </button>

                    <button
                        class="btn btn-sm btn-outline-success"
                        onclick="reorder('${order.id}')">
                        Reorder
                    </button>

                    ${
                        order.statusIndex < 2
                        ?
                        `<button
                            class="btn btn-sm btn-outline-danger"
                            onclick="cancelOrder('${order.id}')">
                            Cancel
                        </button>`
                        :""
                    }

                </div>

            </div>

            `).join("");
        }

        document.getElementById("ordersModal").classList.add("show");
    });
}

function cancelOrder(id){

    const order = orders.find(o=>o.id===id);

    if(!order) return;

    if(order.statusIndex >= 2){

        showToast("This order can no longer be cancelled.");
        return;
    }

    order.status = "Cancelled";

    localStorage.setItem(
        "freshcartOrders",
        JSON.stringify(orders)
    );

    showToast("Order cancelled.");

    openOrders();
}

function reorder(id){

    const order = orders.find(o=>o.id===id);

    if(!order) return;

    order.items.forEach(item=>{

        const product = products.find(p=>p.id===item.id);

        if(!product || product.stock<=0) return;

        const existing = cart.find(c=>c.id===product.id);

        if(existing){

            existing.qty = Math.min(
                existing.qty + item.qty,
                product.stock
            );

        }else{

            cart.push({
                id:product.id,
                qty:Math.min(item.qty,product.stock)
            });
        }
    });

    saveCart();
    updateCart();

    closeModal("ordersModal");

    openCart();

    showToast("Items added to your cart.");
}

/* =========================
   TRACKING
========================= */

function openTrack(){

    closeProfile();

    requireLogin(()=>{

        const userOrders = getUserOrders();

        if(!userOrders.length){

            showToast("You don't have any orders to track.");
            return;
        }

        currentTrackingOrder = userOrders[0];

        renderTracking();

        document.getElementById("trackModal").classList.add("show");
    });
}

function trackSpecificOrder(id){

    const order = orders.find(o=>o.id===id);

    if(!order) return;

    currentTrackingOrder=order;

    closeModal("ordersModal");

    renderTracking();

    document.getElementById("trackModal").classList.add("show");
}

function renderTracking(){

    const order = currentTrackingOrder;

    if(!order) return;

    const content =
        document.getElementById("trackingContent");

    if(order.status==="Cancelled"){

        content.innerHTML=`
        <div class="text-center py-4">
            <i class="bi bi-x-circle text-danger fs-1"></i>
            <h5 class="mt-3">Order Cancelled</h5>
            <p class="text-muted">${order.id}</p>
        </div>`;

        return;
    }

    content.innerHTML=`

    <div class="border rounded-3 p-3 mb-4">

        <div class="d-flex justify-content-between">
            <div>
                <strong>${order.id}</strong>
                <div class="small text-muted">
                    ${order.items.length} item(s)
                </div>
            </div>

            <strong class="text-success">
                ₹${order.total}
            </strong>
        </div>

        <div class="small text-muted mt-3">
            Delivering to: ${order.address}
        </div>

    </div>

    <div class="timeline">

    ${trackingStatuses.map((status,index)=>`

        <div class="timeline-step ${
            index <= order.statusIndex ? "done" : ""
        }">

            <div class="timeline-dot"></div>

            <div>
                <strong>${status}</strong>
                <span>
                    ${
                        index < order.statusIndex
                        ? "Completed"
                        : index === order.statusIndex
                        ? "Current status"
                        : "Pending"
                    }
                </span>
            </div>

        </div>

    `).join("")}

    </div>

    ${
        order.statusIndex < trackingStatuses.length-1
        ?
        `<button class="checkout-btn mt-2"
            onclick="advanceOrderDemo('${order.id}')">
            Simulate Next Delivery Update
        </button>`
        :
        `<div class="alert alert-success mt-2">
            <i class="bi bi-check-circle"></i>
            Your order has been delivered.
        </div>`
    }

    <p class="text-center text-muted small mt-3">
        Demo tracking is provided for this portfolio project.
    </p>
    `;
}

function advanceOrderDemo(id){

    const order = orders.find(o=>o.id===id);

    if(!order) return;

    if(order.statusIndex <
       trackingStatuses.length-1){

        order.statusIndex++;

        order.status =
            trackingStatuses[order.statusIndex];

        localStorage.setItem(
            "freshcartOrders",
            JSON.stringify(orders)
        );

        currentTrackingOrder=order;

        renderTracking();

        showToast(`Order updated: ${order.status}`);
    }
}

/* =========================
   MODAL HELPERS
========================= */

function closeModal(id){

    document.getElementById(id).classList.remove("show");
}

document.querySelectorAll(".modal-layer").forEach(modal=>{

    modal.addEventListener("click",event=>{

        if(event.target===modal){
            modal.classList.remove("show");
        }

    });
});

document.addEventListener("click",event=>{

    const profile =
        document.getElementById("profileMenu");

    const button =
        document.querySelector(".account-button");

    if(
        profile.classList.contains("show") &&
        !profile.contains(event.target) &&
        !button.contains(event.target)
    ){
        profile.classList.remove("show");
    }

});

/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message){

    const toast =
        document.getElementById("toast");

    toast.textContent=message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer=setTimeout(()=>{
        toast.classList.remove("show");
    },3000);
}

/* =========================
   INITIALIZE
========================= */

displayProducts();
updateCart();
updateAccountUI();

if(savedAddress){

    document.getElementById("locationAddress").textContent =
        savedAddress;
}

/* CARD NUMBER FORMAT */
document.getElementById("cardNumber").addEventListener("input",function(){

    let value=this.value.replace(/\D/g,"").slice(0,16);

    this.value=value.replace(/(.{4})/g,"$1 ").trim();
});

/* EXPIRY FORMAT */
document.getElementById("cardExpiry").addEventListener("input",function(){

    let value=this.value.replace(/\D/g,"").slice(0,4);

    if(value.length>2){
        value=value.slice(0,2)+"/"+value.slice(2);
    }

    this.value=value;
});

/* PHONE ONLY DIGITS */
document.getElementById("signupPhone").addEventListener("input",function(){

    this.value=this.value.replace(/\D/g,"").slice(0,10);
});
