const signIn = document.querySelector(".signin");
const signUp = document.querySelector(".signup");
const container = document.querySelector(".container");
const submit = document.querySelector(".submit");

signIn.addEventListener("click", () => {
  container.classList.add("change");
  submit.textContent = "Sign In";
});

signUp.addEventListener("click", () => {
  container.classList.remove("change");
  submit.textContent = "Sign Up";
});
