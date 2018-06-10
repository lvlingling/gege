


a=99;//全局变量
function func1() {
    var funcs = [];
    console.log('!!!');
    for (let j = 0; j < 5; j++) {//let生命的变量是块的作用域，var是函数作用域
        var f=function add(x) {
            console.log("a=> "+this.a);
            return x + j;
        };//this是全局的
        // var f2=(x)=>x+j;
        var f2=(x)=>{
            console.log('!!!');
            console.log("a=> "+this.a);
            console.log("a=> "+this.a);
            return x+j;
        }//f2箭头函数没有this指针，这个this指针是外围函数的
        funcs.push(f);
    }
    //console.log(j);
    funcs.forEach(f=> {
        // console.log(f('~'));
        console.log(f(3));
    })
}
func1.call({a:3});


//eg2,闭包中的变量是被引用的，而不是光用这个变量值，引用的而是地址，更改会影响到它
function func2() {
    var i=0;
    return [ ()=>i++,()=>i];
}
let [f1,f2]=func2();
f1()
f1()
console.log(f2());
f1.mm="xxxxffff";//函数是个对象，可以创建任何属性，访问
console.log(f1.mm)


//类与模块
function Lover(name){
    this.name = name;
    // Function.prototype//Lover函数本身的原型，它是所有函数原型
    Lover.prototype.makelove=function(qinshou){// Lover.prototype是实例的原型，也就是p1，p2的原型
             console.log(qinshou.name+' fuck '+this.name);
    };
    // this.makelove=function(qinshou){//qinshou传进来lover的对象
    //     console.log(qinshou.name+' fuck '+this.name);
    // };
}
p1=new Lover('lh');
p2=new Lover('lll');
p1.makelove(p2);

var po={
    name:"god"
};
var k=Object.create(po,{
    age:{value:32}
})
console.log(k.prototype);
function max() {
    function lihui () {
        console.log("lihuixxx")
    }
    var m=arguments[0];
    for(var i=1;i<arguments.length;i++){
        if(m<arguments[i]){
            m=arguments[i];
        }
    }
    return m;
    // [...arguments].forEach((x,index,a)=>{
    //     for(var i=0;i<index;i++){
    //         if(a[i+1]>=a[i])
    //             m=a[i+1];
    //     }
    //     return m;
    // });
}
// max(1,2,3,9);
console.assert(max(1,2,3,9)===9);
console.assert(max(1,3,-9)===3);


//函数定义，函数作用域可以提前
// function functions(flag) {
//     var value ;
//     if (flag) {
//         var getValue= function getValue() { return 'a'; }
//     } else {
//         var getValue= function getValue() { return 'b'; }
//     }
//
//     return getValue();
// }
