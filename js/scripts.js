// // let body = document.getElementsByTagName('body'); //the plural will return an Array, single (element) will return one
// // console.log(body[0]);// use the index of body to grab th body only. older method
// //
// // let classes = document.getElementsByClassName('my-header'); //grabs every class with my-header and remove that class from all of them.
// // console.log(classes[0]);
// //
// // let id = document.getElementById("my-paragraph"); //ID should never be used for styling, used only fo Javascript.
// // console.log(id);
// //
// // //NEWER METHODS are below.
// //
// // let tag = document.querySelector('body') //querySelector will only return on element. only give back the first one if multiple.
// // console.log(tag);
// //
// // let myClass = document.querySelector('.my-header'); //will only give you back the first class of my-header
// // console.log(myClass);
// //
// // let myId =document.querySelector('#my-paragraph');
// // console.log(myId);
// //
// // let tags = querySelectorAll('body'); //will always return an ARRAY with all of the tag involved. use period of class and # for ID.
//
// // function queryDom(methodName, element){
// //   switch (methodName.tolowercase()) {
// //     case "getElementsByTagName":
// //       console.log(document.getElementsByTagName(element));
// //       break;
// //     case "getElementById":
// //         console.log(document.getElementById(element));
// //         break;
// //     case "getElementsByClassName":
// //           console.log(document.getElementsByClassName(element));
// //           break;
// //     case "querySelector":
// //             console.log(document.querySelector(element));
// //             break;
// //     case "querySelectorAll":
// //               console.log(document.querySelectorAll(element));
// //               break;
// //     default:
// //     break;
// //   }
// // }
// //
// // let answer = queryDom(getElementsByTagName, body);
// //
// //
// // //ryeker version
// //
// // function queryDom(methodName, element){
// //   switch(methodName.tolowercase()){
// //     case 'getelementsbytagname':
// //       document.getElementsByTagName(element);
// //       break;
// //     case 'queryselector':
// //       document.querySelector(`.${element}`) //need a way to determine if it's a class or ID, add a second method or add anothe argument.
// //   }
// // }
//
// // let myClass = document.querySelector('.my-header'); //grabs every class with my-header and remove that class from all of them.
// //
// // myClass.addEventListener(
// //   'click', //string that is a valid event.
// //   e => { //and takes a function, that is a call back function. e is a placeholder, stands for event.
// //     alert("hi");
// // });
// //
// // console.log(myClass);
//
// let myButton = document.querySelector(".my-button");
// let myDiv = document.querySelector('.my-div');
// let h1 =document.querySelector('h1');
//
// // myButton.addEventListener(
// //   'click',
// //   e => {
// //     alert("the button has been clicked.");
// //   });
//
//
// myButton.addEventListener( //.textcontent example
//   'click',
//   e => {
//   e.target.textContent = "DO NOT CLICK";
//   });
//
//
// myDiv.addEventListener(
//   'mouseenter',
//   e => {
//     e.target.style.backgroundColor = "#ffff00";
//   });
//
// h1.addEventListener(
//   'mouseleave',
//   e => {
//     e.target.style.color = "#00ffff";
//   });
//
// //innerHTML. Always use textcontent..only value is a string to enter
// let div = document.querySelector('div');
// div.innerHTML = "<p>lorem ispsum dolorus cantu!!</p>"; //create this element in html
//
// //createElement
//
// let newH1 = document.createElement("h1"); //set it to a varible.
// const body =document.querySelector("body");
//
// newH1.textContent = "Hello Baby"; //add something into it.
// body.appendChild(newH1);
//
//
// console.log(newH1);
//
// //insert before, needs 3 things (parent, new node, and reference node )
// newH1.className = "text-center";//best practice to have the newH1 style right before it.///but will replace whats there
// body.insertBefore(newH1, div);
//
// //elegant way to do e.target.style blah
// div.id ="red_text"; //make sure to have the ID in css.
//
// //classList; a method of it's own. multiple arguments that you can give.
// div.classList.add("text-center"); //does not override what is already there. we add to it.
// //use classList to add class to newly made element.
//
// //next classList type is REMOVE.
//
// // div.addEventListener( 'click', e=>{
// //   div.classList.remove("text-center");
// // });
//
// //toogle() turn on and off
// // div.addEventListener( 'click', e=>{
// //   div.classList.toggle("text-center");
// // });
//
// //contains, tells you if a class exist or not.
// div.addEventListener( 'click', e=>{
//   div.classList.toggle("text-center");
//   console.log(div.classList.contains("text-center"));
//   div.classList.replace("blue-background", "green-background");
// });
//
// myImg = document.createElement('img'); //create img tag
//
// myImg.setAttribute('src', "https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg");
//
// div.appendChild(myImg);//add it to div element.


//Fizz buzz

// for ( i=1; i <= 100; i++){
//   let body = document.querySelector("body");
//   let p = document.createElement('p');
//
//   if (i % 3 && i % 5 === 0){
//     p.textContent = "fizzbuzz";
//   } else {
//     if (i % 5 === 0){
//     p.textContent = "buzz";
//   }else{
//     if (i % 3 === 0){
//       p.textContent = "fizz";
//     } else{
//       p.textContent = i ;
//     }
//     body.appendChild(p);
//   }
// }
// }


//day 7 takeHome
let myButton = document.querySelector(".my-button");
let body = document.querySelector("body");

myButton.addEventListener(
  'click',
  e => {
    var title = prompt("What's the title?" , "Rick and Morty");
    var doToday = prompt("What did you do today?" , "Made fried chicken.");
    var color = prompt("What is your favorite color" , "Purple");
    color = color.toLowerCase();
    console.log(color);

    var att = document.createAttribute("class");
    att.value = "text-center";
    let h1 = document.createElement('h1');
    h1.setAttributeNode(att);
    h1.textContent = title;
    body.appendChild(h1);

    var att = document.createAttribute("class");
    att.value = "justify";
    let p = document.createElement('p');
    p.setAttributeNode(att);
    p.textContent = doToday;
    body.appendChild(p);

    document.querySelector('p').style.backgroundColor = color;
  });
