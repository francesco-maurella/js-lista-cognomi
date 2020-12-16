// Surame List - Array
var surnameList = ['Kent', 'Wayne', 'Jordan', 'Prince', 'Johnz', 'Allen', 'West', 'Ryner', 'Grayson', 'Kyle'];

// User surname - Var
var userSurname = prompt('Scrivi il tuo cognome');

// Verify surname data
if (/[^a-zA-Z]/.test(userSurname)){
  alert('Insersci solo lettere');
  location.reload();
} else {
  surnameList.push(userSurname)
  alert('Cognome inserito il lista!')
}

//Surname List - Stamp
// while (true) {
//
// }
