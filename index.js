// Import stylesheets
import './style.css';

const input = document.querySelector('input');
const people = document.querySelectorAll('.person');


input.addEventListener('change', () => {
  people.forEach(person => {
    if (
      person.children[1].textContent
        .toUpperCase()
        .indexOf(input.value.toUpperCase()) > -1
    ) {
      person.style.display = '';
      person.style.animation = 'out 1s forwards';
    } else {
      person.style.animation = 'in 1s forwards';
      person.style.display = "none"
    }
  });
});
