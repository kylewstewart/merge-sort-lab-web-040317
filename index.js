
function findMinAndRemoveSorted(array){
  let min = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++){
    if (array[i] < min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function merge(firstArray, secondArray){
  let merged = []
  console.log(firstArray, secondArray)
  while (firstArray.length != 0 && secondArray.length != 0){
    if (firstArray[0] < secondArray[0]) {
      merged.push(firstArray.shift())
    } else {
      merged.push(secondArray.shift())
    }
  }
  return merged.concat(firstArray).concat(secondArray)
}

// function mergeSort(unsorted){
//   let mid = unsorted.length/2
//   let first = unsorted.slice(0, mid)
//   let second = unsorted.slice(mid+1)
//
//   if (unsorted.length < 2) {
//     return unsorted
//   } else {
//     merge(mergeSort(first), mergeSort(second))
//   }
// }

function mergeSort(array){
  let sorted
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    console.log(array)
    if(array.length < 2){
      return array
    } else {
    sorted =  merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
  }
