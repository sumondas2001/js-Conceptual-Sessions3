// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/


function printDetails(person){
     if(typeof person !== "object"){
          return "plz enter your object"
     }else{
          const name = person.name || "nai";
          const age = person.age || "nai";
          const email = person.email || "nai";
          const bow = person.bow || "nai";
          console.log(name, age, email,bow);

          return "amar"+name+'amar.'+age+"amar."+email+".amar"+bow
     }

}
const obj = {
     name: "mehedy",
     age:26,
     email:"abc@gmail.com"
 }
//  console.log(printDetails(obj));



function findAddress(obj) {
     if(typeof obj !== "object"){
          return "plz enter your object"
     }
     else{
          const street = obj.street || "__";
          const house = obj.house || "__";
          const society = obj.society || "__";

         const Output = street+","+house+","+society;
         return Output;

         const missing =+street+house+society;
         return missing;
         
     }
}

const object ={
     street:10,
     house:"15A",
     society:"Earth Perfect"          
}
// console.log(findAddress(object))

// function canPay(arry, number){
//      if(!Array.isArray(arry)){
//           return "plz enter your arry"
//      }else if(typeof number !== "number"){
//           return "plz enter your number"
//      }else {
//           let sum = 0;
//           for(let i = 0; i < arry.length; i++){
//                // const index = arry[i];
//                sum +=arry[i]
//                return sum;
               
               
//           }
//      }
// }
// const arr = [1,2 ,5,10];
// const number = 10;
// const doifha =canPay(arr,number); 
// console.log(doifha)


