const password_1 = document.getElementById("password");
const password_2 = document.getElementById("confirm_password");
const message = document.querySelectorAll(".error_message");

password_1.addEventListener("blur", () => {
  if (password_1.value.length < 8) {
    password_1.style.boxShadow = "0 0 5px 5px red";
    password_2.style.boxShadow = "0 0 5px 5px red";
    message[0].textContent = "Must be 8 characters or longer";
  } else if (password_1 !== password_2) {
    password_1.style.boxShadow = "0 0 5px 5px red";
    password_2.style.boxShadow = "0 0 5px 5px red";
    message[0].textContent = "Password does not match";
  } else if (password_1.value === password_2.value) {
    password_1.style.boxShadow = "0 0 5px 5px green";
    password_2.style.boxShadow = "0 0 5px 5px green";
    message[0].textContent = "";
    message[1].textContent = "";
  }
});

password_2.addEventListener("blur", () => {
  if (password_2.value.length < 8) {
    password_1.style.boxShadow = "0 0 5px 5px red";
    password_2.style.boxShadow = "0 0 5px 5px red";
    message[1].textContent = "Must be 8 characters or longer";
  } else if (password_1.value !== password_2.value) {
    password_1.style.boxShadow = "0 0 5px 5px red";
    password_2.style.boxShadow = "0 0 5px 5px red";
    message[1].textContent = "Password does not match";
  } else if (password_1.value === password_2.value) {
    password_1.style.boxShadow = "0 0 5px 5px green";
    password_2.style.boxShadow = "0 0 5px 5px green";
    message[0].textContent = "";
    message[1].textContent = "";
  }
});
