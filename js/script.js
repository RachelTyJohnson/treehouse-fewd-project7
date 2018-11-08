let removealert = document.querySelector('main .alert .removealert');
removealert.addEventListener('click', (e)=>{
  let alert = e.target.parentNode.parentNode;
  let main = alert.parentNode;
  alert.style.opacity = '0';
  setTimeout(function(){main.removeChild(alert);}, 301);
})
