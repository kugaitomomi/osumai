'use strict'
const btn_passview = document.getElementById("passwordImg");
btn_passview.addEventListener('click', (e) => {
  let input_type = document.getElementById("passWordArea");
  let pwd_check = document.getElementById("passwordImg")
  if (input_type.type === "password") {
    input_type.type = "text";
    pwd_check.setAttribute("src", "images/icon04.png");
  } else {
    input_type.setAttribute("type", "password");
    pwd_check.setAttribute("src", "images/icon05.png");
  }
});