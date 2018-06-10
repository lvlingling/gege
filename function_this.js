/**
 * Created by donews on 2017/1/21.
 */
//内置this指针与函数调用的方式
(function () {

    function Person(name,age){
        this.name=name;
        this.age=age;
    }

    //一.构造器调用方式

    var ff=new Person("person: lllkkk",22);//this绑定到新创建的ff对象上
    console.log(ff.name);


    //二.apply,call调用
    var appObj={};
    Person.apply(appObj,["applyObj",35]);//this指针指向apply第一个参数，第二个参数是数组，数组进行一一传参数
    Person.call(appObj,"applyObj",35);
    console.log(appObj);

    //Person.bind(ff);等价于这个
    //Person.bind(ff).call("lingling",33);与上面不等价，多个了调用,call可以替换成apply，区别apply第二个参数为数组
    //Person.call(ff,"lingling",33);等价于上面


    //三.函数调用
    console.log(Person("plainCall",22));//Person没有返回值，undefined
    console.log(name,age);//this指针默认绑定到全局变量上


    //四.方法调用(用对象obj的属性Person)
    var obj={Person};  //{Person}=={Person:Person}={"Person":Person}
    obj.Person("lvlingling",22);
    //Person.call(obj,"lvlingling",22)
    // obj.Person.call(obj,"lvlingling",22)
    // obj['Person'].call(obj,"lvlingling",22)
    //obj['Person']("lvlingling",22)
    console.log("method call: "+obj.name);

    var obj2={people:function (name,age) {
        this.name=name;
        this.age=age;
    }}
    obj2.people("lvlingling","222"); //obj2['people'].call(obj2,"lvlingling","222");
    obj2['people']("x lvlingling","222");
    console.log(obj2.name,obj2.age);
})();
