var person = ['Andrew', 25];
var personTwo = ['Jeen', 60];

function greet(name,age){
  console.log("Hi " + name + ", you are " + age);
}

greet(...person)
greet(...personTwo)



var names = ['Mike', 'Bem']
var fin = ['Sophia', ...names]

fin.forEach(function(name){
  console.log("Hi " + name)
})
