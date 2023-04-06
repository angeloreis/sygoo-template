const whastappSend = document.getElementById('whatsapp');

whastappSend.addEventListener('keypress', (event) => maskPhone(event.target.value));
whastappSend.addEventListener('change', (event) => maskPhone(event.target.value));

const maskPhone = (valuePhone) => {
  valuePhone = valuePhone.replace(/\D/g,"");
  valuePhone = valuePhone.replace(/^(\d{2})(\d)/g,"($1) $2");
  valuePhone = valuePhone.replace(/(\d)(\d{3})$/,"$1-$2");
  whastappSend.value = valuePhone
}
