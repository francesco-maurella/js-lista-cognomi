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
  surnameList.push(userSurname);
  alert('Cognome inserito il lista!');
};

// Surname List order
surnameList.sort();

//HTML ID Elements Var
var result = document.getElementById('result');
var number = document.getElementById('number');

//Surname List - Stamp
i = 0;
while (i < surnameList.length) {
  result.innerHTML +=  '<li>' + surnameList[i] + '</li>';
  i++;
};

// Surname Position Var
var listElemntPosition = surnameList.indexOf(userSurname);

// Surname List Element container
var listElemnt = result.getElementsByTagName('LI')[listElemntPosition];

listElemntPosition++;

//Surname List Element Class
listElemnt.className = 'evidence';

//Surname Position - Stamp
number.innerHTML = 'Sig. ' + userSurname + ',<br> lei è il n. ' + listElemntPosition + ' della lista';
