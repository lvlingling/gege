/**
 * Created by lvlingling on 2016/12/25.
 */
// 1.*   0或多
a=/a*/;
c="caabc";
console.log(c.search(a));//0,search()返回第一个位置
//2.+   1或多
a=/a+/;
c="caabc";
console.log(c.search(a));//1
// 3.|  或者
a=/a|c/;
c="caabc";
console.log(c.search(a));//0

// 4.[a-z]
a=/[a-z]/;
c="xcaabcA";
console.log(c.match(a));//0,返回match对象[ 'x', index: 0, input: 'xcaabcA' ]
console.log(c.match(a).input);//0,返回match对象[ 'x', index: 0, input: 'xcaabcA' ]

//5.?  0或1
//检验数值
function isNumber(str) {
   var a=/^([0-9]+)([.]?)([0-9]*)$/;
    // if(str.search(a)>-1){
    //     return true;
    // }else{
    //     return false;
    // }
    return str.search(a)!==-1;
}
console.log(isNumber("a3")===false);
console.log(isNumber("3.141")===true);
console.log(isNumber("0.0003")===true);

//判断字符串小于100的整数
var a=/^([0-9]+)([.]?)([0-9]*)$/;
function less100 (str) {
    // var a=/^([0-9])([0-9]{0,1})$/;
    // var a=/^([0-9])([0-9]?)$/;
    var a=/^([0-9]){1,2}$/;
    return str.search(a)!==-1;
}
console.log(less100('100'));
console.log(less100('99'));




//四种调用方式
//（1）.构造器调用，定义类的方法(跟在new后面)
function TV(n,w){
    this.name=n;
    this.weight=w;
    this.play=function(str){
        console.log(str);
        console.log(this.name);
    }
}
var myTV = new TV('nnn',33);
myTV.play(1);

//（2）圆括号的调用，this默认指向全局（函数调用方式）
function setTitle(tt) {
    this.title=tt;
}
function printTitle() {
    console.log(this.title);
}
//setTitle("lingling");
//printTitle();
//console.log(title);
//（3）手工binding,函数才有bind方法，（4）和call调用，
//call()和（）类似，call（）第一个参数是this指针，apply第二个参数是数组["lingling"]
var p = {};
setTitle.bind(p)("mac");
printTitle.bind(p)();
// printTitle.bind(p).call();
// printTitle.bind(p).apply();
printTitle.apply(p);//call(),apply()第一个参数绑定this上
printTitle.call(p);
//console.log(title);//this指针指向了p，不指向全局了
console.log(p.title);



function listPropterty(o) {
    for(var s in o){
        console.log(s);
        console.log(o[s]);

    }
    console.log(Object.keys(o));
}
listPropterty(new Date());
















