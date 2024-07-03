const email = document.getElementById("email");
const btn = document.querySelector("button");
const form = document.getElementById("form");
const errorMsg = document.querySelector(".error-msg");
const container = document.querySelector(".container");
const succesMsg = document.querySelector(".alert-container");
const btnSucess = document.querySelector(".btn-success");

console.log(btnSucess);

btn.addEventListener("click", function () {
  if (email.value === "" || !email.checkValidity()) {
    errorMsg.style.display = "block";
    email.classList.add("error");
  } else {
    container.style.display = "none";
    succesMsg.style.display = "grid";
  }
});

btnSucess.addEventListener("click", function () {
  succesMsg.style.display = "none";
  container.style.display = "flex";
});
