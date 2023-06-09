import { RealtorSendEmailData } from "../Data/userId";


const formEmailRealtor = document.getElementById("form-realtor");

formEmailRealtor.addEventListener('submit', function(e) {
    e.preventDefault();

let realtorMail = RealtorSendEmailData.sendEmail;

let firstName = document.getElementById('nombre');
let email = document.getElementById('email');
let subject = document.getElementById('sujeto');
let message = document.getElementById('mensaje');   
 
 fetch(`https://formsubmit.co/ajax/${realtorMail}`, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
      Nombre: firstName.value,
      Correo: email.value,
      Sujeto: subject.value,
      Mensaje: message.value,
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error al enviar correo',error));

})