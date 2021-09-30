let content1 = document.getElementById("centent1");
let content2 = document.getElementById("centent2");
let content3 = document.getElementById("centent3");
let navElement = document.querySelector(".btn-box");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


function openHome () {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";

    content1.style.transitionDelay = ".5s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";

    btn1.style.color = "rgb(0, 162, 255)";
    btn2.style.color = "black";
    btn3.style.color = "black";
};


function openServices () {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";

    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = ".5s";
    content3.style.transitionDelay = "0s";
    
    btn1.style.color = "black";
    btn2.style.color = "rgb(0, 162, 255)";
    btn3.style.color = "black";
};


function openProducts () {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";

    content1.style.transitionDelay = "0";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = ".5s";

    btn1.style.color = "black";
    btn2.style.color = "black";
    btn3.style.color = "rgb(0, 162, 255)";
};