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
		8.md 文档文档生成
		9.html5 
		10.分页 ***
		11.系统学习html+css布局
		12.form表单 ajax提交 上传文件 上传图片预览 (首都在线个人身份证信息)
		13.表单验证插件 validate.js
			Validate.js是一个轻量级的JavaScript表单验证类库，它不依赖于其它任何JavaScript框架，经GZIP压缩后仅有1KB大小。它所提供的验           证类型有：是否为空、数字、Email地址、判断输入值是否在某一范围内等，此外你也可以自定义验证规则，它也支持在一个输入框中使用多种验证规则。验证规则的提示信息是默认设置在JS文件中的，它也提供了函数让你可以自定义提示信息。
		14.
			
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
