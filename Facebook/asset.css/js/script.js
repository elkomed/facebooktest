window.onload = () => {
let btn =document.getElementById("create-account-button");
let close_register =document.getElementById("close-register");
let overlay =document.getElementById("overlay");

    btn .addEventListener("click", (e) => {
        e.preventDefault();

let popup = document.getElementById("register-popup");
        popup.style.display = "block";
        overlay.style.display = "block";

    })

    close_register.addEventListener("click", () =>{
        let popup = document.getElementById("register-popup");
        popup.style.display = "none";
        overlay.style.display = "none";

    })

}