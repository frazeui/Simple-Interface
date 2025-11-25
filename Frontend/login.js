document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Check empty fields
    if (!email || !password) {
      alert(" All fields are required!");
      return;
    }

    // Check if user exists
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert(" No account found. Please register first!");
      return;
    }

    // Validate login
    if (savedUser.email === email && savedUser.password === password) {
      alert(` Welcome, ${savedUser.username}! Login successful.`);
      // redirect to home or dashboard
      window.location.href = "first.html";
    } else {
      alert(" Incorrect email or password!");
    }

  });

});