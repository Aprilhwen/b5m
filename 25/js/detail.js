$(function(){
	$(".div2").css({display:"none"});
	$(".div3").css({display:"none"});
//====================================hover
	$(".hover1").css({border:"2px solid #f90"}).hover(function() {
		$(".left_l").find("p").find("img").css({border:"2px solid #fff"});
		$(this).css({border:"2px solid #f90"});
		$(".left_l").find("div").attr("class","");
		$(".left_l").find("div").eq(0).attr("class","active");
	});
	$(".hover2").hover(function() {
		$(".left_l").find("p").find("img").css({border:"2px solid #fff"});
		$(this).css({border:"2px solid #f90"});
		$(".left_l").find("div").attr("class","");
		$(".left_l").find("div").eq(1).attr("class","active");
	});
	$(".hover3").hover(function() {
		$(".left_l").find("p").find("img").css({border:"2px solid #fff"});
		$(this).css({border:"2px solid #f90"});
		$(".left_l").find("div").attr("class","");
		$(".left_l").find("div").eq(2).attr("class","active");
	});	
	$(".reduce").on('click', function(event) {
		if (parseInt($(".number").html()) > 1) {
			var number = parseInt($(".number").html()) - 1;
		$(".number").html(number);
		}		
	});
	$(".increase").on('click', function(event) {
		var number = parseInt($(".number").html()) + 1;
		$(".number").html(number);
	});
	var oP = $("<p><a href='http://detail.b5m.com/2630073.html'><img src='image/icon-unfavo.png'/></a><span>收藏</span><a href='#'><img src='image/icon-unshare.png'/></a><span class='left'>分享到:</span><a href='#'><img src='image/icon-sina.png'/></a><a href='#'><img src='image/icon-weibo.png'/></a><a href='#'><img src='image/icon-weixin.png'/></a></P>");
	oP.css({margin:"100px 0 0 6px",height:"19px"});
	oP.find("a").css({marginLeft:"4px",marginRight:"4px",marginTop:"6px",display:"block",float:"left"})
	oP.find("span").css({float:'left',display:"block",margin:"4px"});
	oP.find('span.left').css({marginLeft:"14px"})
	$(".left_l").append(oP);
//================================上部右侧
	var oSpan = $("<span>看了又看<a href='#'><img src='image/icon-change.png' /></a></span>");
	oSpan.css({display:"block",fontSize:"12px",color:"#8c8c8c",marginLeft:"12px"});
	oSpan.find("img").css({float:"right",marginRight:"12px"});
	$(".topRight").append(oSpan);

		ajax("get", "json/detail.json", "", function(data){
			var data1 = JSON.parse(data).data1;
				var oDiv = $("<div><img src = '" + data1[0].image +"'/><span>" + data1[0].preview + "</span><i>"+ data1[0].price +"</i></div><div><img src = '" + data1[1].image +"'/><span>" + data1[1].preview + "</span><i>"+ data1[1].price +"</i></div><img class='last' src = 'image/c6dbc27c06468102528.png'/>");
				oDiv.find("span").fadeTo(0,0.6,function(){
					$(this).css({display:"block",position:"absolute",bottom:"30px",background:"gray",left:"30px",display:"none"})
				});
				oDiv.find("i").css({color:"#8c8c8c",display:"block",})		
				oDiv.css({position:"relative",fontSize:"14px",textAlign:"center"})
				oDiv.find("img").css({height:"150px",width:"150px",marginBottom:"24px"}).hover(function() {
					oDiv.find("span").eq(0).css({display:"block"});
				}, function() {
					oDiv.find("span").eq(0).css({display:"none"});
				});
				oDiv.find("img").eq(1).hover(function() {
					oDiv.find("span").css({display:"block"});
					oDiv.find("span").eq(0).css({display:"none"})
				}, function() {
					oDiv.find("span").css({display:"none"});
				})	
			$('.topRight').append(oDiv);
//============================================相关产品
			var data2 = JSON.parse(data).data2;
			var html = '';
			for(var i = 0; i < data2.length; i++){
				html += "<li><img src='" + data2[i].image +"'/><span>"+ data2[i].preview +"</span><i>"+ data2[i].price +"</i></li>";
			}
			$("#ul_id").css({marginLeft:"24px"}).html(html);
			$("#ul_id").find('li').css({paddingBottom:"26px"})
			$("#ul_id").find("span").css({fontSize:"14px",height:"40px",display:"block"}).hover(function() {
				$(this).css({color:"#ff5ca3"});
			}, function() {
				$(this).css({color:"#000"})
			});
			$("#ul_id").find('i').css({fontSize:"18px",color:"#ff5ca3",marginBottom:"20px"});

//===============================================用户咨询
			var data3 = JSON.parse(data).data3;
			var html = '';
			for(var i = 0; i < data3.length; i++){
				html += '<li><b>'+ data3[i].q +'</b><span>'+ data3[i].a +'</span></li>'
			}		
			$(".ul_Class").html(html);
			$(".ul_Class").css({width:"800px",float:"left",marginLeft:"40px",marginTop:"20px",paddingBottom:"100px"});
			$(".ul_Class").find("li").find("b").css({display:"block",width:"800px"})
			$(".ul_Class").find("li").find("span").css({color:"#666"});
//=============================================加入购物车
			var data4 = JSON.parse(data).data4;
			var html = '';
			for(var i = 0; i < data4.length; i++){
				html += "<i class='btn"+i+"' id='"+data4[i].id+"' ><img src='"+data4[i].images+"'><span>"+data4[i].color+"</span></i>";
			}
			var htm = '<span class="title">颜色</span>'
			$(".list").html(htm + html);
//============================================================click
			$(".btn0").click(function() {
				$('.list').find("i").css({border: "1px solid #e0e0e0"})
				$(this).css({border:"1px solid #ff3267"});
				$(".left_l").find("div").attr("class","");
				$(".left_l").find("div").eq(3).attr("class","active");
				$(".B_btn").attr("id",this.id)
			});
			$(".btn1").click(function() {
				$('.list').find("i").css({border: "1px solid #e0e0e0"})
				$(this).css({border:"1px solid #ff3267"});
				$(".left_l").find("div").attr("class","");
				$(".left_l").find("div").eq(4).attr("class","active");
				$(".B_btn").attr("id",this.id)
			});
			$(".btn2").click(function() {
				$('.list').find("i").css({border: "1px solid #e0e0e0"})
				$(this).css({border:"1px solid #ff3267"});
				$(".left_l").find("div").attr("class","");
				$(".left_l").find("div").eq(0).attr("class","active");
				$(".B_btn").attr("id",this.id)
			});
			$(".btn3").click(function() {
				$('.list').find("i").css({border: "1px solid #e0e0e0"})
				$(this).css({border:"1px solid #ff3267"});
				$(".left_l").find("div").attr("class","");
				$(".left_l").find("div").eq(5).attr("class","active");
				$(".B_btn").attr("id",this.id)
			});

		});

})