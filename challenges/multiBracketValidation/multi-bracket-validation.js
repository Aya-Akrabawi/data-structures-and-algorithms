'use strict';

const arr = [];
function multiBracketValidation(string){

  for (let i = 0; i < string.length; i++) {
      
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      arr.push(string[i]);
    }
    if ((string[i] === ')' && arr[arr.length - 1] === '(') 
      || (string[i] === '}' && arr[arr.length - 1] === '{')
      || (string[i] === ']' && arr[arr.length - 1] === '[')) {
      arr.pop();
    } else if ((string[i] === ')' && arr[arr.length - 1] !== '(') 
      || (string[i] === '}' && arr[arr.length - 1] !== '{')
      || (string[i] === ']' && arr[arr.length - 1] !== '[')) {
      return false;
    }
  }
  if (arr.length === 0) return true;
  return false;
}

// console.log('multiBracketValidation({})',multiBracketValidation('{}'));
// console.log('multiBracketValidation({}(){})',multiBracketValidation('{}(){}'));
// console.log('multiBracketValidation(()[[Extra Characters]])',multiBracketValidation('()[[Extra Characters]]'));
// console.log('multiBracketValidation((){}[[]])',multiBracketValidation('(){}[[]]'));
// console.log('multiBracketValidation({}{Code}[Fellows](()))',multiBracketValidation('{}{Code}[Fellows](())'));

// console.log('multiBracketValidation([({}])',multiBracketValidation('[({}]'));
// console.log('multiBracketValidation((]()',multiBracketValidation('(]('));
// console.log('multiBracketValidation({(}))',multiBracketValidation('{(})'));
module.exports = multiBracketValidation;


// {}
// {}(){}
// ()[[Extra Characters]]
// (){}[[]]
// {}{Code}[Fellows](())
// [({}]
// (](
// {(})

// let stg = "[[]][po}ok]"
// let pureArray = [];


// function multiBracketValidation(input){
//   toPureArray(input);
// // let joined = pureArray.join()
//  console.log('pureArray',pureArray)
// //  console.log('joined',joined)
// //  let replaced = joined.replace(good1,'')
// //  console.log('replaced',replaced)

//  pureArray.forEach((el,index)=>{
//    if(el==='['){
//     console.log(check('[',']',index)) 
//    } else if(el==='{'){
//     console.log(check('{','}',index)) 
//    } else if(el==='('){
//     console.log(check('(',')',index)) 
//    }
//  })

// };

// function toPureArray(input){
//   let newStg = input.split("");
// for (let i = 0; i<newStg.length; i++){
// if(newStg[i]==="["){
//   pureArray.push(newStg[i])
// } else if(newStg[i]==="]"){
//   pureArray.push(newStg[i])
// }else if(newStg[i]==="{"){
//   pureArray.push(newStg[i])
// }else if(newStg[i]==="}"){
//   pureArray.push(newStg[i])
// }else if(newStg[i]==="("){
//   pureArray.push(newStg[i])
// } else if(newStg[i]==="}"){
//   pureArray.push(newStg[i])
// }
// }
// return pureArray
// }

// function check(opening, ending, index){
// for (let i = index+1; i<pureArray.length; i++){
//   console.log('index',i, pureArray[i])
//    if ( pureArray[i] === ending){
//  return console.log('llllllllllllllllllllll',i)
 
//  } 

// }
// }


// console.log(multiBracketValidation(stg))