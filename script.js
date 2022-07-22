let body = document.querySelector("body");
let section = document.querySelectorAll("section");
let header = document.querySelector("header");
let h4s = document.querySelectorAll("h4");
// let lowerText = document.querySelectorAll("h3");
let headerH2 = document.querySelectorAll("h2");
let input = document.querySelector("input");
let inputBox = document.querySelector("input");
let sliderInputBox = document.querySelector(".slider");
console.log(sliderInputBox);
// let body = document.querySelector("body");
// let body = document.querySelector("body");
// let body = document.querySelector("body");
// let body = document.querySelector("body");
// let body = document.querySelector("body");

function mode(){
    if(input.checked != true){
       body.classList.remove("dark-body");
       header.classList.remove("darkHeadCard");
       headerH2[0].classList.remove("text");
       headerH2[1].classList.remove("text");
       headerH2[1].classList.add("overviewHeader");
       for(let i = 0; i < section.length; i++){
           section[i].classList.remove("darkCards")
       }
       for(let j = 0; j < h4s.length; j++){
           h4s[j].classList.add("h4Text");
        }
    }else{
        body.classList.add("dark-body");
        header.classList.add("darkHeadCard");
        headerH2[0].classList.add("text");
        headerH2[1].classList.add("text");
        headerH2[1].classList.remove("overviewHeader");
        for(let i = 0; i < section.length; i++){
            section[i].classList.add("darkCards")
        }
        for(let j = 0; j < h4s.length; j++){
            h4s[j].classList.add("h4Text");
        }
    }
}

inputBox.addEventListener("click", mode)
