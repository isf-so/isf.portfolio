const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");
const subjectInput = document.querySelector("#user_subject");
const publicKey = "O3zBA0bhcz9UNz8le";
const serviceID = "service_yyv5g9n";
const templateID = "template_2s4e93w";

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBtn.innerText = "Attendez...";

    const inputFields = {
        email: emailInput.value,
        message: messageInput.value,
        subject: subjectInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            submitBtn.innerText = "Message envoyé avec succès";
            emailInput.value = "";
            messageInput.value = "";
            subjectInput.value = "";
        })
        .catch((error) => {
            console.error(error);
            submitBtn.innerText = "Erreur d'envoi";
        });
});
