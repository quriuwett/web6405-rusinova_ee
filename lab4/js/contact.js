class Contact {
    constructor(name, email, submition) {
        this.name = name;
        this.email = email;
        this.submition = submition;
    }
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const agreement = document.getElementById("agreement").checked;

    const contact = new Contact(name, email, agreement);
    console.log(contact);
});
