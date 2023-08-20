const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("input");
const logInSHForm = document.querySelector("#sh-form");
const logInSH = document.querySelector("#sh-form h1");
const logOut = document.querySelector("#sh-form button");

const HIDDEN_KEYNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
  event.preventDefault();
  logInForm.classList.add(HIDDEN_KEYNAME);
  const userName = logInInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  logInSH.innerText = `Hello, ${userName}`;
  logInSHForm.classList.remove(HIDDEN_KEYNAME);
}
function handleLogOut(event) {
  event.preventDefault();
  logInSHForm.classList.add(HIDDEN_KEYNAME);
  localStorage.removeItem(USERNAME_KEY);
  logInForm.classList.remove(HIDDEN_KEYNAME);
}

let savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  logInForm.classList.remove(HIDDEN_KEYNAME);
  logInForm.addEventListener("submit", handleLoginSubmit);
} else {
  logInForm.addEventListener("submit", handleLoginSubmit);
  logInForm.classList.add(HIDDEN_KEYNAME);
  logInSH.innerText = `Hello ${savedUserName}`;
  logInSHForm.classList.remove(HIDDEN_KEYNAME);
  logOut.addEventListener("click", handleLogOut);
}
