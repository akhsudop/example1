import { throttle } from 'lodash';

const MY_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const saveInput = e => {
  localStorage.setItem(
    MY_KEY,
    JSON.stringify({
      message: e.currentTarget.message.value,
      email: e.currentTarget.email.value,
    })
  );
};

form.addEventListener('input', throttle(saveInput));

const submitForm = e => {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(MY_KEY)));
  console.log(JSON.parse(localStorage.getItem(MY_KEY)).entries);
  // console.log(
  //   `message: ${JSON.parse(localStorage.getItem(MY_KEY)).message} email: ${
  //     JSON.parse(localStorage.getItem(MY_KEY)).email
  //   }`
  // );
  localStorage.clear();
};

form.addEventListener('submit', submitForm);
