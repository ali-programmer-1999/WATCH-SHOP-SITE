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
},7500);
// ==============================
var slid = document.getElementsByClassName("side");
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var n = 0;
var i; 

function disnone(){
    for( i = 0 ; i<slid.length ; i++){
        slid[i].style.display="none";
    }
}

next.addEventListener('click',function(e){
    e.preventDefault();
    n++;
    if(n > slid.length-1){
        n= 0;
    }
    disnone();
    slid[n].style.display ='block';
})
prev.addEventListener('click',function(e){
    e.preventDefault();
    n--;
    if(n < 0){
        n= slid.length-1;
    }
    disnone();
    slid[n].style.display ='block';
})

setInterval(() => {
    n++;
    if(n > slid.length-1){
        n= 0;
    }
    disnone();
    slid[n].style.display ='block';
}, 5000);