window.onload=function(){
	var oDiv=document.getElementById('play');
	var oOl=document.getElementsByTagName('ol')[0];
	var aLiOl=oOl.getElementsByTagName('li');
	var oUl=document.getElementsByTagName('ul')[0];
	var aLiUl=oUl.getElementsByTagName('li');
	var now=0;
	var timer=null;
		for(var i=0;i<aLiOl.length;i++){
		aLiOl[i].index=i;
		aLiOl[i].onclick=function(){
			now=this.index;
			tab();
		}
	}
		function tab(){
			for(var j=0;j<aLiOl.length;j++){
				aLiOl[j].className='';
			}
			if(now==aLiUl.length-1){
				aLiOl[0].className='active';
			}
			else{
			aLiOl[now].className='active';
			}
			//oUl.style.top=-(this.index)*aLiUl[0].offsetHeight+'px';
			startMove(oUl,{top:-400*now});
		
		}
		function next(){
			now++;
			if(now==aLiUl.length){
				now=0;
				oUl.style.top=0;
			}
			tab();
		}
		timer=setInterval(next,2000);
		oOl.onmouseover=function(){
			clearInterval(timer);
		}
		oOl.onmouseout=function(){
		timer=setInterval(next,2000);
		}
}
