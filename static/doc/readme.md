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
		
0606 : a标签属性 target="_blank" 在新的页签打开
       position :    要某些元素跑出来，悬浮在网页上面，而且需要给它指定一个位置

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
