// Ejercicio 1
let person = {
  name: 'Lucas',
  age: 27,
  profession:'Developer',
}
function objectAttributes(obj){
  console.log(Object.keys(obj))
}
objectAttributes(person);
// Array(3) [ "name", "age", "profession" ]
// Ejercicio 2

// Ejercicio 3

const ReverseString = str => [...str].reverse().join('');
console.log(ReverseString("Hello world"))
// Ejercicio 4
class Login {
  constructor(username, password){
    if(username == 'admin' && password == 'passwd'){
      console.log('User logged in')
      alert('User logged in');
    } else {
      console.log('User or Password incorrect')
      alert('User or Password incorrect')
    }
  }
}
let login = new Login('admin', 'passwd') // alert -> User logged in
let logbad = new Login('pepe', 'bad') // alert -> User or passwd incorrect

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
