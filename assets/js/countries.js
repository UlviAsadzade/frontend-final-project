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


// modal

const Play = document.querySelector(".global-play-icon");
const Close = document.querySelector("#close");
const Modal = document.querySelector(".modal");

Play.addEventListener("click", (e) => {
  e.preventDefault();
  Modal.classList.add("show")
});

Close.addEventListener("click", () => {
  Modal.classList.remove("show");
  var iframes = Modal.getElementsByClassName('.iframe-container img');
  if (iframes != null) {
    for (let i = 0; i < iframes.length; i++) {
      const iframe = iframes[i];
      iframe.src = iframe.src;

    }
  }
})