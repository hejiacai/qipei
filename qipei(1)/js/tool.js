(function(){
	//移动到图片时显示
	$(".img_show").mouseenter (function(e){
		var src= $(this).attr('src');
		$(".img_div").show();
		$(".img_div img").attr('src',src);
		var page_top= $(this).offset().top;
		var page_left= $(this).outerWidth();
		console.info(page_left);
		$(".img_div").offset({top:page_top,left:page_left+40}).css('margin-left','30px');
	})
	//移出是图片消失
	$(".img_show").mouseleave (function(){
		$(".img_div").hide();
	})
	//点击触发
	$(".dianji").click(function(){
		ShowAndDisappear();
	})
	//点击遮罩层消失
	$(".backdrop").click(function(){
		ShowAndDisappear();
	})
	//点击取消消失
	$(".qx").click(function(){
		ShowAndDisappear();
	})
	//显示和隐藏
	function ShowAndDisappear(){
		$(".backdrop").toggleClass("tool_acitve");
		$(".tips_info").toggleClass("tool_acitve");
	}
})(jQuery)
