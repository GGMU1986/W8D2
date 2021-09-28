Array.prototype.myEach = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }

};

// ["Mary", "Brian", "Leo"].myEach((names) => {
//     names.forEach(name => console.log(name));
// })
arr1 = ["Mary", "Brian", "Leo"]

// function namesFunc(name) {
//     ;
// }

arr1.myEach((name) => { console.log(name.toUpperCase());});