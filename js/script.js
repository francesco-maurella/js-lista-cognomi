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

// User surname Capitalize
// userSurname = userSurname[0].toUpperCase() + userSurname.substring(1)

// Surname List order
surnameList = surnameList.sort();

//Result List - Stamp
var result = document.getElementById('result');

//Surname List - Stamp
for (var i = 0; i < surnameList.length; i++) {
  result.innerHTML = result.innerHTML + '<li>' + surnameList[i] + '</li>';
}
