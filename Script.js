// Store user data in localStorage
function register() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  if (name && email && password) {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration Successful ");
    showLogin();
  } else {
    alert("Please fill all fields ");
  }
}

// Login function
function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let regEmail = localStorage.getItem("userEmail");
  let regPassword = localStorage.getItem("userPassword");
  let name = localStorage.getItem("userName");

  if (email === regEmail && password === regPassword) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("welcomeBox").classList.remove("hidden");
    document.getElementById("welcomeMessage").innerText = 
      "Hello " + name + " ,Welcome to Naan Mudhalvan!";
  } else {
    alert("Invalid Login ");
  }
}

// Show login form
function showLogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

// Show register form
function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

// Logout
function logout() {
  document.getElementById("welcomeBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}
