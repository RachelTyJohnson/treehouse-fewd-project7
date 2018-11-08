let removealert = document.querySelector('main .alert .removealert');
removealert.addEventListener('click', (e)=>{
  let alert = e.target.parentNode.parentNode;
  let main = alert.parentNode;
  alert.style.opacity = '0';
  setTimeout(function(){main.removeChild(alert);}, 301);
})

let messagebutton = document.querySelector('#messagebutton');
messagebutton.addEventListener('click', (e)=>{
  let message = e.target.previousElementSibling;
  let user = e.target.previousElementSibling.previousElementSibling;
  if (message.value=="" || user.value==""){
    window.alert("You are missing a user or message");
  } else {
    window.alert("Message sent to " + user.value + "!");
    message.value = "";
    user.value = "";
  }
});
