
window.onload=function(){
	
	var loca=window.localStorage;
	var keys=sessionStorage.getItem("user_info");
	var token;
	if(keys==""||keys==null){
//		window.location.href="login.html";
		token=getUrlParam("token");
	}else{
		keys=JSON.parse(keys);
		token=keys.token;
	}
//	if(token==null || token==""){
//		
//	} 
	$.ajax({
		type:"post",
		url:"http://qipei.liebianzhe.com/api/index/isflag",
		async:false,
		data:{
			token:token,
		},
		success:function(data){
			
			if(data.state==0){
				loca.clear();
				mui.toast("登录失效~~");
				setTimeout(function(){
					window.location.replace("login.html");
				},1000);
			}
		},
		error:function(){
			console.info("请求失败~");
		}
		
	});
	$(window).resize(function(){
		document.documentElement.style.fontSize =document.documentElement.clientWidth/750*40 +"px";
	});
	function getUrlParam(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象var r = window.location.search.substr(1).match(reg);  //匹配目标参数if (r!=null) return unescape(r[2]); return null; //返回参数值} 
		var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		if (r!=null) return unescape(r[2]); return null; //返回参数值
	}
//	// 函数中的参数分别为 cookie 的名称、值以及过期天数
//	function setCookie(c_name,value,expiredays){
//	    var exdate=new Date();
//	    exdate.setDate(exdate.getDate()+expiredays);
//	    document.cookie=c_name+ "=" +escape(value)+
//	    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
//	}
//	function getCookie(c_name){
//  if (document.cookie.length>0){
//      c_start=document.cookie.indexOf(c_name + "=");
//      if (c_start!=-1){
//          c_start=c_start + c_name.length+1;
//          c_end=document.cookie.indexOf(";",c_start);
//          if (c_end==-1){ 
//              c_end=document.cookie.length;
//          }
//
//          return unescape(document.cookie.substring(c_start,c_end));
//      }
//   }
//	
//	    return "";
//	}
}