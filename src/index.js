

const bubbleSort = (intArray) => {
    for(let lastUnsortedIndex = intArray.length -1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
        for(let i = 0; i < lastUnsortedIndex; i++){
            if(intArray[i] > intArray[i +1]) {
                swap(intArray, i, i+1);
            }
        }

    }
    return intArray;
}
 const swap = (array,  i,  j) =>{
    if(i== j){
        return;
    }
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
   
const intArray = [80, 95, -90, 81, 39, 69];
bubbleSort(intArray);
console.log(intArray);