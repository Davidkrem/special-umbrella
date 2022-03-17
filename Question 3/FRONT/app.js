const form = document.querySelector('form');

const submitHandler = (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll('inpput[type="text"]');
  let validInputs = false;
  inputs.forEach((input) => {
    if (input.value.toLowerCase().includes('calculus')) {
      validInputs = true;
    }
  });
  if (!validInputs) {
    alert('Please enter a valid input');
  }
};

form.addEventListener('submit', submitHandler);
