const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");
const subjectInput = document.querySelector("#user_subject");
const publicKey = "O3zBA0bhcz9UNz8le";
const serviceID = "service_754j0xq";
const templateID = "template_2s4e93w";

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBtn.innerText = "Attendez...";

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
        subject: subjectInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            submitBtn.innerText = "Message envoyé avec succès";
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            subjectInput.value = "";
        })
        .catch((error) => {
            console.error(error);
            submitBtn.innerText = "Erreur d'envoi";
        });
});

