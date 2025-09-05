function firstElementToRepeatKTimes(arr, k) {
  let count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] === k) return num;
  }

  return -1;
}


console.log(firstElementToRepeatKTimes([3, 1, 4, 4, 5, 2, 6, 1, 4], k = 2)); 

