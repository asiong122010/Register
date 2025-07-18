/* Object */
const sampleObj = {
    name: 'Angelo',
    age: 14
}
/* Show the properties using console */
console.log(sampleObj)
/* Gives all the value of properties */
sampleObj
/* choose an specific object */
sampleObj.name
/* adds an object  */
Object.assign(sampleObj,{MiddleName: 'Balon'}, {LastName: 'Eustaquio'}, {Nickname: 'Gelo'}, )

Object. assign(sampleObj, {Status: 'Single'}) 
/* delete an object */ 
delete sampleObj.Status
/* To call an obj as array [] */
console.log(Object.keys(sampleObj))
/* To call an obj by only its value */
console.log(Object.values(sampleObj))
/* To call an obj in two array or each value has its own array */
console.log(Object.entries(sampleObj))


/* Array */

const array = ['Thea', 'Dave', 'Julia']
/* delete an array */
delete array[1]
/* adds in last */
array.push("Allen")
/* adds in front */
array.unshift('Vernice')
/* choose an specific array */
array[1]


/* Function */

/* function  a button or things using id */
function button() {
    /*variables such as var const and let. document.getElementById for id or document.querySelector for one and document.querySelectorAll */
    const name = document.getElementById('Id')
    /* And any you want to put */
}

/* Next */
function run(name) {
    /* return adds a message to the function, array, objects, const, let, and var. */   
    return name + ' is a programmer'
}
run("Angelo")


/* loop */

for (let i = 0; i < 10; i++) { 
    console.log("i: ", i)
     }
     

/* Conditions */

let username = 'Angelo'
if (typeof username === 'string') { 
    console.log('YES') 
} else { 
    console.log('NO') }
 YES



let names = ['Angelo', 'Allen', 'Dave']
if (typeof names === 'string') { 
    console.log('YES') 
} else { 
    console.log('NO') }
 NO


 
let name = 'angelo' 
switch(name) {
    case 'Angelo':
        console.log('Eustaquio'); break;
    case 'Gelo':
        console.log('Balon'); break;
    default:
        console.log('None');
}
None



let uname = 'Angelo' 
switch(name) {
    case 'Angelo':
        console.log('Eustaquio'); break;
    case 'Gelo':
        console.log('Balon'); break;
    default:
        console.log('None');
}
Eustaquio


/* document */

function goToOtherPage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const date = document.getElementById("date").value;

  if (name && password && date) {
 /* Gives a time delay going through website */
    setTimeout(() => {
      window.location.href = "Profile.html";
    }, 2000); 
  } else {
    alert("Please fill in all fields!");
  }
  /* Gives the value of the name after sign in */
  window.alert(`Name: ${name} Hello!.`)
}

/* const let and var make a new storage to store the element and the given name after const is the new name to access the given element example 
const name = document.etc, The new value of element name same goes to let and var. */

const pangalan = document.getElementById('name')
undefined

/* Show's the value of name */
pangalan.value
'Angelo Eustaquio'

/* Change the value of name */
pangalan.value = ('Angelo')
'Angelo'

pangalan.value
'Angelo'

/* your can also use function to change it*/

function palit(name) {
    pangalan.value = name
}
undefined

palit('Gelo')
undefined

palit.value


  /* practice */

const inputname = document.getElementById('name')

function gwapings(name) {
   alert(`Hello, ${inputname.value}, Pogi mo!`)
}

gwapings(Angelo)



/* Spread Operators */

const objE = {
    name: 'geloCode',
    age: 14
}
undefined

/* three dots give the value the same value objE had */
const objL = {...objE}
undefined

/* They are going to have the same value  because of objL */
objL
{name: 'geloCode', age: 14}

/* They are going to have the same value  because of objL */
objE
{name: 'geloCode', age: 14}

/* The value */
let objC = {
    name: 'geloCode',
    age: 14
}
undefined

/* The Given */
let objO = {...objC}
undefined

/* Given */
objC
{name: 'geloCode', age: 14}

/* Given */
objO
{name: 'geloCode', age: 14}

/* Given */
let objO = {...objC} => ...

/* Given */
let objP = objC => no ...  

/* Given */
let objO = {...objC, nickname: 'Gelo'}




/* Destructure */

let obj = {
   name: 'GeloCode',
    age: 14
}
/* This command turn the properties or element into object in most efficient way */
const { name, age } = obj
/* to see the all properties */
obj
{name: 'GeloCode', age: 14}
/* to see the specific value */
name
'GeloCode'

age
14

/* PRACTICE */
const username = window.prompt("name");
function auto(name){
    return `Hello, ${username.value}`;
}
console.log(auto(username));
