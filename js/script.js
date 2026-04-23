// =====================
// INITIALISATION EMAILJS
// =====================
document.addEventListener("DOMContentLoaded", () => {

  if (typeof emailjs === "undefined") {
    console.error("EmailJS non chargé !");
    return;
  }

  emailjs.init("_Rsd7tKRnqGXz8u19");

  // =====================
  // ELEMENTS
  // =====================
  const form = document.getElementById("formulaire");
  const confirmation = document.getElementById("confirmation");

  if (!form || !confirmation) {
    console.warn("Formulaire ou zone de confirmation introuvable");
    return;
  }

  // =====================
  // VALIDATION EMAIL
  // =====================
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // =====================
  // SUBMIT FORMULAIRE
  // =====================
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const title = document.getElementById("title")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    // Vérification champs
    if (!name || !email || !title || !message) {
      confirmation.style.color = "red";
      confirmation.textContent = "Veuillez remplir tous les champs.";
      return;
    }

    // Vérification email
    if (!isValidEmail(email)) {
      confirmation.style.color = "red";
      confirmation.textContent = "Email invalide.";
      return;
    }

    // =====================
    // ENVOI EMAIL
    // =====================
    confirmation.style.color = "black";
    confirmation.textContent = "Envoi en cours... ⏳";

    emailjs.send("service_icixjxf", "template_kwa4moh", {
      name: name,
      email: email,
      title: title,
      message: message
    })
    .then(() => {
      confirmation.style.color = "green";
      confirmation.textContent = "Message envoyé avec succès ✅";
      form.reset();
    })
    .catch((error) => {
      console.error(error);

      confirmation.style.color = "red";
      confirmation.textContent = "Erreur lors de l’envoi. Réessayez.";
    });
  });

});
