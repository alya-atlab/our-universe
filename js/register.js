const registerButton = document.getElementById("register-button");
const register = document.getElementById("register");
const loginButton = document.getElementById("login-button");
const login = document.getElementById("login");
registerButton.addEventListener("click", () => {
  register.style.display = "block";
  login.style.display = "none";
});
loginButton.addEventListener("click", () => {
  login.style.display = "block";
  register.style.display = "none";
});
