document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tripForm");
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("para");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    let messages = [];

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name.length < 3) messages.push("Name must be at least 3 characters long.");
    if (age < 10 || age > 100) messages.push("Age must be between 10 and 100.");
    if (gender === "") messages.push("Please select a gender.");
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) messages.push("Enter a valid email address.");
    if (!/^[0-9]{10}$/.test(phone)) messages.push("Phone must be 10 digits.");

    if (messages.length > 0) {
      errorMsg.innerHTML = messages.join("<br>");
      errorMsg.style.display = "block";
      successMsg.style.display = "none";
    } else {
      errorMsg.style.display = "none";
      successMsg.innerText = "✅ Thanks for submitting the form!";
      successMsg.style.display = "block";
      form.reset(); // clear form after success
    }
  });
});
