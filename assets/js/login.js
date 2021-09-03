const form = document.querySelector("form")



const emailInput = document.querySelector("#email")
const emailInputSpan = document.querySelector(".error-email")
emailInput.addEventListener("click", function (e) {
    let text = "";
    if (!e.target.value.includes("@")) {
        text = "Please fill in a valid email address."
        document.getElementById("email").style.border = "1px solid red"
    }
    else {
        document.getElementById("email").style.border = "1px solid green"
    }
    emailInputSpan.innerHTML = text;

})

const showButton = document.querySelector('.label-show');
const hiddenButton = document.querySelector('.label-hidden');
const passwordInput = document.querySelector("#password");

showButton.addEventListener('click', function(){
    passwordInput.setAttribute('type','text');
    showButton.style.display="none";
    hiddenButton.style.display="block";

});

hiddenButton.addEventListener('click', function(){
    passwordInput.setAttribute('type','password');
    showButton.style.display="block";
    hiddenButton.style.display="none";

})



