// dropdown menu
const body = document.querySelector('body');
const itemWorks = document.querySelector('.item-works');
const smallBox = document.querySelector('.small-box');
const itemResoruces = document.querySelector('.item-resources');
const bigBox = document.querySelector('.big-box');

itemWorks.addEventListener('click', function(e){
    smallBox.classList.toggle('active')
});

itemResoruces.addEventListener('click', function(){
    bigBox.classList.toggle('active')
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

