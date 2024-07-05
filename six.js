

// window object 

console.log("hello");
window.console.log("hellow2");
console.dir(window);
console.dir(window.document);
console.dir(document);
console.log(document.body);
console.dir(document.body);


//// DOM Document object model  ///////////////

//// script la body cya aadi taklyavar dom element acces nay hot manun body cya last la scrit tag takava......

// selected with id //
 let headding = document.getElementById("headding"); /////h1
  console.log(headding);
 console.dir(headding);   ////////////////  object print kartana dir liha

 //selected with class //

 let headdings= document.getElementsByClassName("headding"); /////h1
  console.log(headdings);
 console.dir(headdings);

 //// selected with paragraf

 let paraghf = document.getElementsByTagName("p");
 console.dir(paraghf);


 /////// selected with Queryselector p tag

 let element = document.querySelector("p");   ///first element
 console.dir(element);


 let allElement = document.querySelectorAll("p");   /// All element
 console.dir(allElement);

 //////////// selected with Queryselector with class

 let element1 = document.querySelector(".headding");   ///first element
 console.dir(element1);


 let allElement1 = document.querySelectorAll(".headding");   /// All element
 console.dir(allElement1);

 //////////// selected with Queryselector with with id same . cya jagevar # ///////





 //////////// properties of DOM  //////// homework  /// DOM Manipulation /////

 console.dir(document.body.firstChild);

 //// practice Qutions 1

 let h2 = document.querySelector("h2");
 console.dir(h2);

console.dir(h2.innerText);

kiran = h2.innerText + "from apana collage";
console.dir(kiran)

 //// practice Qutions 2

 let divs = document.querySelectorAll(".box");
/// begner///
 // console.log(divs[0]);
//  divs[0].innerText = " new unique value 1";
//  divs[1].innerText = " new unique value 2";
//  divs[2].innerText = " new unique value 3";


 /// for advance  use this

 let idx = 1;
  for (let div of divs)
  {
    div.innerText = `new unique value ${idx}`;
    idx++;
  }

