// dropdown menu
const body = document.querySelector('body');
const itemWorks = document.querySelector('.item-works');
const smallBox = document.querySelector('.small-box');
const itemResoruces = document.querySelector('.item-resources');
const bigBox = document.querySelector('.big-box');

itemWorks.addEventListener('click', function(e){
    smallBox.classList.toggle('active');
    const icon1=document.querySelector('.dropdown-small .down-icon');
    icon1.classList.toggle('active');
    

});

itemResoruces.addEventListener('click', function(){
    bigBox.classList.toggle('active')
    const icon2=document.querySelector('.dropdown-big .down-icon');
    icon2.classList.toggle('active');
})



// hamburger menu

const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuScreen =document.querySelector('.hamburger-menu-screen')
const clickSmall = document.querySelector('.click-small');
const clickBig = document.querySelector('.click-big');
const menuIconSmall = document.querySelector('.down-icon.icon-small');
const menuIconBig = document.querySelector('.icon-big');
const openSmall = document.querySelector('.dropdown-open.open-small');
const openBig = document.querySelector('.open-big');

hamburgerMenu.addEventListener('click', function(){
    hamburgerMenuScreen.classList.toggle('active');

})

clickSmall.addEventListener('click', function(){
    openBig.classList.remove('active');
    menuIconBig.classList.remove('active');
    openSmall.classList.toggle('active');
    menuIconSmall.classList.toggle('active')
})

clickBig.addEventListener('click', function(){
    openSmall.classList.remove('active');
    menuIconSmall.classList.remove('active')
    openBig.classList.toggle('active');
    menuIconBig.classList.toggle('active');
})

// questions section

const questionItem1 = document.querySelector('.questions-body-item.item1');
const openBox1 = document.querySelector('.item-open-box.open-box1');;
const rightArrow1 = document.querySelector('.questions-body-item.item1 .question-right-arrow');
questionItem1.onclick=function(){
    openBox1.classList.toggle('active');
    rightArrow1.classList.toggle('active')
}

const questionItem2 = document.querySelector('.questions-body-item.item2');
const openBox2 = document.querySelector('.item-open-box.open-box2');;
const rightArrow2 = document.querySelector('.questions-body-item.item2 .question-right-arrow');
questionItem2.onclick=function(){
    openBox2.classList.toggle('active');
    rightArrow2.classList.toggle('active')
}

const questionItem3 = document.querySelector('.questions-body-item.item3');
const openBox3 = document.querySelector('.item-open-box.open-box3');;
const rightArrow3 = document.querySelector('.questions-body-item.item3 .question-right-arrow');
questionItem3.onclick=function(){
    openBox3.classList.toggle('active');
    rightArrow3.classList.toggle('active')
}

const questionItem4 = document.querySelector('.questions-body-item.item4');
const openBox4 = document.querySelector('.item-open-box.open-box4');;
const rightArrow4 = document.querySelector('.questions-body-item.item4 .question-right-arrow');
questionItem4.onclick=function(){
    openBox4.classList.toggle('active');
    rightArrow4.classList.toggle('active')
}
