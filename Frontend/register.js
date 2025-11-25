document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirm_password.value.trim();

    // Check empty fields
    if (!username || !email || !password || !confirmPassword) {
      alert(" All fields are required!");
      return;
    }

    // Check password match
    if (password !== confirmPassword) {
      alert(" Passwords do not match!");
      return;
    }

    // Save user details in localStorage
    const userData = {
      username,
      email,
      password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert(" Registration successful! You can now login.");
    window.location.href = "login.html";
  });

});