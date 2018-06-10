/**
 * Created by donews on 2017/1/21.
 */
//参数与内置arguments变量
(function () {

    function sum() {
        var total=0;

        // [...arguments].reduce(function());
        for(var i=0;i<arguments.length;i++){
            total+=arguments[i];
        }
        return total;
    }

    console.assert(sum(1)===1);
    console.assert(sum(9,2,9)===20);


}());