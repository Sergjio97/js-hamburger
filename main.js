

let menu = document.querySelector(".fa-bars");

menu.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").classList.add("active")
});

let canc = document.querySelector(".fa-times");

canc.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").classList.remove("active");
});