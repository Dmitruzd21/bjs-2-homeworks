// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    };
    if (arr[i] > max) {
      max = arr[i];
    };
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}


// Задание 2
function worker(arr) {                 // насадка 1
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}

function makeWork(arrOfArr, func) {   // мясорубка
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Задание 3  
function worker2(arr) {              // насадка 2
  let arrayParams = getArrayParams(arr);
  let diff = Math.abs(arrayParams.max - arrayParams.min);
  return diff;
}
