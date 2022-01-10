import throttle from 'lodash.throttle';

const inputForm = document.querySelector('.feedback-form')
const formEmail = inputForm.querySelector('input')
const formTextarea = inputForm.querySelector('textarea')


let parsedInputs = {
    email: '',
    message: ''
};


let savedInputs = localStorage.getItem("feedback-form-state");

if (savedInputs) {
    parsedInputs = JSON.parse(savedInputs);
    formEmail.value = parsedInputs.email;
    formTextarea.value = parsedInputs.message
}

inputForm.addEventListener('input', throttle(handleInput, 500));
inputForm.addEventListener('submit', handleSubmit);

function handleInput() {
    const data = {
        email: inputForm.elements.email.value,
        message: inputForm.elements.message.value
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(data))
}

function handleSubmit(e) {
    e.preventDefault()
    
    savedInputs = localStorage.getItem("feedback-form-state");

    if (savedInputs) {
    parsedInputs = JSON.parse(savedInputs);
    formEmail.value = parsedInputs.email;
    formTextarea.value = parsedInputs.message
    };

    console.log(parsedInputs)

    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}
