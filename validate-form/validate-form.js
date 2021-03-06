var checkUsername = false;
var checkPassword = false;
var registerForm = document.forms['register-form'];
var txtUsername = registerForm['username'];
var btnSubmit = registerForm['btn-submit'];
var validatedUsername = document.querySelector('.username-validated');
var txtEmail = registerForm['email'];
var emailValidated = document.querySelector('.email-validated');
btnSubmit.onclick = function () {

    if (checkUsername && checkPassword) {
        // Validate username
        var accountName = txtUsername.value;
        validatedUsername.value = accountName;
        // Validate password
        document.querySelector('.password-validated').value = registerForm['password'].value;
        // Validate password confirmed
        document.querySelector('.password-confirm-validate').value = registerForm['confirmPassword'].value;
        // Validate email
        var emailField = txtEmail.value;
        emailValidated.value = emailField;
        if (checkPassword) {

        }

        // Validate full name
        document.querySelector('.full-name-validated').value = registerForm['fullName'].value;
        // Validate birthday
        document.querySelector('.birth-day-validated').value = registerForm['birthDay'].value;
        // Validate Gender
        if (registerForm.gender[0].checked) {
            document.getElementsByClassName("gender")[0].checked = 'checked';
        } else {
            document.getElementsByClassName("gender")[1].checked = 'checked';
        }
        // Validate Favorite
        for (var i = 0; i < registerForm.favourite.length; i++) {
            if (registerForm.favourite[i].checked) {
                document.getElementsByClassName("fav")[i].checked = 'checked';
            }
        }
        // Validate text area
        document.querySelector('.text-area-validated').value = document.querySelector('.text-area').value;
        //Validate file
    }

}


// Username must be more than 7 charaters
txtUsername.onkeyup = function () {
    if (txtUsername.value.length <= 7) {
        document.querySelector('.username-warning').innerText = "Username must be more than 7 charaters";
        checkUsername = false;
    } else {
        document.querySelector('.username-warning').innerText = "";
        checkUsername = true;
    }
}
// Password = password confirmed
document.querySelector('.pw-confirm').onkeyup = function () {
    if (document.querySelector('.pw').value === document.querySelector('.pw-confirm').value) {
        document.querySelector('.password-warning').innerText = "Passwords are same";
        document.querySelector('.password-warning').style.color = 'green';
        checkPassword = true;
    } else {
        document.querySelector('.password-warning').innerText = "Passwords are not same";
        document.querySelector('.password-warning').style.color = 'red';
        checkPassword = false;
    }
}




