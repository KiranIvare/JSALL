
///////////// to get attribute value  ///////////////////
// element cya aatmade ji aditional information aasti tila attribute manta 
// ex div cya aat made id , class , name 
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

////////////// to set the attribute value  ////////////

let kiran = para.setAttribute("class","class1"); //class la class1 navane update kel
console.log(kiran)


//// style attribute /////

div.style.backgroundColor = "green";

div.style.fontSize = "26px";

// div.innerText = "hello";

// div.style.visibility = "hidden";

//// Insert Elements  ////  remaining parat  

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

div = document.querySelector("div");
div.append(newBtn)  /// node.prepend( el ) node.before( el ) node.after( el )

//// Practice Qutions 1 /////

let newBtn1 = document.createElement("button");
newBtn1.innerText = "click me!";

newBtn1.style.color = "white";
newBtn1.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn1);

//// practice Qutions 2 ///////



