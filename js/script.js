const close__popup__login = document.querySelector(".popup__close__button__login");
const open__popup__login = document.querySelector(".login__and__registration");
const no__account = document.querySelector(".no__account__button");
const close__popup__registration = document.querySelector(".popup__close__button__registration");
const there__is__an__account = document.querySelector(".there__is__an__account__button");
const dark__area__popup__login = document.querySelector(".popup__area__login");
const dark__area__popup__registration = document.querySelector(".popup__area__registration");

open__popup__login.addEventListener("click", function(e){
    opening__popup__login();
});
function opening__popup__login(){
    document.querySelector(".popup__for__login").style.opacity = "1";
    document.querySelector(".popup__for__login").style.visibility = "visible";
    document.querySelector(".popup__content__login").style.transform = "perspective(0px) translate(0px, 0%) rotate(0deg)";
    document.body.style.overflow = "hidden";
    document.querySelector(".popup__for__login").style.overflowY = "scroll";
    document.querySelector(".popup__for__registration").style.overflowY = "scroll";
};

close__popup__login.addEventListener("click", function(e){
    closing__popup__login();
});
function closing__popup__login(){
    document.querySelector(".popup__for__login").style.opacity = "0";
    document.querySelector(".popup__for__login").style.visibility = "hidden";
    document.querySelector(".popup__content__login").style.transform = "perspective(600px) translate(0px, -200%) rotate(45deg)";
    document.body.style.overflow = "scroll";
    document.querySelector(".popup__for__login").style.overflowY = "hidden";
};

close__popup__registration.addEventListener("click", function(e){
    closing__popup__registration();
});
function closing__popup__registration(){
    document.querySelector(".popup__for__registration").style.opacity = "0";
    document.querySelector(".popup__for__registration").style.visibility = "hidden";
    document.querySelector(".popup__content__registration").style.transform = "perspective(600px) translate(0px, -200%) rotate(45deg)";
    document.body.style.overflow = "scroll";
    document.querySelector(".popup__for__registration").style.overflowY = "hidden";
};

dark__area__popup__login.addEventListener("click", function(e){
    closing__popup__login();
});
dark__area__popup__registration.addEventListener("click", function(e){
    closing__popup__registration();
});

no__account.addEventListener("click", function(e){
    no__account__popup__registration();
});
function no__account__popup__registration(){
    document.querySelector(".popup__for__registration").style.opacity = "1";
    document.querySelector(".popup__for__registration").style.visibility = "visible";
    document.querySelector(".popup__for__login").style.opacity = "0";
    document.querySelector(".popup__for__login").style.visibility = "hidden";
    document.querySelector(".popup__content__registration").style.transform = "perspective(0px) translate(0px, 0%) rotate(0deg)";
};

there__is__an__account.addEventListener("click", function(e){
    there__is__an__account__popup__registration();
});
function there__is__an__account__popup__registration(){
    document.querySelector(".popup__for__registration").style.opacity = "0";
    document.querySelector(".popup__for__registration").style.visibility = "hidden";
    document.querySelector(".popup__for__login").style.opacity = "1";
    document.querySelector(".popup__for__login").style.visibility = "visible";
};