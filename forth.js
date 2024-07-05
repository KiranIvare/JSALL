

////Array////

let marks =[32,25,26,25,28];
console.log(marks);
console.log(marks.length);

let heros = ["kiran","ivare","hivaewadi"];
console.log(heros);
console.log(heros.length);

////// arr index

let score =[50,60,54,62,58];
score[0]=66;
console.log(score[0],score[3]);


let  zeros = ["ivare","Hivarwadi","karmala","solapur"];
let index=0;
for(index=0;index<zeros.length;index++)
console.log(zeros[index]);


/// for of 

for (let herossss of zeros){
    console.log(herossss);
}

let cities = ["delhi","pune","mumbai","hydrabad"];
for (let city of cities){
    console.log(city);
    console.log(city.toUpperCase());
    console.log(city.toLowerCase());
}

////// practice Qutions  1

let markss = [85,97,44,37,76,60]
let sum=0;
for(let val of markss)
{
   sum=sum + val;
}
let avg = sum/markss.length;
console.log(`avrage marks of the class = ${avg} `);


//// practice qution 2  using for of loop

let items = [250,645,300,900,50];

let i = 0;
// for(let val of items){
//     let offer = val/10;
//     items[i] = items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

///// using for loop

for (i=0;i<items.length;i++)
{
    offer=items[i]/10;
    items[i] = items[i] - offer;
}
console.log(items);

/////push method   addd

let food = ["potato",'Apple'];
food.push("angure");
console.log(food);

////pop method    deleted

let deletItem = food.pop();
console.log(food);
console.log("deteted item ",deletItem);

///// tostring

console.log(food.toString());   //// convert array to string


//// concat array

let marvel = ["thor","spiderman","ironman"];
let marvel2 = ["superman","batman"];

let her = marvel.concat(marvel2);
console.log(her);

///// unshift

let kiran = ["abc","efg","hij"];

  kiran.unshift("xyz");

  ////shift
  let value = kiran.shift();
console.log("value",value);

///// sclice method  pahije titparyant string ghene
console.log(kiran);
console.log(kiran.slice(1,2))

////Splice method 

let arr = [1,2,3,4,5];

//arr.splice(2,2,101,102);


///add element
arr.splice(2,0,101);

//// delete element 
arr.splice(3,1);

///Replace element

arr.splice(3,1,101);


///////// Practice Qutions   last

let companies = ["blomberg","Microsoft","uber","Google","ibm","network"]
companies.shift();

companies.splice(2,1,"ola");
companies.push("Amazon")
console.log(companies)





