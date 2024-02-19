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

var form = document.getElementById('form')
var modal = document.getElementById('modal')



form.addEventListener('submit', (e) => {
    e.preventDefault();
    var name = document.getElementById('name')
    var password = document.getElementById('password')
    var firstNameError = document.getElementById('firstName-error')
    var passError = document.getElementById('pass-error')




    if (name.value == '') {
        firstNameError.innerHTML = "This field is required!"
        return false
    } else if (password.value == '') {
        passError.innerHTML = "This field is required!"
        return false
    } else {
        modal.style.display = "block"
        form.reset()
    }
})