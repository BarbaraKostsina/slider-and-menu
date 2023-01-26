const slider = document.querySelector('.slider-line');
const showSlider = document.querySelector('.slider');
const menu = document.querySelector('.nav-item');
const menuBody = document.querySelector('.nav__menu');

let offset = 0;
document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 300;
    if(offset >900){
        offset=0;
    }
    slider.style.left = -offset + 'px'
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -=300;
    if(offset < 0){
        offset = 900;
    }
    slider.style.left = -offset + 'px'
});

document.querySelector('.nav__menu').addEventListener('mouseover', function(){
    menu.style.display = 'block'
    menuBody.style.height = '210px';

})

document.querySelector('.nav__menu').addEventListener('mouseout', function(){
    menu.style.display = 'none'
    menuBody.style.height = '20px'
})




