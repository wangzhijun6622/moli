0616 :
	仿照苹果导航问题 position定位理解不透彻 现在效果是鼠标在屏幕上方移动时图标放大缩小 因为body设置了 position:relative
	需要在不取消body定位情况下 鼠标移动位置正常
	
	要用心
	
		1.用特别的字体 svg 转font
		2.底部菜单 
		3.时钟插件
		4.ps作图
		5.vue.js 前端框架
		6.完美解决工作的前提下
		7.页面集成 :  比如 header.html footer.html 都集合到index.html 每个页面都需要header和footer 但是代码不可能重复写
			看AngularJS中的$http服务,可以取htm中的数据放到$scope变量中展示在页面, 页面通用合成貌似也可以这样
			eg:
				<h1>${{myWelcome}}</h1>
				
				var app=angular.module('myApp',[]);
				app.controller('myCtrl',function($scope,$http){
					$http.get('welcome.htm').then(function(response){
						$scope.myWelcome = response.data;
					})
				})
		8.md 文档文档生成
		9.html5 
		10.分页 ***
		11.系统学习html+css布局
		12.form表单 ajax提交 上传文件 上传图片预览 (首都在线个人身份证信息)
		13.表单验证插件 validate.js
			Validate.js是一个轻量级的JavaScript表单验证类库，它不依赖于其它任何JavaScript框架，经GZIP压缩后仅有1KB大小。它所提供的验           证类型有：是否为空、数字、Email地址、判断输入值是否在某一范围内等，此外你也可以自定义验证规则，它也支持在一个输入框中使用多种验证规则。验证规则的提示信息是默认设置在JS文件中的，它也提供了函数让你可以自定义提示信息。
		14.添加统计图表 echart
		15.滑动验证 http://zaole.net/
		16.实用的课程 http://www.fgm.cc/learn/
		17.SASS SCSS
		18.日期 当前日期 一个月的日期 一周的日期 echart图表X轴日期显示
			//当前日期的前一周日期
	    	var myDate = new Date() //获取今天日期
	    		,dateTemp
	    		,dateArray = []
	    		,flag = 1;
	    	myDate.setDate(myDate.getDate()-7);
	    	for(var i=0;i<7;i++){
	    		dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
	    		dateArray.push(dateTemp);
	    		myDate.setDate(myDate.getDate()+flag)
	    	}
	    	
	    	
0809 : button 按钮触发时刷新页面 css选择器优先级

		给button按钮添加 type="button" 或者 用<input type="button" value="按钮"/>
		
	  

0727 : 判断某obj在不在数组内

		var arr = ['00','22','142'];
		// jQuery.inArray("00",arr)
		
		var inArr = function (arr, obj){
		       var i = arr.length;
		       while(i--){
		           if(arr[i]==obj){
		                  
		                   return  true;
		           }     
		
		       }
		       return false;
		};
		var val = inArr(arr,"10");
		alert(val);


0724 : 验证码demo

	 <div class="form-group form-view">
        <label class="col-md-3 control-label">短信验证码</label>
        <div class="col-md-9 pl0">
        	<div class="getCodeBe col-md-2 pl0">
            	<button  href="javascript:;" class="btn_getCodeBe btn-primary">获取验证码</button>
        	</div>
        	<div class="getCodeAf col-md-5 pl0 hide">
        		<input id="pay_password" class="mr10" type="password" placeholder="请输入验证码">
        		<button  href="javascript:;" class="btn_getCodeAf btn-primary">重新获取</button><br>
        		<sapn class="voiceCode hide">收不到短信？试试<a herf="javascript:;" class="voicecode_a">语音验证码</a></span>
        	</div>
        </div>
    </div>
	
	<script>
	
		 //初始化发送验证码
	    var _initGetCode = function(){
	    	
	    	$(".btn_getCodeBe").on('click',function(){
	    		$('.getCodeBe').addClass("hide"); 
	    		$('.getCodeAf').removeClass("hide"); 
	    		_timeOver();
	    	})
	    	$(".btn_getCodeAf").on('click',function(){
	    		$('.getCodeBe').addClass("hide"); 
	    		$('.getCodeAf').removeClass("hide"); 
	    		$('.voiceCode').removeClass("hide"); 
	    		_timeOver();
	    	})
	    	//倒计时
	    	var _timeOver = function(item){
	    	   var validCode=true;
	           var time=60;
	           var code= $(".btn_getCodeAf");
	           if (validCode) {
	               validCode=false;
	               code.attr("disabled","disabled");
	           var t=setInterval(function  () {
		               time--;
		               code.html(time+"秒");
		               if (time==0) {
		                   clearInterval(t);
		               code.html("重新获取");
		                   validCode=true;
		                   code.removeAttr("disabled","disabled");
		               }
		           },1000)
	           }
	    	}
	    	
	    }
	
	</script>

	
0704 : 公司代码用的freemarker宏定义通用模板 然后在每个页面调用宏定义的模板 不得不说 真是很棒 但是我的项目不想用freemarker 想用一些别的

			
0703 : 静态HTML文件从外部调入HTML模板(如头部页尾这些公共部分) 
		
		1.Ajax动态拉取
		
			$().ready(function(){
				$(".top").load("topic-top.html");
				$(".footer").load("topic-footer.html");
			})	
			$().ready(function(){
				$.ajax(function(){
					url:url,//这里是静态页的地址
					type:"GET",
					success : function(data){
						var result = $(data).find("另一个页面中指定的一部分");
						$("本页面的ele").html(result);
					}
				})
			})
			
			该方法报错 
			 jquery-1.8.3.min.js:2 XMLHttpRequest cannot load  
	        file:///F:/personalWorkspace/moli/static/src/html/header.html. Cross origin requests are only supported for
	        protocol schemes: http, data, chrome, chrome-extension, https.
			解决方法 : http://blog.csdn.net/maomengmeng/article/details/48469175
			
			这个是JavaScript的跨域问题,它说明的是请求发起的域名不被服务器认可
			
			       解决这个问题的办法可以在服务端的response上添加Access-Control-Origin= '*'  这个不会
			
			   chrome浏览器解决办法  
                 	给chrome添加启动参数 --allow-file-access-from-files    
			  		加完启动参数果然好用了 可是用户不会加这个启动参数的怎么办 这个方法自己用可取 给用户用
				  	不可取  
			      跨域的安全限制都是指浏览器端来说的,服务器端是不存在跨域安全限制的 所以通过本机服务器端 通过类似的httpclient方式完成跨域访问
			  
			
			
		2.服务器端渲染：也就是后端的模板引擎
		
		3.客户端渲染：这个最常见的就是组件化，比如说angular中的指令，react中的组件，这个时候操作的是dom，动态插入或移除。
		
		4. 
			(1)把header和footer 剥离成单独的文件
			(2)在需要引入页面的头部和尾部分别写一个空的div标签,作为header和footer的预留位置
			(3)新建js文件,封装一个ajax方法,URL分别指向第一步剥离出来的html文件,并将返回的内容用innerHTML分别填充进第二步的预留位置中
			(4)在相应页面引入该js文件
		5.
		
		
	**** 来自博客 http://blog.csdn.net/sjian123/article/details/40682563	
				http://kb.cnblogs.com/page/100276/个人觉得总结的很到位  要有纵观全局的思想 还要对每个细节都了如指掌
	
	 重构，即时重构，就以现在既有的这些代码，其实我已经很早就放下心中的目标：一个完美代码构成的网站，我需要他们每个人都明白，怎么样能让自己更加高效准确的工作。
	　　抽象
	　　对于前端制作，提抽象，可能有些过分，然而我这么多年来的经验告诉自己，只有剥离了表面现象，才能洞察需求的实际。
	　　我就不谈那些有的没有的空把式了，对于页面制作和特效定制，一个最行之有效的抽象方式就是：不要急于动手实现，而是多看设计图，找出：
	　　1、排除设计元素差异（颜色、icon），找出页面结构之间的共同特性，其中需要着重注意以下几个特点：
	　　* PSD是怎么做辅助线的，PSD辅助线是帮助你理解设计意图的最佳切入点，有些设计会认真的做栅格辅助线，这种PSD基本上一上手，HTML要怎么写，已经很明确。
	　　*实际内容外宽度 <-> 内部常见布局分布（左右比例，布局模式是左中右，还是上下通栏）
	　　*正文内容默认字体，h1 - h6的字体
	　　*全局a标签默认样式，字体，颜色，hover style等
	　　*form元素的样式风格
	　　2、排除设计细节的差异（文字大小、margin、padding、height、line-height等），找出可被重用的模块（Box）模型，而这种模型，往往是以一个如下基础模型为基础的：
	　　这种模型从功能上区分，往往有以下几种：
	　　*列表块，列表头为标题块，列表为内容块
	　　*正文块，正文标题为标题块，正文为内容块
	　　*列表块还可以细分，列表内容中每一个：内容标题为标题块，描述内容为内容块（摘要等）
	　　这种模型，可以通过以下的特征来做出区分：
	　　*所在的页面，比如用于首页每个栏目的最新内容的列表，还是某个栏目首页的内容列表等 
	　　*出现在页面的位置，比如Ajax弹出层，DropDown Menu，侧边栏，正文栏等 
	　　*用于什么用途、表现侧重点是什么，比如博客列表页，会提供内容摘要，便于用户选择阅读，而门户型网站内容列表，会仅仅显示标题，因为信息量大，相册的列表页，总是会做得更加sexy，便于能吸引用户的眼球等。 
	　　*和页面其他部位的关联，这个需要因应各个的设计的不同，就不具体举例了。 
	　　3、排除实现的复杂度，找出特效展现的共同特性，并尽可能的想象其实现的一些细节。这部分工作是尤其重要的，因为他决定了一个页面的工作重点所在，通过对这部分重点的细节想象，你会发现如下问题：
	　　*现在有什么，还缺什么？ 
	　　*合理程度，这是用户体验基础，不合理的体验，是不会被认可使用的 
	　　*用户如何操作的，页面的元素如何变化，既能做到惊叹，而又在用户的可理解可被认知范围内，而后最大程度的缓冲系统与用户之间的惊诧点 
	　　*合理性，合理性，合理性 
	　　当你确信，在找到上述3个问题的答案后，并且做出足够的思考与预估后，我们可以开始动手制作了。
	　　什么优先？什么其次？
	　　优先要做的，永远都是通用性、共用性方面的东西，他会伴随在你整个制作过程中。当然，大多数公司，这种通用性存在共识，基础的CSS、基础的JS Framework。然而，对于项目和任务本身来说，你需要做更多这个项目自身的共用性的工作。其实说白了，就是上面的三个问题。
	　　1、问题一所对应的
	　　*body 字体，颜色，背景色，背景图，a标签的通用样式
	　　*页面布局模式，常用宽度定义等
	　　*h1 - h6的样式控制
	　　*input、select样式
	　　2、问题二所对应的
	　　*制作多个和设计元素、设计细节无关的通用性的box模型（甚至不包括宽度的细节），仅仅描述一个模型的骨架性特征。
	　　3、问题三对应的
	　　*为需要实现特效的部位做足够的兼容性准备。 
	　　问题1，往往不存在太多的问题，可是大家看看自己写过的CSS，有多少句在页面里定义了字体、字体大小、颜色的，这些部分的代码也都是可以被再次抽象，而再减少对设计细节进行描述的。
	　　问题2，是从根本上提高CSS编码质量的一条解决之道。初步了解CSS特性的人，往往会患上重度描述的症状，他们寄望于通过编写大量、甚至是成瘾性的定义样式特性，为求实现设计。确实，这种Hash结构让我们了解到了描述的快感。然而，正式因为这种重度描述，令CSS文件的修改，成为一个令人头疼的所在，密密麻麻的样式声明，不断重复又重复的特性描述，整个样式被定义的面目全非。
	　　局部特征描述法，是一个很好的治疗的模式，通过对仅有的若干个特征进行描述，而后进行组合使用，能让我们的HTML和CSS获得解放（代码量），同时带来更多的灵活性（我不再需要对权重过度紧张等）。
	　　比如，一个box，相关的box_title，box_content，仅仅描述其结构（如内部关联程度，如padding，margin等），宽度使用相关的样式，如具体的w500（width: 500px），或其使用用途的特征描述，如news_box（定义了具体的某几个样式）。于是我们会得到这样的HTML结构：
	01 <div class="box news_box w500 fl">
	02 <div class="box_title">
	03 <a href="#">新闻Box</a>
	04 </div>
	05 <div class="box_content">
	06 <ul class="news_list">
	07 <li><a href="#">新闻标题1</a></li>
	08 <li><a href="#">新闻标题2</a></li>
	09 <li><a href="#">新闻标题3</a></li>
	10 </ul>
	11 </div>
	12 </div>
	很显然，对于一个news_box，我们会有很具体的要求：
	1 .news_box .box_title { font-size: 16px; font-weight: bold; }
	2 .news_box .box_content { padding: 5px; }
	3 .news_list li { height: 20px; line-height: 20px; }
	4 .news_list a { padding-left: 10px; background: url(....) no-repeat top left; }
	　　这种定义方式，不会破坏box、box_title、box_content相关的结构性样式特质，而通过基于news_box再次写入到box_title和box_content的样式，可以基于原来的样式的基础上，进行重用，对于专属news_box的样式，我们可以在这里重写。
	　　而后，也许我们还有pic_box，还有blog_box，还有很多很多，我们都不需要再对box的结构进行调整，而仅仅只要对每个box的本身的特征进行局部描述。
	　　这已经有点类型面向对象开发的方式，但是我不同意把一个标签的多个class认为是一次多重继承，他顶多只能算是一种混入（Mix in），比如Scala中的trait。
	　　局部描述还有更多实际使用中的案例，并且，他的技巧和好处远不止于此，这里就不再累赘的进行描述了。
	　　问题3，其实要强调的重点，是为开发JS特效预留更加宽松和自由的切入接口。JS特效的问题，会在另外的一篇日志去讲，这里就不再做过多的描述了。
	　　现状
	　　重构并不是要搞他个刀光剑影、暗无天日，而在于重新树立一些正确的观念苗头。我并不预想着，事实上你也不可能期待，这样一次重构，就能把每件事情做的真的和想象中那样完美无缺。
	　　预料之外的，是人对于工作的激情和热诚。这些是无法从言谈中获取得到的，而对于写代码的人来说，也许代码最能说明问题。
		
		
0628 : git 
		1.cvs svn 集中式的版本控制系统 速度慢 而且需要联网才能用
			集中式版本控制系统 ,版本库是集中存放在中央服务器的,而工作的时候用的是自己的电脑,所以要先从中央服务器取得最新的版本,然后开始干活,活干完了再把自活推    送给中央服务器,中央服务器好比是一个图书馆,你要改一本书,要先借出来,改完了再还回去.
			最大的缺点是 : 需要联网才能工作,如果局域网内还好,带宽够大,速度够快,但如果在互联网上,遇到网速慢的 可能提交一个10M的文件需要5分钟
			2.git 是 分布式版本控制系统
			分布式版本控制系统 没有"中央服务器",每个人的电脑上都是一个完整的版本库,某一个人的电脑坏了不要紧,随便从其他人那里复制一个就可以,而集中 
			3. 	首先安装git
			4.   git init 初始化一个Git仓库
			5.   git add <file>  可以反复多次使用,添加多个文件
			6.   git commit     git commit -m "append GPL"  //加提交注释
			时光穿梭
			7.  git status   在git add 之后 git commit 之前执行 查看仓库的当前状态  
			8.  git diff <文件名>   git add 前执行 可以 查看具体修改的内容 
			版本回退
			9.  git log 显示从最近到最远的提交日志 如果嫌输出的内容太多,眼花缭乱的 可以试试  git log -pretty=oneline  
			你看到的一大串类似3628164...882e1e0的是commit id（版本号）
			10.  时光穿梭机 首先 必须知道当前版本是哪个版本,在Git中用HEAD表示当前版本,也就是最新的提交 上一个版本就是HEAD^  上上一个版本是HEAD^^ 上100 个版本是HEAD~100   
			11.git reset --hard HEAD^ 或者 reset --hard <commit id>回到相应的版本
			12.cat <文件名> 显示文件内容
			13.git 		 
0622 : 上传问题  
		
0606 : a标签属性 target="_blank" 在新的页签打开
       position :    要某些元素跑出来，悬浮在=-网页上面，而且需要给它指定一个位置

		 absolute 绝对定位  生成绝对定位的元素,相对于static定位以外的第一个父元素进行定位

				    1.元素脱离文档结构 其他元素的位置会重新排列 产生破坏性导致元素坍塌
				    2.包裹性 之前元素撑满整个页面 absolute 会让宽度刚好是内容的宽度
				    3.跟随性 虽然脱离了文档结构 但是位置并没有变化 
				    4.absolute 元素会悬浮在页面上方 遮挡住下方的页面内容

		 relative 相对定位  生成相对定位的元素 相对于正常位置进行定位 
					
		 
				    1.相对于自身位置的变化 不影响其他元素的位置 大小变化
				    2.产生一个新的位置的上下文
	
0604 ：人须在事上磨。--曾国藩
0603 : 不知道是好事还是坏事 对感情的事 很难让自己将就 有过要不就凑合吧 反正家里也着急 迟早都要嫁
       可惜没办法让自己委屈自己的感情 很难笑着跟自己不喜欢的人生活
       command + T  浏览器打开新的窗口
       command + R  刷新
       shift + command + R 强制刷新浏览器
       option + ↑ 选中当前词
       option + ↑↑ 选中当前行
       option + ↑↑↑ 全选  相当于command + A



0531 : git pull 和 push 总是报错 在公司电脑上push不到远端 已经gitpull 后 $ git push 报错
            我感觉是因为有一次提交时候把Python的idea配置文件提交了 在远端删除后依然没有解决问题
            报错如下
            To https://github.com/wangzhijun6622/moli.git
             ! [rejected]        master -> master (non-fast-forward)
            error: failed to push some refs to 'https://github.com/wangzhijun6622/moli.git'
            hint: Updates were rejected because the tip of your current branch is behind
            hint: its remote counterpart. Integrate the remote changes (e.g.
            hint: 'git pull ...') before pushing again.
            hint: See the 'Note about fast-forwards' in 'git push --help' for details.

            查看一些已经commit 还未push的内容
            $ Git log master ^origin/master





0525 : 经过我的拖延和不懈坚持 终于找到解决require报错的方法,
        因为加载问题 在con.import.js 中不需要引入 写有define定义函数的文件, define定义因为的文件会在require时加载 
        这就是require的真正作用 异步加载引入的文件 防止加载文件过多网页失去响应,并且便于管理模块之间的依赖性 
        分模块实现公用性的文件不用重复写

0524 :require.js demo使用没问题 主要是路径不对, 加载延迟之类的可能性 导致有断点时报错但是可以console出内容 无断点时只报错无console
        需要认真研究项目代码实现
        
0523 : ued.import.js 逻辑大概明了

0522 : 手写代码 错误率太高 大小写不一直 单词拼写不对等等  要细心

0518 :sublime 配置markdowm插件
	1.安装Package Control
	
0517:练习常用的git命令

0516: git push moli 前端代码文件夹结构

201705


{
  "default_autolink": true,
  "default_bracket": "round",
  "default_depth": 0
}

























不要相信自己的记忆力
前天我觉得还很清晰的东西,今天已经完全不记得了.
天啦噜........
所以 要时刻做笔记.
