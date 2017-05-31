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