process.argv.forEach((index,val) => {
   console.log(`${index}: ${val}`); 
});

//console.log("PROCESS: ",process);
// console.log('titulo del proceso',process.title);
// console.log('so', process.platform);
// console.log('version node',process.version);

// const name = require('readline'). createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// name.question("cual es su nombre", name =>{
//     console.log(`Bienvenido ${name}`)
// })
const {sum,colors} = require("./functions.js");

// declaracion de variables, var let const
const result = sum(5,7);
console.log("El resultado es: ", result);

colors.forEach((color) => {
    console.count(color);
});