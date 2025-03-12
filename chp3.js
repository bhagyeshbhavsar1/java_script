//minimum output fuction Define the function min that takes two arguments and returns their minimum.

const min = function(a,b){

    return Math.min(a,b);
}
console.log(min(3,4));
console.log(min(13,8));



/*Recursion
We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:

Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/  


let isEven = function(N){

    if(N<0){
        return isEven(-N);
    }
    if(N==0){
        return "even";
    }
    if(N==1){
        return "odd";
    }
    return isEven(N-2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//we have added the conversion of the N in starting so when you put the negative no. like -1 it
//conveted it into positive intiger and proced for the next process as -1 converts to 1 it write odd 
// because we have given the condition if N is 1 return odd.


/*Write a function called countBs that takes a string as its only argument and 
returns a number that indicates how many uppercase B characters there are in the string.*/

function countBs(str){
    if(typeof str   === "string"){
        
        let count=0;
         for(let i=0; i<str.length; i++){
         
            if(str[i]==='B'){
             count++;
         }
    }
    return count;       
}
    else{
       
       return "invalid input, enter a string."

    }
}
let MyString = "Bhagyesh Bhavsar is not the Best coder";

console.log(countBs(MyString));


/*Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase B characters).
 Rewrite countBs to make use of this new function. */

 function countChar(str,char){
    if(typeof str==="string" && typeof char === "string"){

        let count=0;
        for(let j =0 ; j<str.length ; j++){
            if(str[j]===char){
                count++
            }
        }
        return count
    }
    else{

        return "invlaid input,enter a string"

    }
 }
 let mystring = "har har mahadev";
 console.log(countChar(mystring,"a"));