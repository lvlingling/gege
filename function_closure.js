/**
 * Created by donews on 2017/1/22.
 */

function outer() {
    var state=0;
    return function () {
        return state++;
    }//6到9形成闭包，只要7到9不销毁，state不销毁，就存在
}

var counter=outer();

console.log(counter());
console.log(counter());
console.log(counter());

//函数作用域和此法作用域变量在闭包中的区别

console.log("==========================");

function outLoopVar() {
    var funcs=[];
    for(var i=0;i<2;i++){
        funcs.push(()=>i);
    }
    return funcs;
}

outLoopVar().forEach(f=> console.log(f()));

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
function outLoopLet() {
    var funcs=[];
    for(let i=0;i<2;i++){
        funcs.push(()=>i);
    }
    return funcs;
}

outLoopLet().forEach(f=> console.log(f()));