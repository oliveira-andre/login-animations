const btnLogin = document.querySelector('.button');
const form = document.querySelector('form');

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

  const fields = [ ...document.querySelectorAll('.input-block input') ];
  fields.forEach(field => {
    if(field.value == '') form.classList.add('validate-error');
  });

  const formError = document.querySelector('.validate-error');
  if(formError) {
    form.addEventListener('animationend', (e) => {
      if (e.animationName == 'vibrate') {
        formError.classList.remove('validate-error');
      }
    });
  } else {
    form.classList.add('hidden');
  }
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
