/**
 * Created by donews on 2017/1/21.
 */
//函数声明语句与函数定义表达式
//函数声明语句
function xxxk() {

}
//console.log(xxxk);//函数声明语句中定义了xxxk()这个变量，所以可以打印出xxxk这个值(函数)，
//var k = 99;语句做了动作
//99+3;表达式，得到一个值
//k=99+3;表达式
//判断表达式还是语句
//console.log(var c=99);

//函数定义表达式
console.log(function fib (n) {
    if(n<2) return 1;
    return fib(n-1)+fib(n-2);
}(20));//没有声明这个变量，但是可以在内部引用这个函数(语句单独存在，不在表达式里面，表达式里面只能包括表达式)

//console.log(fib);//fib没有定义