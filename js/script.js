// show hidden password

const input = document.getElementById("login-pass"),
  iconEye = document.getElementById("login-eye");

iconEye.addEventListener("click", () => {
  //change password to text
  if (input.type === "password") {
    //switch to text
    input.type = "text";

    //icon change
    iconEye.classList.add("ri-eye-line");
    iconEye.classList.remove("ri-eye-off-line");
  } else {
    //change to password
    input.type = "password";

    //icon change
    iconEye.classList.remove("ri-eye-line");
    iconEye.classList.add("ri-eye-off-line");
  }
});
