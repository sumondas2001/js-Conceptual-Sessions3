/*
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
*/

function findingBadData(arr){
     if(!Array.isArray(arr)){
          return "plz enter your arry"
     }else{
          let baddata = 0;
          for(let i =0 ; i <arr.length; i++){
               if(typeof arr[i] !== "number"){
                    return "plz enter your arry"
               }
               else {
                    if(arr[i] < 0){
                         baddata++;
                    }
               }
          }
          return baddata;
     }
}
const arry =[ 2, -5, -7, -13 ];
const sv = findingBadData(arry);
console.log(sv);