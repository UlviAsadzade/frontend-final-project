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

// tab list
const testimonialsPersons = Array.from(document.querySelectorAll('.testimonials-persons a'));
const personsTexts = Array.from(document.querySelectorAll('.person-text'));
const clearActives = () => {
    testimonialsPersons.forEach(testimonialsPerson => {
        testimonialsPerson.classList.remove('active');
    });
    personsTexts.forEach(personsText => {
        personsText.classList.remove('active');
    });
}
testimonialsPersons.forEach(testimonialsPerson => {
    testimonialsPerson.onclick = function () {
        clearActives();
        const targetId = testimonialsPerson.getAttribute('data-target')
        const targetContent = document.getElementById(targetId);
        testimonialsPerson.classList.add('active');
        targetContent.classList.add('active');
    }
});


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
    openSmall.classList.toggle('active');
    menuIconSmall.classList.toggle('active')
})

clickBig.addEventListener('click', function(){
    openBig.classList.toggle('active');
    menuIconBig.classList.toggle('active');
})


