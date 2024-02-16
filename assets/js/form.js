function check() {
    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var pass = document.getElementById('pass')
    var repeatpass = document.getElementById('repeatpass')
    var checkbox = document.getElementById('checkbox')
    var error = document.getElementById('error')



    if (firstname.value.length <= '4') {
        // error.style.display = "block"
        alert("Name is too short")
        return false
    } else if (lastname.value.length <= '4') {
        alert("Lastname is too short")
        return false
    } else if (email.value.includes('@') == false) {
        alert("Email must include @")
        return false
    } else if (pass.value == '') {
        alert("Enter password")
        return false
    } else if (repeatpass.value != pass.value) {
        alert("Password missmatch")
        return false
    } else if (checkbox.checked == false) {
        alert("You must accept our terms")
        return false
    }
}