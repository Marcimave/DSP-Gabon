console.log("JS connecté !");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulaire");
  const confirmation = document.getElementById("confirmation");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      confirmation.textContent = "✅ Message envoyé !";
    });
  }
});
