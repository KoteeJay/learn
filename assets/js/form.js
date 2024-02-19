var signUpButton = document.getElementById('signUpButton')
var form = document.getElementById('form')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var pass = document.getElementById('pass')
    var repeatpass = document.getElementById('repeatpass')
    var checkbox = document.getElementById('checkbox')

    var firstNameError = document.getElementById('firstName-error')
    var lastNameError = document.getElementById('lastName-error')
    var emailError = document.getElementById('emailError')
    var passwordError = document.getElementById('passwordError')
    var repeatPasswordError = document.getElementById('repeatPasswordError')
    var terms = document.getElementById('terms')

    var modal = document.getElementById("modal")
    var btn = document.getElementById('btn')


    if (firstname.value.length == '') {
        firstNameError.innerHTML = "This field is required!"
        return false
    } else if (firstname.value.length <= '2') {
        firstNameError.innerHTML = "First name is too short*"
        return false
    } else if (lastname.value.length <= '2') {
        lastNameError.innerText = "Last Name is too short*"
        return false
    } else if (email.value == '') {
        emailError.innerText = "Enter a valid email*"
        return false
    } else if (email.value.includes('@') == false) {
        emailError.innerHTML = "Email must include @"
        return false
    } else if (pass.value == '') {
        passwordError.innerHTML = "Enter a password*"
        return false
    } else if (pass.value.length <= "6") {
        passwordError.innerHTML = "Password must be upto 6 characters*"
        return false
    } else if (repeatpass.value = '') {
        repeatPasswordError.innerHTML = "Reapeat password*"
        return false
    } else if (pass == repeatpass) {
        repeatPasswordError.innerHTML = "Password Missmatch*"
        return false
    } else if (checkbox.checked == false) {
        terms.innerHTML = "You must accept our terms*"
        return false
    } else {
        modal.style.display = "block"
        form.reset()

    }


})