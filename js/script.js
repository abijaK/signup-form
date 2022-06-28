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

    checkUsername();


    // console.log(isRequired(usernameElt));
    // const l = usernameElt.value.length
    // if (!isBetween(l, 3, 25)) {
    //     showError(usernameElt, "Error")
    // }
    // console.log();
})

// develop utility functions
const isRequired = value => value === "" ? false : true;
const isBetween = (length, min, max) => length<min || length>max ? false : true;

// develop functions that show the error
const showError = (input, message) => {
    // const formField = document.querySelector('input');

    const formField = input.parentElement // select the div element
    
    // add the error class
    formField.classList.add("error")

    // const error = document.querySelector('small');

    const error = formField.querySelector('small'); //we use element querySelector instead of document, to allow focus on the needed element 
    error.textContent = message;
}

const checkUsername = () => {
    let valid = false
    const min = 3
    const max = 25
    const username = usernameElt.value.trim();

    if (!isRequired(username)) {
        showError(usernameElt, 'Le nom d\'utilisateur ne peut pas être vide.')
    }else if (!isBetween(username.length, min, max)) {
        showError(usernameElt, `Le nom d\'utilisateur doit être compris entre ${min} et ${max} caractères.`)
    }else {
        // @todo : create showSuccess() function to display success message
        valid = true
    }
    return valid
}