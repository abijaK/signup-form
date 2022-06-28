// select form fields
const usernameElt =document.querySelector("#username");
const emailElt = document.querySelector("#email");
const passwordElt = document.querySelector("password");
const passwordConfirmElt = document.querySelector("#passwordConfirm");

const form = document.querySelector("form");

// add even listener
form.addEventListener("submit", (e) => {
    // prevent the form from submitting
    e.preventDefault();
    console.log(isRequired(usernameElt));
})

// develop utility functions
const isRequired = value => value === "" ? false : true;
const isBetween = (length, min, max) => length<min || length>max ? false : true;

// develop functions that show the error
const showError = (input, message) => 