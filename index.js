// Import stylesheets
import './style.css';

const input = document.querySelector('input');
const people = document.querySelectorAll('.person');

// console.log(people[0].children[1].textContent, input, people.length);

input.addEventListener('change', () => {
  people.forEach(person => {
    if(person.children[1].textContent.toUpperCase().indexOf(input.value.toUpperCase()) > -1){
      person.style.display = "";
    }else {
      person.style.display = "none";
      console.log('buu')
    }
  })

});
