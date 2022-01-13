function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length > arr2.length || arr1.length < arr2.length) {
    return false;
  } else {
    result = arr1.every ((currentValuefromArr1, index) => currentValuefromArr1 === arr2[index]);
    return result;
  }
}

function advancedFilter(arr) {
  let resultArr= arr
  .filter((item) => item > 0)
  .filter ((item) => item % 3 === 0)
  .map ((item) => item * 10);
  return resultArr;
}
