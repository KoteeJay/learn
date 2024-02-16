function check() {
    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var pass = document.getElementById('pass')
    var repeatpass = document.getElementById('repeatpass')
    var checkbox = document.getElementById('checkbox')



    if (firstname.value.length <= '4') {
        console.log('firstname is too short');
        return false
    } else if (lastname.value.length <= '4') {
        console.log('lastname is too short');
        return false
    } else if (email.value.includes('@') == false) {
        console.log('Email must include @');
        return false
    } else if (pass.value == '') {
        console.log('Password cannot be empty');
        return false
    } else if (repeatpass.value != pass.value) {
        console.log("Password missmatch");
        return false
    }
}