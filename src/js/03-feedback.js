import throttle from "lodash.throttle";


const form = document.querySelector(`.feedback-form`);
const input = document.querySelector(`.feedback-form input`);
const textarea = document.querySelector(`.feedback-form textarea`);

const FEEDBACK_KEY = `feedback-form-state`;
// const formData = {};

form.addEventListener(`submit`, onFormSubmit);
input.addEventListener(`input`, throttle(onInput, 500));
textarea.addEventListener(`input`, throttle(onInput, 500));

const formData = {};
// function onFormSubmit (evt){
//  evt.preventDefault();
//  form.reset();
//  localStorage.removeItem(FEEDBACK_KEY);
//  console.log(formData);

// };

// function onInput (evt){

// localStorage.setItem (FEEDBACK_KEY, JSON.stringify(formData));

// formData [evt.target.name] = evt.target.value;
// console.log (formData)

// };

//  saveMessage= JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};
//     if(formData){
//         input.value = saveMessage.email|| ``;
//         textarea.value = saveMessage.message|| ``;
//     };
  

function onInput (evt) {
    
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
    formData [evt.target.name] = evt.target.value;
}

function onFormSubmit (evt){
    evt.preventDefault();
    console.log(formData);
    form.reset();
    localStorage.removeItem(FEEDBACK_KEY);
}
saveMessage = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    if (saveMessage){
        input.value = saveMessage.email;
        textarea.value = saveMessage.message;
    };