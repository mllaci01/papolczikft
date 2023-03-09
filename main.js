let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".btn.btn-secondary")
let acceptCookieBtn = document.querySelector(".btn.btn-primary")

cancelCookieBtn.addEventListener('click', function(){
    cookieModal.classList.remove("active")
})
acceptCookieBtn.addEventListener('click', function(){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
    cookieModal.classList.add("active")
    }
}, 2000);

$(document).ready(function() {
    $('#btnShowModal').click(function() {
        $('#loginModal').modal('show');
    });
    $('#btnHideModal').click(function() {
        $('#loginModal').modal('hide');
    });
});