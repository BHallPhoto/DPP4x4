({
    plugins: ["jsdom-quokka-plugin"],
    jsdom: {
        config: {
            file: "./index.html"
        }
    }
});

const name = document.querySelector("#name"),
    email = document.querySelector("#email"),
    phone = document.querySelector("#phone"),
    message = document.querySelector("#message");

const nameLabel = document.querySelector("#name-label"),
    emailLabel = document.querySelector("#email-label"),
    phoneLabel = document.querySelector("#phone-label"),
    messageLabel = document.querySelector("#message-label");

const submitBtn = document.querySelector(".btn-submit");

// NAME Event Listener

name.addEventListener("focus", () => {
    nameLabel.classList.add("ok");
});

name.addEventListener("input", event => {
    // Each time the user types something, we check if the
    // form field is valid.
    if (name.validity.valid) {
        nameLabel.innerHTML = "Name &#10003;";
        nameLabel.classList.remove("error");
        nameLabel.classList.add("ok", "check");
    } else {
        nameLabel.innerHTML = "Name needs a minimum of 2 characters...";
        nameLabel.classList.add("ok");
        nameLabel.classList.add("error");
    }
});

// EMAIL Event listener

email.addEventListener("focus", () => {
    emailLabel.classList.add("ok");
});

email.addEventListener("input", event => {
    if (email.validity.valid) {
        emailLabel.innerHTML = "Email &#10003;";
        emailLabel.classList.remove("error");
        emailLabel.classList.add("ok", "check");
    } else {
        emailLabel.classList.remove("ok");
        emailLabel.classList.add("error");
        showError();
    }
});

const showError = () => {
    if (email.validity.valueMissing) {
        // If the field is emtpy
        // display the following error
        emailLabel.innerHTML = "You need to enter an Email address...";
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error
        emailLabel.innerHTML = "Entered value needs to be an Email address...";
    } else if (email.validity.tooShort) {
        // If the data is too short
        // display the following error
        emailLabel.innerHTML = `Email should be at least ${email.minLength} characters...`;
    }
};

// PHONE Event Listener

phone.addEventListener("focus", () => {
    phoneLabel.classList.add("ok");
});

phone.addEventListener("input", event => {
    if (phone.validity.valid) {
        phoneLabel.innerHTML = "Phone &#10003;";
        phoneLabel.classList.remove("error");
        phoneLabel.classList.add("ok", "check");
    } else {
        phoneLabel.innerHTML = "Phone e.g. '012-345-6789', '(012)345-6789'";
        phoneLabel.classList.remove("ok");
        phoneLabel.classList.add("error");
    }
});

// MESSAGE Event Listener

message.addEventListener("focus", () => {
    messageLabel.classList.add("ok");
});

message.addEventListener("input", event => {
    if (message.validity.valid) {
        messageLabel.innerHTML = "Message &#10003;";
        messageLabel.classList.remove("error");
        messageLabel.classList.add("ok", "check");
    } else {
        messageLabel.innerHTML = "A short message is required...";
        messageLabel.classList.remove("ok");
        messageLabel.classList.add("error");
    }
});

// const scriptURL = "https://script.google.com/macros/s/AKfycby4hMx44ZAtbDR9HshgCvB5T-w1CnOjJknmDDar_mgGa1cm6ng/exec";
// const form = document.forms["submit-to-google-sheet"];

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     let h = new Headers();
//     h.append("Access-Control-Allow-Origin", "http://127.0.0.1:5500/");
//     fetch(scriptURL, {
//         method: "POST",
//         headers: h,
//         mode: "cors",
//         body: new FormData(form)
//     })
//         .then(response => console.log("Success!", response))
//         .catch(error => console.error("Error!", error.message));
// });
