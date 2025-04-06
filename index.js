import {Person, fetchData, fetchNumber, usersMap} from "./tools.js";

const user = new Person("Joseph", 25);
console.log(user.greet());

fetchData()
   .then(data => {
     console.log("Fetched data:", data);
   })
   .catch(error => {
     console.error("Error generating number", error.message);
   });
fetchNumber()
     .then(num => console.log('Generated Number: ${num}'))
     .catch(err => console.log('Error: ${err}'));

console.log(usersMap.get(1));
console.log(usersMap.get(2));