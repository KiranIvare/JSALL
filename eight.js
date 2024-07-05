

/// event ////

/// event handle in javascript
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
}

//////
 kks = document.querySelector("#kks");
 kks.onclick = function(e)   ////e means object
{
    console.log(e.type)
}
////////

let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("you are inside div");
}


//// event lisener ///////

btn1.addEventListener("click",(evt) => { //with arrow funtion
    console.log("button was clickrd");
    console.log(evt);
    console.log(evt.type);
});

kks.addEventListener("click", function(e) { // without arrow funtion
    console.log("kiran");
    console.log("ivare");
});


btn1.addEventListener("click",(evt) => {
    console.log("button was clickrd");
});

btn1.addEventListener("click",(evt) => {
    console.log("button was clickrd - handdeler-2");
});

btn1.addEventListener("click",(evt) => {
    console.log("button was clickrd - handdeler -3");
});

btn1.addEventListener("click",(evt) => {
    console.log("button was clickrd - handdeler - 4");
});


//// remove lisener ///

// const handdeler3 = () =>{
//     console.log("button was clicked -handler3");
// };
// btn1.removeEventListener("click",handler3);


///// practice Qution 1  ////

let modeBtn = document.querySelector("#mode");
let currMode =  "light";    ////dark

modeBtn.addEventListener("click",() =>{

    if(mode==="light"){
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "red";
       }
       else{
        mode = "light";
        document.querySelector("body").style.backgroundColor = "green";
       }
       console.log(mode);
});

/*

newbtn = document.querySelector("#btn");
mode = "light";

function kiran (){
   if(mode==="light"){
    mode = "dark";
    document.querySelector("body").style.backgroundColor = "red";
   }
   else{
    mode = "light";
    document.querySelector("body").style.backgroundColor = "green";
   }
   console.log(mode);
}

*/


