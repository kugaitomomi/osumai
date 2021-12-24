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

const btn_passview2 = document.getElementById("passwordImg2");
btn_passview2.addEventListener('click', (e) => {
  let input_type = document.getElementById("passWordArea2");
  let pwd_check = document.getElementById("passwordImg2")
  if (input_type.type === "password") {
    input_type.type = "text";
    pwd_check.setAttribute("src", "images/icon04.png");
  } else {
    input_type.setAttribute("type", "password");
    pwd_check.setAttribute("src", "images/icon05.png");
  }
});