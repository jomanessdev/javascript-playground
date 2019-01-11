myArr = [ 10, 3 , 5, 6 ,2, 9];

sortThem(myArr);

function sortThem(inputArray){
  
  for(var i = 0; i< inputArray.length; i++){
    
    let firstNum = inputArray[i];
    let secondNum;
    
    if(i+1 == inputArray.length){
      break;
    }else{
      secondNum = inputArray[i+1];
    }
    
    if(firstNum > secondNum){
      swapEm(inputArray, i);
      i = -1;
    }
  }
  console.log(inputArray);
}
 
function swapEm(inputSwapArr, startingIndex){
  let highest = inputSwapArr[startingIndex];
  let lowest = inputSwapArr[startingIndex+1];
  
  inputSwapArr[startingIndex] = lowest;
  inputSwapArr[startingIndex+1] = highest;
}
