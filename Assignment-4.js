function cubeNumber(number) {
     if(typeof number !== "number"){
          return "plz enter your number ";

     }
     else {
          const cube = (number **3);
          return cube;
     }
    
}

const number = cubeNumber (4);
// console.log(number);



// function matchFinder(string1,string2) {
//      if ( string1 ===  string2){
//           return true;
//      }
//      else{
//           return false;
//      }

// }
// const string = matchFinder("John Doe","ohn" );
// // console.log(string);



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
console.log(findAddress(object))


