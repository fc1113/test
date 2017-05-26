			function showdiv(obj){
			var x=obj.parentNode//摘要//父节点
			var y=x.nextSibling;//正文//下一个兄弟结点
			while(y.nodeType!=1)y=y.nextSibling;//浏览器兼容，如果浏览器找到的兄弟不是正确结点的话，即为空节点，则让找下一个结点
			x.style.display="none";
			y.style.display="block";
			}
			function hidediv(obj){
			var y=obj.parentNode.parentNode;//正文
			var x=y.previousSibling//摘要 //上一个兄弟结点
			while(x.nodeType!=1)x=x.previousSibling;//浏览兼容，
			x.style.display="block";
			y.style.display="none";
			}
