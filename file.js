// fs stands for file system 
const fs = require("fs");


// Synchronous call
// fs.writeFileSync('./test.txt', "Hey World!");

// Async...
// fs.writeFile('./test.txt', "Hello there!", (err) => {});


// Sync...
// const result = fs.readFileSync("./contacts.txt", "utf-8");

// console.log(result);

// Async...
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err)
//     }
//     else{
//         console.log(result) 
//     }
// })

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", `Hey there \n`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt").isFile());

// fs.mkdirSync("my-docs");
// fs.mkdirSync("my-docs-2/a/b", {recursive: true});

// blocking and non-blocking operations in detail

// blocking request
// console.log("1");

// const result = fs.readFileSync("./contacts.txt", "utf-8");

// console.log(result);

// console.log("2");
// console.log("3");
// console.log("4");

// Non-Blocking request...
// console.log("1");

// fs.readFile("./contacts.txt", "utf-8", (err, res) => {
//     console.log(res);
// });
 
// console.log("2");
// console.log("3");
// console.log("4");

const os = require("os");

// console.log(os.cpus().length); 