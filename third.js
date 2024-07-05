
// loops

let i = 0;
let sum=0;
let n=10;
for (i=1;i<=n;i++)
{
   sum=sum+i;
}
console.log(sum);

/// for loops

let k=0;
for(k=1;k<=10;k++)
{
    console.log(k);
}
console.log(k);

//////
let str1 = prompt("enter the name");
let size1 = 0;
for(let i=0;str1[i] !== undefined;i++)  //i<str1.length is applicable
    {
    size1++;
    }
console.log("String size is ",size1)

//while loop
 
let m = 1;
while(m<=5)
{
    console.log(m,'kiran');
    m++;
}


//do while loop
let o =1;

do{
    console.log(o,"kiran")
    o++
}
while(o<=10);

//for-of loop  use to calculate the string size 

let str = "kiran";
let size = 0;

for(let i of str){
    console.log("i=",i)
    size++;
}
console.log("string size = ",size);


//for in loop
// this is call key value
let student = {
    name:"Kiran Ivare",
    age:20,
    cgpa:7.55,
    isPass:true
};

for (let i in student)
{
    console.log(i);
}

for (let key in student){
    console.log("key =",key,"value =",student[key]);
} 

//practice qution 1

let s =1;
even = 0;
for(s=0;s<=100;s++)
{
    if(s%2===0)
    {
        console.log(s);
    }
    
}

//// prctice q -2

// let gameNum = 25;
// let userNum = prompt("Guess the Number :");

// while (userNum != gameNum)
// {
//     //game 
//     userNum = prompt("worng number Number :");
// }
// console.log("congratulation");




//// string

let str11 ="kiran1";
console.log(str11.length)
console.log(str11[0]) ///k

//templet Literiallys

let obj = {
    item :"pen",
     price :10,

};
let output = `the cost of ${obj.item} is ${obj.price} rupees  ${1+2+3}`;
console.log(output);
let str13="kiran\tivare";
console.log("kiran \n ivare")
console.log("kiran \t ivare")
console.log(str13.length)

/// upper case

let str12="ivare";
let newstr12=str12.toUpperCase();
console.log(str12)
console.log(newstr12)


///lower case

let str17="IVARE";
let newstr17=str17.toLowerCase();
console.log(str17)
console.log(newstr17)

/// remove space 

let str77 = "         kiran   ivare      ";

console.log(str77.trim());

///sclice method 

let str3 = "01234567";
console.log(str3.slice(1,6));

//// string ko jodana 

let str111 ="ivare";
let str333 ="kiran";

let res = str111.concat(str333);
// let res = str111 + str333;
console.log(res);


//// replace method 

let str55= "hellow";
 console.log(str55.replace("h" ,"y"));

 //// new method charactor chack in number

 let str22 = "Hivarvadi";

 console.log(str22.charAt(0));


 ///// practice Qution

 let fullname = prompt ("enter name without space ");

 let username= "@"+fullname+ fullname.length;

 console.log(username);

