// //day 8 all about form
//
// //type input for form
// //type: number, checkbox, text...etc see the html.
//
// //put the input in a form.
//
// // console.log(document.forms); // to see what's in it. the input becomes a Child nodes.
// // console.log(document.forms.login); //we get that childnode only.
// //we can set name to the form.
// //form validation. write function to check values that are entered in.
//
// //input also have name attribute.
//
//
//
// // console.log(document.forms.login.email); //will show this the input with the anem email.
// //
// // console.log();
// //   let passwordInput = document.forms.login.password;
// //   let emailInput = document.forms.login.email;
// //   let myPTag = document.querySelector('#data_binding');
// //   let submit = document.forms.login.submitBtn;
// //
// //   emailInput.addEventListener('keyup' , e => { //when emailInput happens, listen to this..
// //   myPTag.textContent = e.target.value; //might use keycode for enter to do something.3 types, keydown, keyup, and keycode.
// // });
// //   submit.addEventListener('click' , e =>{ //keeps it from submitting if not filled in.
// //     if (passwordInput.value !== '' || emailInput.value !=='') {
// //       submit.disabled = false);
// //     }
// //   })
//   // submit.addEventListener('click' , e =>{ //keeps it from submitting if not filled in.
//   //   if (passwordInput.value === '' || emailInput.value ==='') {
//   //     e.preventDefault();
//   //   }
//
// // "e.target.value ==> looks at what we type."
// //forms create their own scope in javascript.
//
// //how do we use forms? ACTION and METHOD.
// //ACTION attribute asks what URL on the back end do you want to send this information.
// // inside the event listener, we
//
// //What's this? what's this?
// //inside any function that you write, you will need a reference the function that you called.
// //you need to have access to a dynamic reference of a function.
// //how a function is called and where a function is called is two different thing.
// //this.name = "henry"; //this will always refers to the global scope.
//
//  // function logMyName() { //unless you're in a fat arrow function, this will always refer to the global scope.
//  //   this.name ="John";
//  //   console.log(this);
//  // }
// //  let user = { //let var and const are no bound to 'this'
// //    name: "henry",
// //    password: 12345,
// //    status: "active",
// //  };
// // let guest = {
// //   name : "guest",
// //   password : "undefined",
// //   status: "inactive"
// // }
// //
// //  function logMyName(greeting, ado) {
// //    console.log(this.name, this.password);
// //    alert(`${greeting}, ${this.name}!`);
// //  }
// //
// // logMyName.call(user);//call site, with call, we call henry, and not the regular this.
// // logMyName.call(guest);
// // //use call or apply to change the context of this. use the same function but with different context.
// //
// // logMyName.call(user, "Hello");
// // logMyName.call(guest, "Hello"); //first argument is the THIS argument call will change. the next argument is the argument for the function.
// //
// // //APPLY works the exact same way, but the info we're feeding in is an array. EXPLICIT BINDING
// // logMyName.apply(user, ["Hello", "Goodbye"]);
// // logMyName.apply(guest, ["Hello"]);
//
// //EXPLICIT BINDING with dot this, dot that.
//
// //IMPLICIT binding, calling a function with a certain  context.
//
// let newScope = {
//   name: "Peter Piper",
//   instrument: "Pipes",
//   password: "bag of peppers",
//   context: logMyName //last set of key value does not neeed a comma.
// }
//
// newScope.context("fky away");// whatever the key that we're setting our function to. here we set it with context. Content is now a function of logMyName
//
// //WHY would we use implicit binding over explicit binding? Call and apply is used if we want to bind it quickly and does not have access to that scope.
//
// //object oriented programming. all things are and object and all the object are related to each other.
//
// //lets relate this to the final. the submit button will be able to place it into the ul. do it tonight.
// //you will need a reference in JS to bind that list.
// //this.duedate is a certain date. you would need to bind this to a point in your code.
// //changing stuff on the dom.
// //edit complete delete will need to reflect the ul. this.status === done
// //use this binding to change the way
//
//
//
// let classScore = 90; //global cannot see into scopeOne and scopeTwo
//
//  { //the scope protects the variable inside of it.
//   let classScore= 75;
//   console.log(classScore, "first scope");
// {
//     let classScore=50;
//     console.log(classScore, "second scope");
//
//   }
// };
//
// console.log(classScore, "global scope");

//global scope does it changed with var. let does not have that problem.

//day 9 Brandy's teaching.

//how to create a new object:

let object1 ={} //how to define an empty object.

let object2 = new Object() //another way to create an empty oject.


let person = { //each object will have key and value.
  firstName : "Brandy", //key is firstName. we can have as many as we want. value can be any data type
  lastName: "Moreno",
  age: 22,
  favorites: ["cookies" , "pizza"],
  desc : { //we can put an object inside and object.
      hairColor : "brown",
  }
}

//how do i put value into an object?

object1.food = "pizza"; //this is how we add to an empty obj. this is call dot notation.
object1["color"] = "pink"; // bracket notation.

object1.age;// how look for something inside an object.

for (let key in person ){//use loops to go over the object/to search them for a value. this type is "for in"
  // console.log('key' , key) //need key to access items in object.
  console.log(person.key);
};

//for .. of

for(let key of Object.keys(person)){ //for of
  console.log(key);
}


for(let [key, value] of Object.entries(person)){ //for of needs the OBJECT command..for of can be used on arrays.
  console.log(key, value);
}


//to clone an object

let newObj = Object.create(object1) //objects are saved by their reference in memory.spot in memory.
newObj.flower = "rose";
console.log(newObj);
newObj.color = 'yellow';
