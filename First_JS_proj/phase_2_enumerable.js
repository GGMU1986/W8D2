Array.prototype.myEach = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }

};

// ["Mary", "Brian", "Leo"].myEach((names) => {
//     names.forEach(name => console.log(name));
// })
arr1 = ["Mary", "Brian", "Leo"]
arr2 = ["Billy", "Joe", "Tiff"]

// function namesFunc(name) {
//     ;
// }

// arr1.myEach((name) => { console.log(name.toUpperCase());});

Array.prototype.myMap = function (callback) {
    const newArr = [];
    
    this.myEach(el => newArr.push(callback(el)));

    return newArr;
} 

console.log(arr2.myMap(name => name.toUpperCase()))