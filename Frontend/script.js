document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");
  if (!form) return;

  const submitBtn = form.querySelector("button[type='submit']");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.classList.add("form-submitting");

    const inputs = form.querySelectorAll("input");
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        valid = false;
        input.style.borderColor = "#ff5252";
        input.style.boxShadow = "0 0 0 3px rgba(255,82,82,0.2)";
      } else {
        input.style.borderColor = "#667eea";
        input.style.boxShadow = "0 0 0 3px rgba(102,126,234,0.1)";
      }
    });

    if (document.body.innerHTML.includes("Confirm Password")) {
      const pass = form.querySelector("input[name='password']").value;
      const confirm = form.querySelector("input[name='confirm_password']").value;

      if (pass !== confirm) {
        valid = false;
        alert("Passwords do not match ❌");
        form.classList.remove("form-submitting");
        return;
      }
    }

    if (!valid) {
      alert("Please fill all fields ❌");
      form.classList.remove("form-submitting");
      return;
    }

    setTimeout(() => {
      form.classList.remove("form-submitting");
      submitBtn.classList.add("form-success");
      submitBtn.innerText = "Success ✔";

      setTimeout(() => {
        if (window.location.pathname.includes("login.html")) {
          window.location.href = "first.html";
        } else if (window.location.pathname.includes("register.html")) {
          window.location.href = "login.html";
        }
      }, 1200);

    }, 1500);
  });
});