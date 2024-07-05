
/// classes and objects    /////


//object//
// object cya aat made funtion define karne   /////
const student = {
   fullName: "KiranIvare",
   marks:94.4,
   printMarks: function(){
    console.log("marks",this.marks);  ////this means student.marks()
   }, 
};

const employee = {
    calcTax1(){                           //// first method //
        console.log("tax rate is 10%");
    },
    calcTax2 : function () {             ////// second method //
        console.log("tax rate is 10%");
    },
};

const karanarjun = {
    salary:50000,
};

////// class  //////

class Toyotacar{

    constructor(brand, milege){              //// constractor
        console.log("create a new objects");
        this.brand = brand;
        this.milege = milege;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
    
}

let fortuner = new Toyotacar("kiran", 10);
console.log(fortuner);
var obj = new Toyotacar("ivare");
console.log(obj);


/// inheritance 1 //
class parent {
    hello(){
        console.log("hello");
    }
}

class child extends parent{}
    let obj1 = new child();

    /// inheritance 2 ///

    class person{
       eat(){
        console.log("i am a ettting");
       }
       sleep(){
        console.log("i am sliping")
       }
    }
    class Engineer extends person{
        work(){
            console.log("solve the problem")
        }
      
    }
    let obj = new Engineer();
    console.log(obj.eat())
    console.log(obj.sleep())
    

    //// super keyward ////

    class person {
        constructor(name){
            this.species = "home sapiens";
            this.name = name; 

        }
        eat(){
            console.log("eat");
        }
    }
    class Engineer extends person{
        constructor(name){
            super(name);         ////// to invoke class constructor
        }
        work(){
            console.assert.log("solve probleam , build something");
        }
    }

    let engobj = new Engineer("kiran");

    /////   Practice Qutions  1 //////

    let DATA = "secrate information";

    class User {
        constructor(name,email)
        {
            this.name =name;
            this.email =email;
        }
        viewData()
        {
            console.log("data =",DATA);
        }
    }

    let student1 =  new User ("kiran","kiranivare@gmail");
    let student2 = new User ("Ivare","ivare@gmail.com");

    console.log(student1);
    console.log(student2);
    student1.viewData();
    student2.viewData();

    ///// Pracice Qutions 2 ////

    let DATA1 = "secrate information of data";

    class User1 {
        constructor(name,email)
        {
            this.name =name;
            this.email =email;
        }
        viewData()
        {
            console.log("data =",DATA1);
        }
    }

    class Admin extends User{
        constructor(name,email){
            super(name,email);
        }
        editData(){
            DATA1 = "some new value";
        }
    }

    let student11 =  new User ("kiran","kiranivare@gmail");
    let student12 = new User ("Ivare","ivare@gmail.com");


    ///// try catch method /////

    let a = 5;
    let b = 10;
    console.log("a = ",a);
    console.log("b = ",b);
    console.log("a+b = ",a+b);

    try{
        console.log("a+b = ",a+c);  /// error  jeva vatel ekadya line made error yeel teva te try cache made lihava manje other rahilele code run hoto....
    }
    catch(err){
        console.log(err);
    }

    console.log("a = ",a);
    console.log("b = ",b);
    console.log("a+b = ",a+b);
    console.log("a = ",a);
    console.log("b = ",b);
    console.log("a+b = ",a+b);

    

    // object cya aat made funtion define karne   /////

   