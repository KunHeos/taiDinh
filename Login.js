const menurepon = document.querySelector("#menu-repon")
const menucontent = document.querySelector(".menu")

menurepon.onclick = function  ()  {
    menucontent.classList.toggle('open')
}

//password
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password-input");
    var eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
        passwordInput.classList.add("password-show");
        passwordInput.classList.remove("password-hide");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
        passwordInput.classList.add("password-hide");
        passwordInput.classList.remove("password-show");
    }
}
//confirm
function togglePasswordVisibility2() {
    var passwordInput2 = document.getElementById("password-input2");
    var eyeIcon2 = document.getElementById("eye-icon2");

    if (passwordInput2.type === "password") {
        passwordInput2.type = "text";
        eyeIcon2.classList.remove("fa-eye");
        eyeIcon2.classList.add("fa-eye-slash");
        passwordInput2.classList.add("password-show");
        passwordInput2.classList.remove("password-hide");
    } else {
        passwordInput2.type = "password";
        eyeIcon2.classList.remove("fa-eye-slash");
        eyeIcon2.classList.add("fa-eye");
        passwordInput2.classList.add("password-hide");
        passwordInput2.classList.remove("password-show");
    }
}