//require 接受两个参数 第一个是数组 [] 表示依赖的模块
//第二个是回调函数 当指定的模块加载成功后,会以参数的形式传入该函数,从而在回调函数内部就可以使用这些模块
define(function(){
    var add = function(x,y){

        return x + y ;

    };
    return {

        add : add
    };

})