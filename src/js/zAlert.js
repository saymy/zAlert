/**
 * zAlert 1.0.0 
 * Copyright 2015-10-8 @zouchunbo(邹春波)
 * mail: 122279907@qq.com
 * rely: none  
 * Released on: 2015-10-12
 */

(function () {
    'use strict';
		function getClassNames(cls,obj){  
		      if (document.getElementsByClassName) {  
		            return obj.getElementsByClassName(cls);  
		      }else {  
		            var nodes = obj.getElementsByTagName("*"),ret = [];           
		            for(i = 0; i < nodes.length; i++) {  
		         if(hasClass(nodes[i],cls)){  
		                ret.push(nodes[i])  
		         }  
		      }  
		      return ret;  
		       }  
		}
		
		function hasClass(obj, cls) {  
		    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
		}  
		  
		function addClass(obj, cls) {  
		    if (!hasClass(obj, cls)) obj.className += " " + cls;  
		}  
		  
		function removeClass(obj, cls) {  
		    if (hasClass(obj, cls)) {  
		        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
		        obj.className = obj.className.replace(reg, ' ');  
		    }  
		}  
		  
		function toggleClass(obj,cls){  
		    if(hasClass(obj,cls)){  
		        removeClass(obj, cls);  
		    }else{  
		        addClass(obj, cls);  
		    }  
		}  
		
		function addListener(element,e,fn){
		    element.addEventListener?element.addEventListener(e,fn,false):element.attachEvent("on" + e,fn);
		    //addEventListener 除IE外的监听   //attachEvent IE浏览器的监听
		};    
    
    
    var	zAlert=function(params) {
    	if(getClassNames('zAlert_box',document)[0]) return;
        if (!(this instanceof zAlert)) return new zAlert(params);
        
        var defaults = {
        	msg:'zAlert弹窗信息',
        	sureBtnText:'确定',
        	cancelBtnText:'取消',
        	sureBtnShow:false,
        	cancelBtnShow:false,
        	time:2000,
        	sureCallback:function(){ 
	        	//alert("点击了确定");
	        },
	        cancelCallback:function(){
	        	//alert("点击了取消");
	        },
	        toclose:false//是否点击浮层，关闭弹窗
        }
        
		params = params || {};
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
            else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        
        var z = this;
        z.params = params;
        z.elementDom = document.createElement("div");
        //z.elementDom.id = "zAlert";
        z.elementDom.className = "zAlert_box";
        
        var btnStr="<div class='pt_12 pb_15 ofh clearfix'><span class='pp_btn sure'>"+z.params.sureBtnText+"</span><span class='pp_btn cancel'>"+z.params.cancelBtnText+"</span></div>";
        if(!(z.params.sureBtnShow) && z.params.cancelBtnShow ){
        	btnStr="<div class='pt_12 pb_15 ofh clearfix'><span class='pp_btn pp_btn0 sure'>"+z.params.sureBtnText+"</span><span class='pp_btn pp_btn100 cancel'>"+z.params.cancelBtnText+"</span></div>";
        }else if(!(z.params.cancelBtnShow) && z.params.sureBtnShow ){
        	btnStr="<div class='pt_12 pb_15 ofh clearfix'><span class='pp_btn pp_btn100 sure'>"+z.params.sureBtnText+"</span><span class='pp_btn pp_btn0 cancel'>"+z.params.cancelBtnText+"</span></div>";
        }else if(!(z.params.cancelBtnShow) && !(z.params.sureBtnShow)){
        	btnStr="";
        }
		z.elementDom.innerHTML = "<div class='popup bg_fff align_c font16'>"+
									 "<p class='pp_hint vf_bdr_b_e4'>"+z.params.msg+"</p>"+
									 btnStr+
							     "</div>";							     
		document.body.appendChild(z.elementDom);
		
		//getClassNames('popup',z.elementDom)[0].style.top=(window.screen.height-getClassNames('popup',z.elementDom)[0].offsetHeight)/2+"px";
		
		addClass(getClassNames('popup',z.elementDom)[0],"actin");
		

		
		
		if(!(z.params.cancelBtnShow) && !(z.params.sureBtnShow)){
			setTimeout(function(){					
					document.body.removeChild(z.elementDom);
					//z.params.cancelCallback();
			},z.params.time);
		}
		
		if(z.params.cancelBtnShow){
			addListener(getClassNames('pp_btn',z.elementDom)[1],"click",function(e){
				e.stopPropagation();
				removeClass(getClassNames('popup',z.elementDom)[0],"actin");
				addClass(getClassNames('popup',z.elementDom)[0],"actout");
				if(typeof z.params.cancelCallback != "undefined"){
					setTimeout(function(){					
						document.body.removeChild(z.elementDom);
						z.params.cancelCallback();
					},240);
				}else{
					setTimeout(function(){
						document.body.removeChild(z.elementDom);
					},240);
				}
			});
		}
		
		if(z.params.sureBtnShow){
			addListener(getClassNames('pp_btn',z.elementDom)[0],"click",function(e){
				e.stopPropagation();
				removeClass(getClassNames('popup',z.elementDom)[0],"actin");
				addClass(getClassNames('popup',z.elementDom)[0],"actout");
				if(typeof z.params.sureCallback != "undefined"){
					setTimeout(function(){					
						document.body.removeChild(z.elementDom);
						z.params.sureCallback();
					},240);
				}else{
					setTimeout(function(){					
						document.body.removeChild(z.elementDom);
					},240);
				}
			});
		}

		if(z.params.toclose){
			addListener(getClassNames('popup',z.elementDom)[0],"click",function(e){
				e.stopPropagation();
			});
			addListener(z.elementDom,"click",function(){
				removeClass(getClassNames('popup',z.elementDom)[0],"actin");
				addClass(getClassNames('popup',z.elementDom)[0],"actout");				
				setTimeout(function(){					
					document.body.removeChild(z.elementDom);					
				},240);				
			});			
		}
        
    }    
    window.zAlert = zAlert;    
})();

/*===========================
zAlert AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.zAlert;
}
else if (typeof define === 'function' && define.amd) {
    define([], function() {
        'use strict';
        return window.zAlert;        
    });
}