/*
    1. make a empty hash and set default value to 0/true
    2. Iterate through the array and set each ele as key in h
    3. return h.keys
*/

Array.prototype.myUniq = function()  {
        const uniqArr = [];

        this.forEach(el => {
            if (!uniqArr.includes(el)){
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
        originalArr.forEach((el2, j, originalArr)=> {
            if (originalArr[i] + originalArr[j] === 0 && j > i) {
                pairs.push([i, j]);
            };
        })
    })
    return pairs;
};

console.log([1, 3, -1, 4, 4].twoSum())
console.log([5, 3, 3, 4, -5].twoSum())
console.log([1, 3, 3, 4, 4].twoSum())


