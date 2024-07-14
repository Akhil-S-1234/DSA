// // Merge Sort
// function mergeSort(arr) {
//     if (arr.length < 2) return arr;
  
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
  
//     return merge(left, right);
//   }
  
//   function merge(left, right) {
//     let sorted = [];
//     while (left.length && right.length) {
//       if (left[0] <= right[0]) {
//         sorted.push(left.shift());
//       } else {
//         sorted.push(right.shift());
//       }
//     }
//     return sorted.concat(left).concat(right);
//   }
  
//   // Selection Sort
//   function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//       }
//     }
//     return arr;
//   }
  
  // Quick Sort
  function quickSort(arr) {
    if (arr.length < 2) return arr;
  
    const pivot = arr[0];
    const left = arr.filter((item) => item < pivot);
    const right = arr.filter((item) => item >= pivot);
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Bubble Sort
//   function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }
  
  // Insertion Sort
//   function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let currentElement = arr[i];
//       let j = i - 1;
//       while (j >= 0 && arr[j] > currentElement) {
//         arr[j + 1] = arr[j];
//         j--;
//       }
//       arr[j + 1] = currentElement;
//     }
//     return arr;
//   }
  
  // Example usage
  const array = [7, 2, 1, 6, 3, 5, 8, 4];
//   console.log("Merge Sort:", mergeSort(array));
//   console.log("Selection Sort:", selectionSort(array));
  console.log("Quick Sort:", quickSort(array));
//   console.log("Bubble Sort:", bubbleSort(array));
//   console.log("Insertion Sort:", insertionSort(array));
  