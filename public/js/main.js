
if(localStorage.getItem("theme") == 'pastel'){
  document.querySelector('#sunIcon').classList.remove('swap-off')
  document.querySelector('#sunIcon').classList.add('swap-on')
  document.querySelector('#moonIcon').classList.remove('swap-on')
  document.querySelector('#moonIcon').classList.add('swap-off')
}
