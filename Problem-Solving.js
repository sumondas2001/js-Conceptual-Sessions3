/*

তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ

সংখ্যাটি integer হলে true রিটার্ন করবে। 
অন্যথায় false রিটার্ন করবে।

*/
function isInteger(number){
     if(typeof number !== "number"){
          return "plz enter your number "
     }
      if (number % 1=== 0){
          return true;
     }
     else{
          return false;
     }
         
     
}

const Integer = isInteger (2.50);
// console.log(Integer);



function cubeNumber(number){
      if( number  ){
          return number**3;
      }
}
const number = cubeNumber(2);
// console.log(number)

