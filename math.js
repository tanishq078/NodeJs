
// function add(a, b){
//     return a + b;
// }


// function sub(a, b){
//     return a - b;
// }

// module.exports = "Tanishq";


// value over write in below
// module.exports = add;
// module.exports = sub;


// to avoid the above problem
// we use object destructuring

// module.exports = {
//     add,
//     sub
// }


// another type to write

// module.exports = {
//     addFn: add,
//     subFn: sub
// }


// Another way to export the above function in NodeJs

exports.add = (a,b) => a + b

exports.sub = (a,b) => a -   b