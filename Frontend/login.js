
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert(" No account found! Please register first.");
      return;
    }

    if (username !== savedUser.username || password !== savedUser.password) {
      alert(" Incorrect Username or Password!");
      return;
    }

    // Add loading animation
    form.classList.add("form-submitting");

    setTimeout(() => {
      form.classList.remove("form-submitting");
      form.classList.add("form-success");

      setTimeout(() => {
        alert(" Login Successful!");
        window.location.href = "first.html"; // redirect to homepage
      }, 700);

    }, 1500);
  });
});
