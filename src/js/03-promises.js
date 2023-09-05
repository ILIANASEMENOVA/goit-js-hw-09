const refs = {
  form: document.querySelector('form.form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    amount: { value: amount },
    step: { value: step },
    delay: { value: delay },
  } = refs.form.elements;

  let promiseDelay = Number(delay);
  for (let i = 1; i <= Number(amount); i += 1, promiseDelay += Number(step)) {
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
