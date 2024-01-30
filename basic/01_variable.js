// const accountId=15; //No redeclaration and no reinitialization
// console.log(accountId);
// let accountEmail="sahilchoudhary@"//No redeclaration and reinitialization possible
// var accountPassword="jaipur"//redeclaration and reinitialization possible
var x=10;
function y(){
    var x=18;
    x=20;
    console.log(x);
}
console.log(x);
y()
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
let p;
console.log(p);