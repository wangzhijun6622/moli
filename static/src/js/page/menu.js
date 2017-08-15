require([
	"../js/common/interface",
	"../js/common/pageCommon",
	"../js/common/util"
	],function(inter,pageCommon,util){

	 console.log("menu.js");
		 pageCommon.add(1,1)

//		 var headResult = '<div class="top-box"  style="">'+
//								'<div >'+
//									'<ul class="index_l" style="">'+
//										'<img class="logo-sm" src="../images/logo.png" style="" alt="logo">'+
//									'</ul>'+
//									'<div class="f-right r-margin10 theme-font">'+
//										'<p>让喜欢成为习惯</p>'+
//									'</div>'+
//									'<ul class="index_r">'+
//										'<li><a href="http://news.baidu.com">首页</a></li>'+
//										'<li><a href="">majicJun</a></li>'+
//										'<li><a href="">吃</a></li>'+
//										'<li><a href="">穿</a></li>'+
//										'<li><a href="">逛</a></li>'+
//										'<li><a href="">我的'+
//										 ' <div id="app">'+
//											'{{message}}'+
//										  '</div>'+
//										'</a></li>'+
//									'</ul>'+
//								'</div>'+
//							'</div>';
//		 $(".header").html(headResult);
//		 $(".header").load("../html/header.html");
//		 $.ajax({
//			 type:"GET",
//			 dataType : 'jsonp',
//			 jsonp : 'callback',
//			 url : '../html/header.html',
////			 async : false,
//			 data : '',
//			 success : function(data){
//				 console("111")
//				 var result = $(data);
//				 $(".header").html(result);
//			 }
//		 });
//		var oMenu = document.getElementById("menu");
//		var aImg = oMenu.getElementsByTagName("img");
//		var aWidth = [];
//		var i = 0;
//		//保存原宽度, 并设置当前宽度
//		for (i = 0; i < aImg.length; i++)
//		{
//			aWidth.push(aImg[i].offsetWidth);
//			aImg[i].width = parseInt(aImg[i].offsetWidth / 2);
//		}
//		//鼠标移动事件
//		document.onmousemove = function (event)
//		{
//			var event = event || window.event;
//			for (i = 0; i < aImg.length; i++)
//			{
//				var a = event.clientX - aImg[i].offsetLeft - aImg[i].offsetWidth / 2;
//				var b = event.clientY - aImg[i].offsetTop - oMenu.offsetTop - aImg[i].offsetHeight / 2;
//				var iScale = 1 - Math.sqrt(a * a + b * b) / 300;
//				if (iScale < 0.5) iScale = 0.5;
//				aImg[i].width = aWidth[i] * iScale
//			}
//		};
		var arrayFn = function(){
			 var numSection =  32-2 ;
			 var num = Math.random()*numSection + 2;
			 	 num = parseInt(num,10);
			 return n;
			 
		 } 

})