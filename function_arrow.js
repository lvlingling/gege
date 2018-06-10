/**
 * Created by donews on 2017/1/21.
 */
(function () {

    function sum() {
        var print = ()=> {//没有参数的时候要这样写
            console.log([...arguments].join(","));
            console.log(this);
        }
        print();
    }

    sum.bind({name: 'lingling'}).call(1, 2, 3, 4);//=>ES6,没有自己this和arguments，但可以用外部函数的this和arguments
    sum.bind({name: 'lingling'})(1, 2, 3, 4);//上面等价这个


}())