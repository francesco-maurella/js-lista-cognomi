// Surame List - Array
var surnameList = ['Kent', 'Wayne', 'Jordan', 'Prince', 'Johnz', 'Allen', 'West', 'Ryner', 'Grayson', 'Kyle'];

// User surname - Var
var userSurname = prompt('Scrivi il tuo cognome');

// Verify surname data
if (/[^a-zA-Z]/.test(userSurname) || !userSurname){
  alert('Insersci un nome valido, composto da lettere!');
  location.reload();
} else {
  userSurname = userSurname.charAt(0).toUpperCase() + userSurname.substring(1).toLowerCase();
  surnameList.push(userSurname)
  alert('Cognome inserito il lista!')
}

// Surname List order
surnameList = surnameList.sort();

//Result List - Stamp
var result = document.getElementById('result');
var number = document.getElementById('number');

// Buttons
var methodFor = document.getElementById('method-for');
var methodWhile = document.getElementById('method-while');

//Surname List - Stamp FOR Cicle
methodFor.addEventListener('click',
function() {
  for (var i = 0; i < surnameList.length; i++) {
    result.innerHTML = result.innerHTML + '<li>' + surnameList[i] + '</li>';

    if (surnameList[i] === userSurname) {
      number.innerText = 'Sei il n. ' + (surnameList.indexOf(userSurname) + 1) + ' della lista'
    }
  }
}
);

//Surname List - Stamp WHILE Cicle
methodWhile.addEventListener('click',
function() {
  i = 0;
  while (i < surnameList.length) {
    result.innerHTML = result.innerHTML + '<li>' + surnameList[i] + '</li>';
    i++;

    if (surnameList[i] === userSurname) {
        number.innerText = 'Sei il n. ' + (surnameList.indexOf(userSurname) + 1) + ' della lista'
      }
  }
}
);
