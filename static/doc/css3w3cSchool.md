### css3新属性
  * background-size:length|percentage|cover|contain 
    ** length:设置背景图像的宽度和高度 percentage:以父元素的百分比来设置背景图像的宽度和高度 
    ** cover:把背景图像扩展至足够大,是背景完全覆盖背景区域,背景图像的某些部分可能会显示不出来
    ** contain:把图像扩展至最大尺寸,以使其宽度和高度完全适应内容区域.
  * transition:
    ``` div
    {
      width:100px;
      transition:width 2s;
      -moz-transition: width 2s; /*Firefox 4*/
      -webkit-transition: width 2s;/* Safari 和 chrome  */
      -o-transition: width 2s; /* Opera */
     }
     ```
    > 值	描述
      transition-property	规定设置过渡效果的 CSS 属性的名称。
      transition-duration	规定完成过渡效果需要多少秒或毫秒。
      transition-timing-function	规定速度效果的速度曲线。
      transition-delay	定义过渡效果何时开始。
   *
