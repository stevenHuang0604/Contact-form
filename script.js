const submitBtn = document.querySelector('.form__submit');
const queryContainer = document.querySelector('.form__query-container');

const errorFirstName = document.querySelector('.form__error--first-name');
const errorLastName = document.querySelector('.form__error--last-name');
const errorEmail = document.querySelector('.form__error--email');
const errorQuery = document.querySelector('.form__error--query');
const errorMessage = document.querySelector('.form__error--message');
const errorCheck = document.querySelector('.form__error--check');

const inputFirstName = document.querySelector('.form__input--first-name');
const inputLastName = document.querySelector('.form__input--last-name');
const inputEmail = document.querySelector('.form__input--email');
const inputQuery = Array.from(document.querySelectorAll('.form__input--query'));
const inputMessage = document.querySelector('.form__input--message');
const inputCheck = document.querySelector('.form__input--check');

const toast = document.querySelector('.toast');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputFirstName.value.length === 0) {
    errorFirstName.classList.remove('hidden');
    inputFirstName.style.setProperty('border', '1px solid var(--color-red)');
  } else {
    errorFirstName.classList.add('hidden');
    inputFirstName.style.setProperty('border', '1px solid var(--color-grey-medium)');
  }

  if (inputLastName.value.length === 0) {
    errorLastName.classList.remove('hidden');
    inputLastName.style.setProperty('border', '1px solid var(--color-red)');
  } else {
    errorLastName.classList.add('hidden');
    inputLastName.style.setProperty('border', '1px solid var(--color-grey-medium)');
  }
  console.log(inputEmail.validity.valid);
  if (!inputEmail.validity.valid) {
    errorEmail.classList.remove('hidden');
    inputEmail.style.setProperty('border', '1px solid var(--color-red)');
  } else {
    errorEmail.classList.add('hidden');
    inputEmail.style.setProperty('border', '1px solid var(--color-grey-medium)');
  }

  if (!inputQuery.some((query) => query.checked)) {
    errorQuery.classList.remove('hidden');
  } else {
    errorQuery.classList.add('hidden');
  }

  if (inputMessage.value.length === 0) {
    errorMessage.classList.remove('hidden');
    inputMessage.style.setProperty('border', '1px solid var(--color-red)');
  } else {
    errorMessage.classList.add('hidden');
    inputMessage.style.setProperty('border', '1px solid var(--color-grey-medium)');
  }

  if (!inputCheck.checked) {
    errorCheck.classList.remove('hidden');
  } else {
    errorCheck.classList.add('hidden');
  }

  if (
    inputFirstName.value &&
    inputLastName.value &&
    inputEmail.validity.valid &&
    inputQuery.some((query) => query.checked) &&
    inputMessage.value &&
    inputCheck.checked
  ) {
    toast.classList.remove('toast--hidden');

    setTimeout(() => {
      toast.classList.add('toast--hidden');
    }, 2000);
  }
});

queryContainer.addEventListener('click', function (e) {
  inputQuery.forEach((query) => {
    if (e.target === query) {
      query.closest('div').style.setProperty('background-color', 'var(--color-green-light)');
    } else {
      query.closest('div').style.setProperty('background-color', 'var(--color-white)');
    }
  });
});
