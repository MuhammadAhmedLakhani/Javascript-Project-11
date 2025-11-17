
let nameValidation = false;
let emailValidation = false;

function register() {

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let input = document.getElementById("name")
    let name = input.value.trim()
    let input1 = document.getElementById("email")
    let email = input1.value.trim()


    if (name) {
        nameValidation = true
        input.value = ""
    } else {
        alert("PLease enter Name correctly")
    }

    if (email) {
        let status = emailRegex.test(email)
        if (status) {
            emailValidation = true
            input1.value = ""
        } else {
            alert("PLease enter Email correctly")

        }

    } else {
        alert("PLease enter Email correctly")

    }

    if(nameValidation === true && emailValidation === true) {

        window.location.assign("index1.html")

    }







}