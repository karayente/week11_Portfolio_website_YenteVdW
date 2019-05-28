let trein = document.querySelector("#trein");
let muis = document.querySelector("#muis");
let bos1 = document.querySelector(".bos1");
let bos2 = document.querySelector(".bos2");
let vliegen = document.querySelector("#vliegen");
let sakura = document.querySelector(".sakura");
let oren = document.querySelector("#oren");
let pijlr = document.querySelector("#pijltjer");
let pijll = document.querySelector("#pijltjel");
let slider = document.querySelector(".slider");

pijll.addEventListener("click", slide2);

function slide2(){

    slider.classList.remove("slide1");

}

pijlr.addEventListener("click", slide1);

function slide1(){
    slider.classList.add("slide1");

}

bos2.addEventListener("click", beweeg3);

function beweeg3(){
    oren.classList.add("anim4");

}

sakura.addEventListener("click", beweeg2);

function beweeg2(){
    vliegen.classList.add("anim3");
}

bos1.addEventListener("click", beweeg1);

function beweeg1(){
    trein.classList.add("anim1");
    muis.classList.add("anim2");
}
