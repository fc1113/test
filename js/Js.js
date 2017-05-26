 
 window.onload=function(){
	var oDiv=document.getElementById('container');
	var oOl=document.getElementsByTagName('ol')[0];
	var aLiOl=oOl.getElementsByTagName('li');
	//var oUl=document.getElementsByTagName('ul')[0];
	var oUl=document.getElementById("slider");
	var aLiUl=oUl.getElementsByTagName('li');
	var now=0;
	var timer=null;
		for(var i=0;i<aLiOl.length;i++){
		aLiOl[i].index=i;
		aLiOl[i].onmouseover=function(){
			//alert(this);
			now=this.index;
			//var obj=aLiUl[now];
			tab();
			
		}
	}
		
		function tab(){
			var oDivv=document.getElementById('aaa');
			//alert(oDivv);
			oUl.style.opacity=0.2;
			oUl.style.top=-600*now+'px';
			oDivv.style.height=0;
			startMove(oUl,{opacity:100});
			startMove(oDivv,{height:600});
			
		}
		function next(){
			now++;
			if(now==aLiUl.length){
				now=0;
				oUl.style.top=0;
			}
			tab();
			for(var i=0;i<aLiOl.length;i++){
				aLiOl[i].className='';
			}
			aLiOl[now].className='active';
		}
		timer=setInterval(next,3000);
		
		
		
		//遮罩层代码开始
  function opennew(){
		  			
		  		//获取页面的高度和宽度
		  	var sheight=document.documentElement.scrollHeight;
		  	var swidth=document.documentElement.scrollWidth;
		  	var omask=document.createElement("div");
		  	omask.id="mask";
		  	omask.style.height=sheight+"px";
		  	omask.style.width=swidth+"px";
		  	document.body.appendChild(omask);//在body的尾部插入omask结点
		  	
		  	var ologiner=document.createElement("div");
		  	ologiner.id="loginer";
		  	var wheight=document.documentElement.clientHeight;
		  	var wwidth=document.documentElement.scrollwidth;
		  	ologiner.innerHTML="<div class='logincon'><div id='closebutton'></div></div>"
		  	document.body.appendChild(ologiner);
		  	//获取loginer元素的高度和宽度（注：获取的是页面中元素的宽度和高度，所以需要先插入ologiner之后再获取）
		  var dheight=ologiner.offsetHeight;
		  	var dwidth=ologiner.offsetWidth;
		  	ologiner.style.left=(wwidth-dwidth)/2+"px";
		  	ologiner.style.top=(wheight-dheight)/2+"px";
		  		
		  		var oclose=document.getElementById("closebutton");
		  		omask.onclick=oclose.onclick=function(){//当omask被点击或者oclose被点击时，都执行删除
		  			document.body.removeChild(omask);
		  			document.body.removeChild(ologiner);
		  		}
		  		
		  	}
		  	
		  	var oBtn=document.getElementById("login");
		  	oBtn.onclick=function(){
		  		opennew();
		  	
		  	}
		  	//遮罩层代码结束
		
		
}

		  
