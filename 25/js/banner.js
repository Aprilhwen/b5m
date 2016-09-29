	
	$(function(){
		var timer = null;
		var $index = 0;
		var $_index = 0;
		$(".btn span").mouseover(function(){
			clearInterval(timer);
			$index = $(this).index();//获取下标
			scrollPlay();
			$_index = $index;//把当前的值赋给下一次的前一个序列号
		}).mouseout(function() {
			autoPlay();
		});
		autoPlay();				
		function autoPlay() {
			timer = setInterval(function() {
				$index++;
				if ($index > 6) {
					$index = 0;
					$_index = 6;
				}
				scrollPlay();
				$_index = $index;
			}, 2000);
					
		}
		function scrollPlay(){
			$(".btn span").eq($index).addClass('hover').siblings().removeClass('hover');
			if($index == 0 && $_index == 6){
				$(".scroll img").eq($_index).stop(true, true).animate({
					"left":"-955px"
				});
				$(".scroll img").eq($index).css("left","955px").animate({
					"left":"0"
				});
			}else if($index == 6 && $_index == 0) {
				$(".scroll img").eq($_index).stop(true, true).animate({
					"left": "955px"
				});
				$(".scroll img").eq($index).css("left", "-955px").stop(true, true).animate({
					"left": "0"
				});
			} else if ($index > $_index) { //左移
				$(".scroll img").eq($_index).stop(true, true).animate({
					"left": "-955px"
				});
				$(".scroll img").eq($index).css("left", "955px").stop(true, true).animate({
					"left": "0"
				});
			} else if ($index < $_index) { //右移
				$(".scroll img").eq($_index).stop(true, true).animate({
					"left": "955px"
				});
				$(".scroll img").eq($index).css("left", "-955px").stop(true, true).animate({
					"left": "0"
				});
			}
		}

		var oImg = $("<a href='#'><img class='oImg' src='image/hot.jpg' /><h3>温和也有强大去污力</h3><span class='span1'>日本 Mitsuel 三津荣洗洁精橘子味</span></a>");
		$("#div_right").append(oImg);
		var oP = $("<p class='p1'>5.8折</p><p class='p2'>热卖</p><p class='p3'>￥30</p><del>￥52</del>");
		$("#div_right").append(oP);
		var div = $("<div class='countdown'><span class='span2'>剩余时间：<span>00天17时35分15秒</span></span></div>")
		$("#div_right").append(div)
	})