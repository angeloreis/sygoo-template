const whastappSend = document.getElementById('whatsapp');
const whatsButton = document.getElementById('sendWhatsApp');

whastappSend.addEventListener('keypress', (event) => maskPhone(event.target.value));
whastappSend.addEventListener('change', (event) => maskPhone(event.target.value));

const maskPhone = (valuePhone) => {
  valuePhone = valuePhone.replace(/\D/g, "");
  valuePhone = valuePhone.replace(/^(\d{2})(\d)/g, "($1) $2");
  valuePhone = valuePhone.replace(/(\d)(\d{3})$/, "$1-$2");
  whastappSend.value = valuePhone
}

const nameSend = document.getElementById('name');
const cargoSend = document.getElementById('cargo');
const msgSend = document.getElementById('mensagem');

const setURLWhatsApp = (message) => {
  return `whatsapp://send?phone=5591984174044&text=${message}`
}

const ESC_MAP = {
  '&': '&amp',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}

const sanitizeMsg = (msg) => {
  const reg = /[&<>"'/]/ig;
  return msg.replace(reg, (match) => ESC_MAP[match])
}

const enviarMsgWhatsApp = () => {
  const msg = `Mensagem enviada do site:\nEnviado por: ${nameSend.value}\nCargo: ${cargoSend.value}\nContato: ${whastappSend.value}\nMensagem: ${sanitizeMsg(msgSend.value)}`;
  let urlWhats = setURLWhatsApp(encodeURIComponent(msg))
  window.open(urlWhats)  
}

whatsButton.addEventListener('click', () => enviarMsgWhatsApp());