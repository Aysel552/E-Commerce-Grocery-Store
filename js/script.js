let searchForm = document.querySelector(".search-form");
document.querySelector('#search-btn').onClick=() =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}