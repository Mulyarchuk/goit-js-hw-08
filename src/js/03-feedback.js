import throttle from "lodash.throttle";

const form = document.querySelector(`.feedback-form`);

const FEEDBACK_KEY = `feedback-form-state`;
const formData = {};

form.addEventListener(`submit`, onFormSubmit);
form.addEventListener(`input`, throttle(onInput, 500));


populateInput();

function onFormSubmit (evt){
 evt.preventDefault();
 evt.currentTarget.reset();
 localStorage.removeItem(FEEDBACK_KEY);
 console.log(formData)
};

function onInput (evt){

localStorage.setItem (FEEDBACK_KEY, JSON.stringify(formData))

formData [evt.target.name] = evt.target.value;
console.log (formData)

};
function getLocalStorageData(){
   return JSON.parse(localStorage.getItem(FEEDBACK_KEY))
}

function populateInput(){
    const saveMessage = getLocalStorageData();
    if (saveMessage){
        form.value = saveMessage;
    }
    console.log (saveMessage)
    
}
