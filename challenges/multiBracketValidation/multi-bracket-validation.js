'use strict';

let stg = "[[]][po}ok]"
let pureArray = [];


function multiBracketValidation(input){
  toPureArray(input);
// let joined = pureArray.join()
 console.log('pureArray',pureArray)
//  console.log('joined',joined)
//  let replaced = joined.replace(good1,'')
//  console.log('replaced',replaced)

 pureArray.forEach((el,index)=>{
   if(el==='['){
    console.log(check('[',']',index)) 
   } else if(el==='{'){
    console.log(check('{','}',index)) 
   } else if(el==='('){
    console.log(check('(',')',index)) 
   }
 })

};

function toPureArray(input){
  let newStg = input.split("");
for (let i = 0; i<newStg.length; i++){
if(newStg[i]==="["){
  pureArray.push(newStg[i])
} else if(newStg[i]==="]"){
  pureArray.push(newStg[i])
}else if(newStg[i]==="{"){
  pureArray.push(newStg[i])
}else if(newStg[i]==="}"){
  pureArray.push(newStg[i])
}else if(newStg[i]==="("){
  pureArray.push(newStg[i])
} else if(newStg[i]==="}"){
  pureArray.push(newStg[i])
}
}
return pureArray
}

function check(opening, ending, index){
for (let i = index+1; i<pureArray.length; i++){
  console.log('index',i, pureArray[i])
   if ( pureArray[i] === ending){
 return console.log('llllllllllllllllllllll',i)
 
 } 

}
}


console.log(multiBracketValidation(stg))