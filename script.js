import { AlertError } from "./alert-error.js"
import { Modal } from "./modal.js"
const weightImc = document.querySelector('.weight')
const heightImc = document.querySelector('.height')
const form = document.querySelector('form')

function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function resultCard(result) {
  Modal.message.innerText = `O seu IMC é de ${result}.`
  Modal.open()
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

weightImc.oninput = () => AlertError.close()
heightImc.oninput = () => AlertError.close()

form.onsubmit = event => {
  event.preventDefault()

  if((heightImc.value == "") || (weightImc.value == "")) {
    AlertError.open()
    return;
  }

  AlertError.close()
 
  const result = calculateIMC(weightImc.value, heightImc.value)
  
  resultCard(result)
}