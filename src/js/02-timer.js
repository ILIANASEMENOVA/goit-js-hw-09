import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  dateInput: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
  dataHours: document.querySelector('[data-hours]'),
};
refs.startBtn.disabled = true;

let selectedDate = null;

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  const timer = setInterval(() => {
    refs.startBtn.disabled = true;
    refs.dateInput.disabled = true;

    const difference = selectedDate - Date.now();
    if (difference <= 0) {
      clearInterval(timer);
      refs.dateInput.disabled = false;

      return;
    }
    const { days, hours, minutes, seconds } = convertMs(difference);

    refs.dataDays.textContent = addLeadingZero(days);
    refs.dataHours.textContent = addLeadingZero(hours);
    refs.dataMinutes.textContent = addLeadingZero(minutes);
    refs.dataSeconds.textContent = addLeadingZero(seconds);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates);

    selectedDate = selectedDates[0];
    const currentTime = Date.now();

    if (selectedDate <= currentTime) {
      refs.startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');

      return;
    }
    refs.startBtn.disabled = false;
  },
};

flatpickr(refs.dateInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
