//offsetWidth  计算的是盒模型的宽  并不是单纯的Width，
			function getStyle(obj,name){
				if(obj.currentStyle){
					return obj.currentStyle[name];
				}
				else{
					return getComputedStyle(obj,false)[name];
				}
			}
			
			function startMove(obj,json,fnEnd){
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					var flag=true;
					for(var name in json){
					var speed=0;
					var curr;
					if(name=='opacity'){
						//0.07*100=7.00000001,Math.round()四舍五入
						curr=Math.round(parseFloat(getStyle(obj,name))*100);
					}
					else{
				   curr=parseInt(getStyle(obj,name));
				  }
				   speed=(json[name]-curr)/20;
				   speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(curr!=json[name])flag=false;
						if(name=='opacity'){
							obj.style[name]=(curr+speed)/100;
							obj.style.filter="alpha(opacity:"+(curr+speed)+")";
		    				}
	    				else{
							obj.style[name]=curr+speed+'px';
	    				  }
					
				  }
					if(flag){
						clearInterval(obj.timer);
						if(fnEnd){
							fnEnd();
						}
					}
				},30);
			}