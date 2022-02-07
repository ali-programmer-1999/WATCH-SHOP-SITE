const slides = document.querySelector('.content');
const slidescount= slides.childElementCount;
const maxleft=(slidescount-1)* 1600 * -1;

let current = 0;

setInterval(function(){
    if(current > maxleft){
        current -= 1600;
        slides.style.left = current + "px";
    }
    else{
        current = 0;
        slides.style.left = 0;
    }
},7500)
