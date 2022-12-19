import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-msg';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onChange, 1000));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  
  formData = {};
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onChange(evt) {
  formData[evt.target.name] = evt.target.value;
  const formDataJson = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJson);
}

function populateTextarea() {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  if (formData) {
    refs.input.value = formData.email || '';
    refs.textarea.value = formData.message || '';
  }
}



