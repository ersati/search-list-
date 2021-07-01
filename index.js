// Import stylesheets
import './style.css';

const people = document.querySelectorAll('.person');
const input = document.querySelector('input');

console.log(people[0].children[1].textContent, input, people.length);

input.addEventListener('change', () => {
  console.log('ok');
  console.log(people[0].children[1].textContent.indexOf(input.value) > -1);
  for (let i = 0; i > people.length; i++) {
    if (people[i].children[1].textContent.indexOf(input.value) > -1) {
      console.log('hura');
    } else {
      console.log('buu');
    }
  }
});
