Welcome to zAlert!
===================


这是一个极简的，非常轻量极的(打包之后4k)，针对移动端的，可以自定义的弹窗信息，原生的Javascript插件。无任何依赖。

初衷是公司移动端需要一个可以自己定制的alert弹窗，原生的alert各种移动端平台样式不统一，另外阻塞了浏览器其他行为，也不能提供回调，无按钮等。如是写了这一个。

----------

如何使用zAlert
-------------

> **下载和打包**

你可以直接下载src原文件中的js,less文件，引入到你的工程文件中，当然less文件需要你自己把它处理成浏览器能识别的CSS文件。

支持AMD引用和浏览器插入script标签两种方式，对于CMD没做考证，你可以尝试，然后反馈给我。

**如果你已经安装 node、npm、git、gulp。并能使用这些工具，下面步骤可以完美打包到你的本地或工程中使用：**

 1. 新建一个文件夹，进入命令行，cd命令到文件夹内，执行以下:

 


 git clone https://github.com/saymy/zAlert.git
这步将把整个分支下载到你的本地。

 2. 执行以下，引用相关node模块

   


 npm install

 3. 执行打包
gulp
这步执行完成之后，你的文件夹根目录会多出一个“dist”文件夹，里面就是已经打包好的js和编译好的CSS文件（提示：你如果对样式不满意，可以重写进行覆盖）

> **Demo **

   请查看文件中的Demo.html
 

> **使用和 API 说明**

    zAlert({
    	   msg:'zAlert弹窗信息',    //弹窗显示的信息
    	   sureBtnText:'确定',     //确定按钮的文字
    	   cancelBtnText:'取消',   //取消按钮的文字
    	   sureBtnShow:false,     //是否显示确定按钮
    	   cancelBtnShow:false,   //是否显示取消按钮
    	   toclose:false,         //是否点击弹窗之外的浮层，关闭弹窗
    	   time:2000,             //无按钮状态，浮层多长时间自行关闭
    	   sureCallback:function(){ 
    		    //console.log("点击了确定");  //点击确定按钮后回调函数
    	   },
    	   cancelCallback:function(){
    		    //console.log("点击了取消");  //点击取消按钮后回调函数
    	   }
    });

有任何建议，请反馈给我。"# zAlert" 
"# zAlert" 
