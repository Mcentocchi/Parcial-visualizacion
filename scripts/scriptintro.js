$(document).ready(function() {
  setTimeout(function() {
    $('.alpha').addClass('in');
  },1000)
})

const btn = document.querySelector('.btn-11');

// Espera 2 segundos y agrega la clase "show" al botón
setTimeout(() => {
  btn.classList.add('show');
}, 2000);