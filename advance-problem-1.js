
function canPay(arry, number){
     if(!Array.isArray(arry)){
          return "plz enter your arry"
     }else if(typeof number !== "number"){
          return "plz enter your number"
     }else {
          let sum = 0;
          for(let i = 0; i < arry.length; i++){
               const index = arry[i];
               sum +=index;

               if(number < sum){
                    return false;
               }

               else if(number >= sum){
                    return true;
               }
             
                
               
               
          }
          return sum;
     }
}
const arr = [1,2,5];
const number = 10;
const doifha =canPay(arr,number); 
console.log(doifha);



