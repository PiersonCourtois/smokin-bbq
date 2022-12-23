

window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for submitting a contact form! Wait 24-48 hours for a response. ");
      return false;
   }
}
