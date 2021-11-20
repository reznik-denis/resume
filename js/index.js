const refs = {
    openModel: document.querySelector('.open-modal-team'),
    showModel: document.querySelector('.js-backdrop'),
    closeModelBtn: document.querySelector('.close-modal-btn'),
    submit: document.querySelector('.submit-form'),
    name: document.querySelector('#name'),
    tel: document.querySelector('#tel'),
    message: document.querySelector('#message'),
    form: document.querySelector(".js-speaker-form"),
   }


refs.openModel.addEventListener('click', onOpenModal);
refs.closeModelBtn.addEventListener('click', onCloseModal);
refs.showModel.addEventListener('click', onCloseModalByClickBackdrop);

function onOpenModal(e) {
    e.preventDefault();
    refs.showModel.classList.add('is-open');
  window.addEventListener('keydown', onCloseModalByEscape);
    document.body.classList.add('modal-open');
    refs.submit.addEventListener('click', submitForm);
    refs.form.addEventListener('submit', submitForm);
}

function onCloseModal() {
  refs.showModel.classList.remove('is-open'); 
    window.removeEventListener('keydown', onCloseModalByEscape);
    refs.submit.removeEventListener('click', submitForm);
    refs.form.removeEventListener('submit', submitForm);
    document.body.classList.remove('modal-open');
}

function onCloseModalByClickBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}

function onCloseModalByEscape(evt) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

function submitForm(e) {
    e.preventDefault();
    if (refs.name.value === '' || refs.name.value === ' ') {
        alert('Enter the name');
        return
    } else if (refs.tel.value === '' || refs.tel.value === ' ' ) {
        alert('Enter the telephone');
        return
    } else if (!isNumber(refs.tel.value)) {
        alert('Enter the numeric telephone');
        return
    } else if (refs.message.value === '' || refs.message.value === ' ') {
        alert('Enter the massage');
        return
    } else {
        const form = {
            name: refs.name.value,
            telephone: refs.tel.value,
            message: refs.message.value,
        }
        window.open(`mailto:reznik.d.o12@gmail.com?subject=Message for Denis&body=Name: ${form.name} Telephone: ${form.telephone} Message: ${form.message}`)
    }
    reset();
}

function reset() {
    refs.name.value = '';
    refs.tel.value = '';
    refs.message.value = '';
}
 
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}