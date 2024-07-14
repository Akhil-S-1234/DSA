function arraySum(arr, n) {
   
    if (n === 0) {
      return 0;
    }
    return arraySum(arr, n - 1) + arr[n - 1];
  }
  
  const arr = [1, 2, 3, 4, 5];
  console.log(arraySum(arr, arr.length)); 