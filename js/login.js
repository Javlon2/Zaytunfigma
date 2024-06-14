function click12(){
    let phone = document.getElementById("phone")
    let password = document.getElementById("password")
    let phone1 = document.getElementById("phone1")
    if(phone.value !== '+998912345678' ){ 
        phone1.style.border="2px solid red";

    }else if(password.value !== '12345') {
        password.style.border="2px solid red";
    }
    else{
        phone1.style.border="2.5px solid green"
        password.style.border="2.5px solid green"

    }
}