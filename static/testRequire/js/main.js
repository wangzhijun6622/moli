//require 接受两个参数 第一个是数组 [] 表示依赖的模块
//第二个是回调函数 当指定的模块加载成功后,会以参数的形式传入该函数,从而在回调函数内部就可以使用这些模块
//require.config({
//
//    paths:{
//        "jquery":"jquery-1.8.3.min"
//
//    }
//
//})
require(['jquery-1.8.3.min','math'],function(jquery,math){

        console.log(math.add(1,1));

})


console.log("加载成功!");
