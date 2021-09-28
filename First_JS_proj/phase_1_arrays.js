/*
    1. make a empty hash and set default value to 0/true
    2. Iterate through the array and set each ele as key in h
    3. return h.keys
*/

Array.prototype.myUniq = function () {
    const uniqArr = [];

    this.forEach(el => {
        if (!uniqArr.includes(el)) {
            uniqArr.push(el);
        }
    })

    return arr1;
};

// console.log([1,3,3,4,4].myUniq())
// console.log([2,2,2,2,2].myUniq())
// console.log([1,3,5,6,4].myUniq())
// console.log([3,3,4,4,4].myUniq())
// console.log([1,1,3,3,4,4].myUniq())

/*
    1. Nested loop on arr with index
    2. 
*/

Array.prototype.twoSum = function () {
    const originalArr = this;
    const pairs = [];

    originalArr.forEach((el1, i, originalArr) => {
        originalArr.forEach((el2, j, originalArr) => {
            if (originalArr[i] + originalArr[j] === 0 && j > i) {
                pairs.push([i, j]);
            };
        })
    })
    return pairs;
};

// console.log([1, 3, -1, 4, 4].twoSum())
// console.log([5, 3, 3, 4, -5].twoSum())
// console.log([1, 3, 3, 4, 4].twoSum())

/*
    given array with 3 subarrs with 3 elements
    nested loop
    transposed arr =[]
    new_row = []
    [1,2,3]  
    [1,2,3] 
    [1,2,3] 

    while i < transposed arr.length 
        (0..arr.length).each do |i|
            new_row = []
            new_row << arr[i]
        end
    


    arr1 - each ele1, with i
        arr2[i] - each ele2 with j
            if j = i
                new_row << arr1[i]

*/

// Array.prototype.transpose = function () {
//     const array = this
//     array.map((el1, i, array) => {
//         array.map((el2, j, array) => {
//             el2[i];
//         });
//     });
// };

Array.prototype.transpose = function () {
    const transposedArr = [];
    const Arr = this;
    for (let i = 0; i < Arr.length; i++) {
        // debugger
        const new_row = [];
        for (let j = 0; j < Arr.length; j++) {
            new_row.push(Arr[j][i]);
        }
        transposedArr.push(new_row);
    }
    console.log(transposedArr);
    console.log(this);
    return this;
};

arr1 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
arr2 = [[1, 2, 3], [4, 5, 7], [7, 8, 9]]

console.log(arr1.transpose());
console.log(arr2.transpose());



