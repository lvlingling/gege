/**
 * Created by lvlingling on 2016/12/28.
 */
//145
//创建数组
//三种方法
//var arrayObj = new Array();
//var arrayObj = new Array(3);
//如：var arrayObj = new Array("abc",1,2,3);




//数组和对象的区别
obj={};  //哈希表,下标（键和值都存储在数据结构中）
obj[0]=32;
obj[1]=44;

arr=[32,44]; //连续存储,只存储值


//稀疏数组
arr2=[];
arr2[10]=2;
arr2[99]=1;//稀疏数组

arr3=[];
arr3[99]=undefined;
arr3.length=100;




//遍历数组
arr4=[9,11,21,9,6];
for(var i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}
for (var i in arr4){
    console.log(arr4[i]);
}
console.log("for of");
for(var v of arr4){//of,let都是es6，var可以改成let
    console.log(v);
}
console.log("for each")
arr4.forEach(function (v) {
    console.log(v);
});



//数组基本方法
//sort()
var arr5=[1,2,3];
console.log(arr5.sort());//[1,2,3];
arr5.sort(function(a,b){
    return a-b;
});
console.log(arr5);//[1,2,3];
arr5.sort(function(a,b){
    return b-a;//[3,2,1];
});
console.log(arr5);
/*
 comp(a,b)>0   a>b;
 comp(a,b)==0  a==b;
 comp(a,b)<0   a<b;
 */

//eg:sort()
var comp=function (a,b) {
    if(a.age>b.age) return 1;
    if(a.age==b.age) return 0;
    if(a.age<b.age) return -1;
};
console.log([{name:'lihui',age:30},{name:'lingling',age:22}].sort(comp));



//splice(a,b,c,d),a指定了插入或删除的起始位置,b删除的元素的个数
//c指定了需要插入到数组中的元素，并从第一个参数代表的位置开始插入
var arr6=[1,2,3,4,5,6,7,8];
console.log(arr6.splice(4));//[5,6,7,8]
console.log(arr6);//[1,2,3,4]
arr6.splice(1,2);//[2,3],a为[1,4]
arr6.splice(1,1);//[4],a为[1]
arr6.splice(0,1,[1,2])//[1]
console.log(arr6);//[[1,2]]

var arr7=[1,2,'a','b',3,4,5];
console.log(arr7.splice(2,2,[1,2],3));
console.log(arr7);


//push(),pop(),shift(),unshift()
var stack = [];
console.log(stack.push(1,2));//2
console.log(stack);//[1,2]
console.log(stack.pop());//2
console.log(stack);//[1]







//es5数组方法
//es5~forEach()
var data=[1,2,3,4,5];
var sum=0;
data.forEach(function(value){
    sum+=value;
});
console.log(sum);
data.forEach(function(v,i,a){
    a[i]=v+1;
});
console.log(sum);

/*
comp(a,b)>0   a>b;
comp(a,b)==0  a==b;
comp(a,b)<0   a<b;
*/
console.log('bx'<'ax')
a=[1,,3]//稀疏
b=[1,undefined,3]//稠密



//es5~filter()
a=['abc','a','dddx','ffff'];
console.log(a.filter(x=>x.length>1));//es6中map和filter本身不变
console.log(a);
//es5~every(),some()


//es5~reduce()
console.log([1,3].reduce((s,v)=>s*v,2))

//判断是否是数组或对象
console.log(Array.isArray([]))
console.log( [] instanceof Object);
//???
function xx () {
    for(var i=0;i<6;i++){
        function abc(n) {
            if(n<=2) return 1;
            return abc(n-1)+abc(n-2);
        }
        var j=i;
        abc(10)
    }
    abc.name="xxxxx";
    console.log('!!!!!!');
    console.log(abc.name);//name为函数的名字不能改变，为内置属性，改成namek就可以
}
xx ();
//eg
a=[2,3,9,-1]
a.sort(function(a,b){
    return b-a;
});
console.log(a.map(function(x){
    return x;
}));
console.log(a.map(function(x){
    return x*x;
}));
console.log(a.filter(function () {
    return true;
}));//map,
console.log(a.reduce(function(x,y){
    return x+y;
},0));
console.log([...a]);//es6，将a展开
console.log(Array.isArray(a));
console.log(a instanceof Array);//在不同浏览器下可能是别的窗口传入，不成立


//类数组
function func() {
    // for(var i=0;i<arguments.length;i++){
    //     console.log(arguments[i]);
    // }
    // for(var i in arguments){
    //     console.log(arguments[i]);
    // }
    // for(var v of arguments){
    //     console.log(v);
    // }
    [...arguments].forEach((x,index,a)=>{
        console.log(x,index,a);
    });//可以将类数组变成真正数组，运用数组的方法
    // arguments.map(x=>x);//arguments类数组，没有数组的方法，只有length和下标的方法
    // Array.prototype.forEach.call(arguments,x=>{
    //     console.log(x);// 类数组可以用Array.prototype访问数组方法，可以用call把this指针绑定到arguments上去
    // })
     Array.prototype.map.call(arguments,
         function(x){
             console.log(x.toUpperCase());
         }
    )
        // function(x){
        //     console.log(x.toUpperCase());
        // }

}
func('lingling','love','lihui');
console.log(a.unshift(1));
console.log(a);


//找出数组 arr 中重复出现过的元素 ????
function duplicates(arr) {
    // for(var i=0;i<arr.length;i++){
    //     for(var j=i+1;j<arr.length;j++){
    //         if(arr[i]==arr[j]){
    //             console.log('~');
    //             console.log(arr[i]);
    //             break;
    //             // return arr[i];
    //         }
    //     }
    // }
    // return newarr;
    var counts={};
    for(var v of arr){
        let c=counts[v]||0;
        counts[v]=c+1;
    }
    console.log(counts);
    for(var index in counts){
        if(counts[index]>1){
            console.log("~"+index);
        }
    }
}
duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])

//在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
    var newarray=new Array();
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            newarray.push(i);
        }

    }
    return newarray;
}
console.log(findAllOccurrences([1,3,2,3],3));
