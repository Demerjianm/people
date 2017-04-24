var button = document.getElementById('addPerson');

button.addEventListener('click', function(e) {
  addPerson();
});

var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.addToList = function() {
  var list = document.getElementById('people')
  var li = document.createElement('li');
  li.innerHTML = this.lastName + ', ' + this.firstName;
  list.appendChild(li)
}

Person.prototype.logPerson = function() {
  console.log(this.firstName + " " + this.lastName + ' added to list')
}


function addPerson() {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var person = new Person(firstName.value, lastName.value);
  person.addToList();
  person.logPerson();
  firstName.value = null;
  lastName.value = null;
}
