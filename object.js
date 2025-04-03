const confidential = {

    name: "bhagyesh",
    age: 17,
    occupation: "unemployed",
    relation_status(){
        console.log("relationship kind of thing doesn't exsit in "+ this.name +" life");
    },
};

console.log(confidential.name);
console.log(confidential.age);
console.log(confidential.occupation);
confidential.relation_status();

const confidential2 = {

    name: "aryan",
    age: 19,
    occupation: "employed",
    relation_status(){
        console.log("all girls die on "+ this.name +", he is a palyboy");
    },
};

console.log(confidential2.name);
console.log(confidential2.age);
console.log(confidential2.occupation);
confidential2.relation_status();


/*

object has property(variable or keyword) and methods (functions) . It is basically collection of propetys n methods.
use const key word if you don't want to change the properties of obj
use let if u want to make change 
if u want to use the object propeties inside an object method you can use this.______(property), also you cannot use this with arrow fuction

see how to output the method and object 
*/



//constructor 



function Info(name, age, occupation, nickname){

    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.nickname = nickname;
    this.greet = function(){
        console.log("hello pirate king "+this.name);
    };
    this.nick = function nn(){
        console.log(this.name+" nickname is "+this.nickname);
    };
};

const info1 = new Info("bhagyesh", 17, "unemployed", "lambu");

console.log(info1.name)
console.log(info1.age)
console.log(info1.occupation)
info1.greet();
info1.nick();

const info2 = new Info("suraj", 19, "unemployed", "chotu");

console.log(info2.name)
console.log("the age is "+info2.age)
console.log("the occupation is "+info2.occupation)
info2.greet();
info2.nick();

const info3 = new Info("aryan", 19, "unemployed", "playboy");

console.log(info3.name)
console.log(info3.age)
console.log(info3.occupation)
info3.greet();
info3.nick();

const info4 = new Info("vishal", 19, "unemployed", "angarazi");

console.log(info4.name)
console.log(info4.age)
console.log(info4.occupation)
info4.greet();
info4.nick();

//the are use for code reusability
//the keyword new is used to creat an object 

//classes

class Product {
    constructor(name, price1, price2){
        this.name = name;
        this.price1 = price1;
        this.price2 = price2;
    };
    calculate(){
        let total = this.price1 + this.price2;
        return total;
    }
}

const sp1 = new Product("shirts", 250, 300 )
const sp2 = new Product("pants", 650, 700 )

console.log("the price of the boughted "+sp1.name+ " is "+ sp1.price1 + " and "+ sp1.price2);

var cal = sp1.calculate();
console.log(cal);

console.log("the price of the boughted "+ sp2.name + " is "+ sp2.price1 + " and "+ sp2.price2);

var cal = sp2.calculate();
console.log(cal);


//static in classes 
// they are use to use anything which belongs in the class and not in the object that is created in the class

class Math{
    static function(num){
        return num +5;
    };
    constructor(name , age ){
        this.name = name ; 
        this.age = age ;
    }
};

const inf1 = new Math("bhagyesh", 17);
const inf2 = new Math("boa hancock", 25);

console.log(inf1.name+ " there age is "+ inf1.age);
console.log(inf2.name+ " there age is "+ inf2.age);

console.log(Math.function(10));


//inheritance 

class Animal {
   

    alive(){  

        console.log ("the "+this.name+ " is alive and not hunted ");
    };

    dead(){

        console.log("the "+this.name+ " is not alive and  hunted ");

    };
    
};

class Rabbit extends Animal{
    name = "Rabbit";
}
class Tiger extends Animal{
    name = "tiger";
}
class Lion  extends Animal{
    name = "lion";
}

const ani1 = new Rabbit();
const ani2 = new Tiger();
const ani3 = new Lion();

console.log(ani1.alive())