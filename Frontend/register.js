
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    // Password check
    if (password !== confirmPassword) {
      alert(" Passwords do NOT match! Please try again.");
      return;
    }

    // Add submitting animation
    form.classList.add("form-submitting");

    setTimeout(() => {
      // Save user data
      const user = { username, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      // Success animation
      form.classList.remove("form-submitting");
      form.classList.add("form-success");

      setTimeout(() => {
        alert(" Registration Successful! Redirecting to Login...");
        window.location.href = "login.html";
      }, 700);

    }, 1500);
  });
});
