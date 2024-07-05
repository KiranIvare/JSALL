

let a=10;
let b=20;
c=a+b;
k=a*b;
f=a/b;
j=a-b;


console.log("A+B =",c);
console.log(k);
console.log(f);
console.log(j);
console.log(a++);
console.log(++a);
console.log(++a);
console.log(++a);

a +=4;  //a=a+4;
console.log("a=",a);

a *=5;
console.log("a=",a);

a /=5;
console.log()

/////////////////////////////////////////

let m=10;
let n=5;
let kiran=m>n;
 
console.log(m<n)

let u=10;
let r="5";

console.log("condition1 && condition2 =",u<r||u>r);

let age = 16;

if (age>=18)
{
    console.log("you can vote");
}

if(age<18){
    console.log("you are not vote")
}

//color   if

let mode = "dark";
let color;

if (mode==="dark"){
    color="black";

}
if(mode==="light"){
    color="white";
}

console.log(color);

////// if else 

let mode1 ="light";
let color1;
if (mode1==="dark"){
    color1="black";
}
else{
    color1 = "white";
}
console.log(color1);


//// number odd even

let w=15;

if(w%2===0)
{
    console.log(w,"Number is even");
}
else{
    console.log(w,"number is odd");
}


//// multiple conditoins

let age1=25;

if(age1<29){
    console.log("junior");
}
else if(age1>10){
    console.log("senior");
}
else{
    console.log("middle");
}


alert("hello")  //one time msg 


//// practice q 1



 let num=prompt("Enter a number");
 if (num%5===0){
    console.log(num,"is multiple of 5");
 }
 else{
    console.log(num,"is not multiple of 5");
 }


 //// practice q 2
let score = 75;
let grade;

if(score>=80 && score<=100)
{
  grade = "A";
}
else if(score>=70 && score<=89)
{
  grade = "B";
}
else if(score>=60 && score<=69)
{
  grade = "C";
}
else if(score>=50 && score<=59)
{
  grade = "D";
}
else if(score>=0 && score<=49)
{
    grade="K";
}

console.log(grade);



/////////////////// practice  /////////////////////
let s = 6;

if(s%2==0)
{
    console.log("number is even")
}
else
{
    console.log("number is odd")
}

 
 let num1=prompt("enter a number djkshdjksahdkj")
 if(num1%5===0)
 {
    console.log("multipy by 5")
 }
 else{
    console.log("not multiplay")
 }


 let score1 = 55;
 let grade1 ;
 if (score1>=80 && score1<=100)
 {
    grade1 = "a";
 }

 else if(score1>=70 && score1<=79)
 {
    grade1="k"
 }
 else{
    grade1="s"
 }
 console.log(grade1)
