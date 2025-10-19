let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submit = document.querySelector("#submit");

let password1 = document.querySelector("#password");
password1.addEventListener("input", function () {
  let pass = password.value;
  let score = 0;

  if (pass.length >= 8) {
    score++;
  }
  if (/[A-Z]/.test(pass)) {
    score++;
  }
  if (/[a-z]/.test(pass)) {
    score++;
  }
  if (/[0-9]/.test(pass)) {
    score++;
  }
  if (/[!@#$%^&*]/.test(pass)) {
    score++;
  }

  let bars = [
    document.querySelector("#bar1"),
    document.querySelector("#bar2"),
    document.querySelector("#bar3"),
    document.querySelector("#bar4"),
    document.querySelector(".bar")
  ];
//   if (score == 2) bars[0].style.backgroundColor = "red";
//   else if (score == 3) bars[1].style.backgroundColor = "yellow";
//   else if (score == 4) bars[2].style.backgroundColor = "orange";
//   else if (score == 5) {
//     bars.forEach((x) => {
//       x.style.backgroundColor = "green";
//     });
//   }

  // Fill progressively
  if (score >= 1) bars[0].style.backgroundColor = "red";
  if (score >= 2) bars[1].style.backgroundColor = "orange";
  if (score >= 3) bars[2].style.backgroundColor = "yellow";
  if (score >= 4){
    bars.forEach((x) => {
        x.style.backgroundColor = "green"
    })
  }

  if(password.value == ""){
    bars.forEach((x) => {
        x.style.backgroundColor = "#2a3358";
    })
}
});

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailReg.test(email.value);
  let passwordans = passwordReg.test(password.value);

  if (!emailans) {
    document.querySelector("#emailError").textContent = "Invalid Email";
  }
  if (!passwordans) {
    document.querySelector("#passwordError").textContent =
      "Use 8 characters with at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character";
  }
});

let confirmPassword = document.querySelector("#confirmPassword");
let confirmError = document.querySelector("#confirmError");

confirmPassword.addEventListener("input", function () {
  if (password.value != confirmPassword.value) {
    confirmError.textContent = "Passwords does not match";
  } else {
    confirmError.textContent = "";
  }

let btn = document.querySelector("#submitBtn");

if(email.value != "" && password.value != "" && confirmPassword.value != "" && password.value == confirmPassword.value){
    btn.disabled = false; 
 }  
});
