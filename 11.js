

//// syncronus  //// sequnce ne print hot
console.log("kiran");
console.log("ivare");
console.log("Hivarwadi");


/// asyncronus  ///
////1
function helloo()
 {
    console.log("print hellow");
}
setTimeout(helloo,3000)
////2
setTimeout(()=>
{
    console.log("hello");
},4000);    //// timeout 4000ms = 4sec
///

//without arrow function
setTimeout(function() {
    console.log("hello");
}, 4000); // timeout 4000ms = 4sec


////
const hello = () =>{
    console.log("kiran");
}
setTimeout(hello,3000)

////

//// call back /////

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback)
{
    sumCallback(a,b);
}
calculator(1,2,sum);
//

/// callback hell ///

function getData(id,nextdata){
    setTimeout(function(){
        console.log(id);
        if(nextdata){
            nextdata();
        }
    },2000)
}

getData(12,function(){  //()=> {} for arrow function
    getData(13,function(){
        getData(15)
    });
});

/////////// promise   //////////////

let promise11 = new Promise((resolve , reject) => {
    console.log("i am promise");
    resolve("succefully");

});

/// promise and await is a big and hard topics /////

/// use of .then function use to fullfil the promise
const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am promise");
        resolve("sucessfully");
        });
}

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res)
});


//use of .catch function use to handle the rejected promises
const getPromise1 = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am promise");
        reject("canceled");
        });
}

let promise1 = getPromise1();
promise1.catch((err)=>{
    console.log("promise fulfilled",err)
});
/////////////

/// .then using asyncfunction  
function asyncfun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 1");
            resolve("sucefully");
        },4000)
    })
}
console.log("feaching data 1");
let p1 = asyncfun();
p1.then((res)=>{
    console.log("data feching",res)
});

///.catch using asyncfunction
function asyncfun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 2");
            reject("rejected");
        },4000)
    })
}
console.log("feaching data 2")
let p2 = asyncfun1();
p2.catch((err)=>{
    console.log("data feching",err)
});


//

/// .then using asyncfunction and feaching the multiple data one by one  
function asyncfun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 1");
            resolve("sucefully");
        },4000)
    })
}

function asyncfun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 2");
            resolve("succes");
        },4000)
    })
}


console.log("feaching data 1");
    let p11 = asyncfun();
p11.then((res)=>{
    console.log("data feching",res)
    console.log("feaching data 2")
    let p2 = asyncfun1();
    p2.then((res)=>{
    console.log("data feching",res)
   });
});

//Async-Await  
/* await pauses the execution of its surrounding
 async function until the promise is settled. */
 // ex -1
 function api()
 {
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("some data 1");
             resolve(200);
         },4000)
     })
 };
 async function getwetherdata()
 {
     await api();  //await use nay kel tar ecdach doni function call hotil.
     await api();
 }
 getwetherdata();

 // ex-2

 function dataid(id)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data id",id);
            resolve("sucessful");
        },4000)
    })
};
async function data()
{
    await dataid(1);
    await dataid(2);
}
data();
