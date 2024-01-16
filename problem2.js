/*

ফাংশন নেম দিতে হবে isJavaScriptFile ।এই ফাংশনে প্যারামিটার হিসেবে নিব একটি স্ট্রিং
(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/

function isJavaScriptFile(fileName){
     if(typeof fileName !== "string"){
          return "plz enter your string"
     }
     else if(fileName.toLocaleLowerCase().endsWith(".js") === true){
               return true;
          }
          else{
               return false;
          }
   
}
const names = isJavaScriptFile("sumon.html");
console.log(names);