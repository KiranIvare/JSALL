

///// funtions and method
function kiran() {
    console.log("kiranivare");
}
kiran();

function myname(msg) {
    //parameter --> input
    console.log(msg);
}
myname("kiranivare"); ///argument


///sum of two number 
function sum(x, y) {
    console.log(x + y);
}


//// funtion 2 number, sum

function sum(w, r) {
    s = w + r;
    return s;
}

let val = sum(3, 4);
console.log(val);

////// Arrow funtion

const arrowSum = (a, b) => {
    console.log(a + b);
}


let arrowmulti = (a, b) => {
    return a * b;
};

arrowmulti = 50;

const printhellow = () => {
    console.log("hello");
};

//////practiccce q 1

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    //console.log(count);

    return count;

}

/// practice  q 2 

const countVol = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    //console.log(count);

    return count;
}

/*
//without Arrow funtion

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
    return count;
}
// Example usage:
let inputStr = "kiraan";
countVowels(inputStr);

//with Arrow funtion 

const countVowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
    return count;
}

// Example usage:
let inputStr = "kiraan";
countVowels(inputStr);

*/


/////////////////////// for Each loop in Array

let arr = [1,2,3,4,5];

arr.forEach(function printVal(val)
{
    console.log(val);
});

//// arrow funtion

let arr1 = [1,2,3,4,5];

arr1.forEach ((val1) => {
    console.log(val1);
});

/////arrow funtion array

let arr2 =["karmala","solapur","mumbai"];

arr2.forEach((val)=>{
    console.log(val.toUpperCase());
});

/////////////////////////////////////

let arr12 =["karmala","solapur","mumbai"];

arr2.forEach((val,idx,arr12)=>{
    console.log(val.toUpperCase(),idx,arr);
});



////////////////// practice qutions

let num = [2,3,4,5,6];

num.forEach((num)=>{
    console.log(num*num);
});


////////////// some array method in Map

let num11 =[67,52,39];

let newArr = num11.map((val)=>{
    return val*2;
});

console.log(newArr);

// let calcSquare = (num) =>{
//     console.log(num*num);
// };


/////////////////////// filter array

let arrf =[1,2,3,4,5,6]

let evenArr = arrf.filter((val)=>{
    return val %2 === 0;
});

console.log(evenArr);

//////////////
let arrf1 =[1,2,3,4,5,6]

let evenArr1 = arrf.filter((val)=>{
    return val %2 !== 0;
});

console.log(evenArr1);

//////////////////////////// reduce method 

let red = [1,2,3,4,5,];
const output = red.reduce((res, curr) => {
    //return res + curr; ///// adition
    return res > curr ? prev : curr;   /////  large number
});
console.log(output);  //// 15

//////////////
//practice Qutions 1

let marks = [69,25,44,69,96,75,74];

let topper = marks.filter((val11)=>{
    return val11>90;
});
console.log(topper);

//// practice QUTION 2

let  n = prompt("enter a number : ");

let arr45 = [];

for (let i= 1; i<=n; i++){
    arr45[i-1]=i;
}

console.log(arr45);

let sum1 = arr45.reduce((res1,curr11)=>{
    return res1 + curr11;
})
console.log("sum = ",sum1);


let sum12 = arr45.reduce((res1,curr11)=>{
    return res1 * curr11;
});

console.log("factorial",sum12);

///////////////////////////





