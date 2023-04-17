/**
 * Captura elementos pela id no html
 */
const whastappSend = document.getElementById('whatsapp');
const whatsButton = document.getElementById('sendWhatsApp');
const nameSend = document.getElementById('name');
const cargoSend = document.getElementById('cargo');
const msgSend = document.getElementById('mensagem');

/**
 * Aplica mascara de telefone
 * @param valuePhone string
 */
const maskPhone = (valuePhone) => {
  valuePhone = valuePhone.replace(/\D/g, "");
  valuePhone = valuePhone.replace(/^(\d{2})(\d)/g, "($1) $2");
  valuePhone = valuePhone.replace(/(\d)(\d{3})$/, "$1-$2");
  whastappSend.value = valuePhone
}

whastappSend.addEventListener('keypress', (event) => maskPhone(event.target.value));
whastappSend.addEventListener('change', (event) => maskPhone(event.target.value));

/**
 * Se deseja mudar o número de contato mude o parametro da url
 * chamado phone. Mantenha o padrão CODPAIS + CODAREA + TELEFONE
 * Ex: PPZZXXXXXYYYY
 * @param message string
 * @returns retorna url do whatsapp
 */
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

/**
 * Função para evitar ataque de scripts dentro do input
 * @param msg string
 * @returns string sanitized
 */
const sanitizeMsg = (msg) => {
  const reg = /[&<>"'/]/ig;
  return msg.replace(reg, (match) => ESC_MAP[match])
}

/**
 * Compões a mensagem para ser enviada para o whatsapp, independente
 * do sistema operacional utilizado
 */
const enviarMsgWhatsApp = () => {
  const msg = `Mensagem enviada do site:\nEnviado por: ${nameSend.value}\nCargo: ${cargoSend.value}\nContato: ${whastappSend.value}\nMensagem: ${sanitizeMsg(msgSend.value)}`;
  let urlWhats = setURLWhatsApp(encodeURIComponent(msg))
  window.open(urlWhats)  
}

whatsButton.addEventListener('click', () => enviarMsgWhatsApp());