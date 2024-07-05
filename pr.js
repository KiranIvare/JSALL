// let num = prompt("enter a number")
// let i = 1;
// let fact = 1;
// if(num>0 && !isNaN(num))
// {
//     while(i<=num)
//     {
//         fact = fact*i;
//         i++;
//     }
//     console.log(fact)
// }
// else
// {
//     console.log("invalid number")
// }

// let i = 1;
// do{
//     console.log("i=",i);
//     i++
// }
//  while(i>=10);

//for of loop

// let str = "javascruipt";
// let size = 0;
// let i = 0;
// for(i of str)
// {
//     size++;
// }
// console.log(size)

//for in loop return object cya key 

// let student = {
//     name : "kiran ivare",
//     age:20,
//     cgpa:5.5,
// };
// let key;

// for(key in student){
//     console.log(key,student[key]);
// }

// let i = 0;
// for(i=1;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }

// let i = ;
// while(i<=100){
//     if(i%2==0)
//     {
//         console.log(i);
//     }
//     i++;
// }

// let gamenumber = 50;

// let usrNumber = prompt("Guss the number :");

// while(usrNumber != gamenumber)
// {
//     usrNumber = prompt("you enter  wrong number");
// }
// console.log("congrtulation");

// let str = "kiran ivare";
// console.log(str.charAt(1), str.charAt(2))

// let fullname = prompt("enter the full name without spacing");
// console.log(fullname);

// let username = `@ ${fullname} ${fullname.length}`;

// console.log(username);

// let heroes = ["kiran","ivare","karmala","dsd"]

// //  let idex;
// //  for(idex=0;idex<heroes.length;idex++)
// //  {
// //     console.log(heroes[idex])
// //  }

// for (let hero of heroes){
//     console.log(hero.toLowerCase());

// }

// let Arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// Arr.shift();
// console.log(Arr);
// Arr.splice(2,1,"ola");
// console.log(Arr);
// Arr.push("amazhon");
// console.log(Arr);

//  const multiple = (a,b) =>{
//     c=a*b;
//     return c;
//  };
//  multiple(10,20)
//  console.log(c)


// const vowels = (str) =>{
//     let  count = 0;
//     for(let char of str)
//     {
//         if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
//         {
//             count++
//         }
//     }
// console.log(count);

// }

// let Arr = [5,7,8,9,6,4,];

// let cal = (val)=> {
//     console.log(val*val)
// }
// Arr.forEach(cal);

// let num = [10,20,30];
// let newarr = num.map((val)=>{
//     return val*2;
// });
// console.log(newarr);

// let arr = [80,23,98,95,97]

// //  arr.filter( ( val ) => {
// //     let kiran = val % 2 === 0;
// //     return  kiran
// //     } )
// //     console.log(kiran)
//   let newarr = arr.filter((val)=>{
//     return val>90;
//  })
//  console.log(newarr);

// let num = prompt("Enter the number");

// let arr = [];

// for(let i=1; i<=num; i++)
// {
//     arr[i-1] = i;
// }
// console.log(arr);

// let kiran = arr.reduce((prev,curet)=>{
//     return prev * curet
// });
// console.log(kiran)
// let kiran = document.getElementById("kk");
// console.dir(kiran);



// let karmala = document.getElementsByClassName("ivare");
// console.dir(karmala);

// let id = document.getElementsByTagName("h3");
// console.log(id);

// let first  = document.querySelector("div")
// console.dir(first.innerText);
// console.dir(first.innerHTML)

// let first1  = document.querySelector("h3")
// console.dir(first1.textContent);

// let first = document.querySelector("h2")
// console.dir(first.innerText);
// add = first.innerText + " from apana cppp";
// console.dir(add);

// let div = document.querySelectorAll(".box");

// let idex = 1;

// for(ki of div){
//     ki.innerText = `nww value ${idex}`
//     idex++;
// }

//  let para = document.querySelector("p");
//  console.log(para.setAttribute("class","newclass"))

//  let doc = document.querySelector("div");
//  console.log(doc.setAttribute("class", "myclassss"))

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.dir(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML= "kiranivare";
// newHeading.remove();


// document.querySelector("body").prepend(newHeading);

// let btn =  document.createElement("button")
// btn.innerText = "click me !!";
// btn.style.backgroundColor = "red";
// console.log(btn)
// let body = document.querySelector("body")
// body.prepend(btn);

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("btn is a clicked")
//     let a = 25;
//     a++;
//     console.log(a);
// }
// let s = document.querySelector("#ms")

// ms.onmouseover = () =>{
//     console.log("sdsd")
// }

// for of loop
// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//     // Convert the character to lowercase for case insensitivity
//         if (str[i] === "a" || str[i]  === "e" || str[i]  === "i" || str[i]  === "o" || str[i]  === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("kiranaa"); // This will output the count of vowels in "kiran"



// let markss = [85,97,44,37,76,60]
// let sum = 0;
// for(let i = 0;i<markss.length;i++){
//     sum = sum + markss[i];
// }
// let avg;
// avg = sum/markss.length;
// console.log(avg)

// selected with id //


/// .then using asyncfunction and feaching the multiple data one by one  


//Async-Await  
/* await pauses the execution of its surrounding
 async function until the promise is settled. */

 let promise = new Promise((resolve,rejected)=>{
    resolve=("sucessfully");
 })

 const getpromise=()=>{
    return Promise((resolve,rejected)=>{
        resolve("sucessfully")
    })
 }
 let promise1 = getpromise();