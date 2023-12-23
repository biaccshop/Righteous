// Form application
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = form.querySelector("#title").value;
  const email = form.querySelector("#email").value;
  const invoice = form.querySelector("#invoice").value;
  const message = form.querySelector("#message").value;

  const formData = {
    username: "Private Access Bot",
    avatar_url: "https://biaccshop-privateaccess.vercel.app/assets/images/logo.png",
    attachments: [],
    content: null,
    embeds: [{
      title: "**Contact Form**",
      color: 0xeeaf46,
      description: "A new contact form has arrived!",
      image: {
        "url": "https://i.ibb.co/KjTsm4p/footer-gradient.png"
      },
      thumbnail: {
        "url": "https://biaccshop-privateaccess.vercel.app/assets/images/logo.png"
      },
      fields: [
        {
          name: "Title:",
          value: title
        },
        {
          name: "Email:",
          value: email
        },
        {
          name: "Invoice ID:",
          value: invoice
        },
        {
          name: "Message:",
          value: message
        }
      ]
    }]
  };

  const webhookURL = "https://discord.com/api/webhooks/1188041813035061279/wOS5D2YFX-N0eYUm5Bys2L0rE9DWQN7v0RXVZqBphnMHShaBnh3iaEcKLLGCGIxVHAo3";

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }).then(response => {
    if (response.status === 204) {
      alert("Application submitted successfully.");
      console.log("Application submitted successfully.");
      form.reset();
    }
  }).catch(error => {
    alert("Application could not be sent, please try again later.");
    console.log("Application could not be sent, please try again later.");
  });
});