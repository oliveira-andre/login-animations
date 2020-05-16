const btnLogin = document.querySelector('.button');
const form = document.querySelector('form');

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.add('hidden');
});

form.addEventListener('animationstart', (e) => { 
  if(e.animationName == 'swipe-down') {
    document.querySelector('body').style.overflow = 'hidden';
  }
});

form.addEventListener('animationend', (e) => {
  if(e.animationName == 'swipe-down') {
    form.style.display = 'none';
    document.querySelector('body').style.overflow = 'none';
  }
});
