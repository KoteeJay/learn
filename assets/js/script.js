const preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove();
    });
}


var harmbuger = document.getElementById('menu')
var menuslider = document.getElementById('menuslider')
var closeButton = document.getElementById('x')
is_open = false

harmbuger.addEventListener("click", () => {

    if (is_open == false) {
        harmbuger.style.display = "none";
        menuslider.style.left = "0"
        is_open = true;
    }
    if (is_open == true) {
        closeButton.addEventListener('click', () => {

            menuslider.style.left = "100%"
            harmbuger.style.display = "block"
            is_open = false
        })

    }
});

function validate() {
    var name = document.getElementById('name')
    var password = document.getElementById('password')
    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var repeatpass = document.getElementById('repeatpass')
    var checkbox = document.getElementById('checkbox')

    if (name.value == '') {
        console.log('Name cannot be empty');
        return false
    } else if (password.value == '') {
        console.log('Password cannot be empty');
        return false
    } else if (password.value.length <= '6') {
        console.log('Password is too short');
        return false
    } else if (firstname.value.length <= '4') {
        console.log('firstname is too short');
        return false
    } else if (lastname.value.length <= '4') {
        console.log('lastname is too short');
        return false
    } else if (email.value.includes('@') == false) {
        console.log('Email must include @');
        return false
    } else if (repeatpass.validate & password.value == false) {
        console.log("Password missmatch");
        return false
    }






}