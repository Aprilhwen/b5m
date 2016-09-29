$(function(){
ajax("get", "json/hot.json", "", function(data){
	var arr1 = JSON.parse(data)._data1;
	var arr2 = JSON.parse(data)._data2;
	var arr02 = JSON.parse(data)._data02;
//==================================人气推荐
			for(var i = 0; i < arr1.length; i++){
				var oLi = $("<li></li>");
				$(oLi).css({height:"282px", width:"192px",float:"left",margin:"4px"}).hover(function() {
					$(this).attr("class","box");
				}, function() {
					$(this).attr("class","");
				});
				$("#ul_hot").find("div").eq(0).append(oLi);
				var oImg = $("<img/>");	
				oImg.attr("src",arr1[i].image);
				var oA = $("<a></a>");
				oA.attr("href",arr1[i].des);
				$(oA).append(oImg);
				$(oImg).css({height:"200px",width:"192px",marginBottom:"6px"});
				var oP = $("<p style='padding:0 6px'></p>");
				$(oP).html(arr1[i].preview).css({color:"#000",fontSize:"12px"}).hover(function() {
					$(this).css({color:"#ff5ca3"})
				}, function() {
					$(this).css({color:"#000"})
				});
				var oSpan = $("<span></span>");
				oSpan.html(arr1[i].price).css({fontSize:"12px",color:"#ff5ca3"});
				$(oA).append(oP);	
				$(oLi).append(oA);
				$(oLi).append(oSpan);

			}
			for(var i = 0; i < arr2.length; i++){
				var oLi = $("<li></li>");
				$(oLi).css({height:"282px", width:"192px",float:"left",margin:"4px"}).hover(function() {
					$(this).attr("class","box");
				}, function() {
					$(this).attr("class","");
				});
				$("#ul_hot").find("div").eq(1).append(oLi);
				var oImg = $("<img/>");	
				oImg.attr("src",arr2[i].image);
				var oA = $("<a></a>");
				oA.attr("href",arr2[i].des);
				$(oA).append(oImg);
				$(oImg).css({height:"200px",width:"192px",marginBottom:"6px"});
				var oP = $("<p style='padding:0 6px'></p>");
				$(oP).html(arr2[i].preview).css({color:"#000",fontSize:"12px"}).hover(function() {
					$(this).css({color:"#ff5ca3"})
				}, function() {
					$(this).css({color:"#000"})
				});
				var oSpan = $("<span></span>");
				oSpan.html(arr2[i].price).css({fontSize:"12px",color:"#ff5ca3"});
				$(oA).append(oP);	
				$(oLi).append(oA);
				$(oLi).append(oSpan);


			}
	
			var oImg0 = $('<img/>');
				oImg0.attr("src",arr02[0].image);
				var oA0 = $("<a></a>");
				oA0.attr("href",arr02[0].des).css("marginLeft","210px");
				$(oA0).append(oImg0);
				$("#ul_hot").append(oA0);
				for(var i = 1; i < arr02.length; i++){
					var oAs = $("<a></a>");
					oAs.attr("href",arr02[i].des).html(arr02[i].title).css({fontSize:"14px",color:"#ffb4cb",paddingLeft:"24px",paddingRight:"24px"});
					$("#ul_hot").append(oAs);
				}
//===============================hover切换
	$(".hot1").hover(function() {
			/* Stuff to do when the mouse enters the element */
			$('.hot2').css({background:"",color:"#666"});	
			$('.hot1').css({background:"#ff5ca3",color:"#fff"});	
			$("#ul_hot").find('div').eq(1).css("display","none");	
			$("#ul_hot").find('div').eq(0).css("display","block");

		}, function() {
			/* Stuff to do when the mouse leaves the element */
		});
	$(".hot2").hover(function() {
			/* Stuff to do when the mouse enters the element */
			$('.hot1').css({background:"#fff",color:"#666"});
			$('.hot2').css({background:"#ff5ca3",color:"#fff"})
			$("#ul_hot").find('div').eq(0).css("display","none");
			$("#ul_hot").find('div').eq(1).css("display","block");
		}, function() {
			/* Stuff to do when the mouse leaves the element */
		});
//========================人气品牌
	var arr3 = JSON.parse(data)._data3;
	var oImg = $("<img/>");
	var oA = $("<a></a>");
	oA.attr("href",arr3[0].des);
	oImg.css({width:"180px",height:"120px",marginTop:"30px",marginLeft:"40px",marginBottom:"48px"})
	oImg.attr("src",arr3[0].image);
	$(oA).append(oImg);
	$("#hot_right").append(oA);
	for(var i = 1; i < arr3.length; i++){
		var oLi = $("<li></li>");
		$(oLi).css({height:"88x", width:"262px",marginBottom:"20px"});
		
		var oImg = $("<img/>");	
		oImg.attr("src",arr3[i].image);
		
		$(oImg).css({height:"88px",width:"88px",float:"left"});
		var oP = $("<p></p>");
		$(oP).html(arr3[i].preview).css({color:"#000",fontSize:"12px"}).hover(function() {
			$(this).css({color:"#ff5ca3"})
		}, function() {
			$(this).css({color:"#000"})
		});

		var oA1 = $("<a></a>");
		oA1.attr("href",arr3[i].des);
		
		$(oA1).css({height:"88px",width:"88px",marginRight:"20px",float:"left"});
		$(oA1).append(oImg);
		var oA2 = $("<a></a>");
		oA2.attr("href",arr3[i].des);
		$(oA2).css({height:"40px",width:"154px",float:"left",display:"block",marginTop:"30px"});
		$(oA2).append(oP);			
		var oSpan = $("<span></span>");
		oSpan.html(arr3[i].price).css({fontSize:"12px",color:"#ff5ca3"});		
		$(oLi).append(oA1);
		$(oLi).append(oA2);
		$(oLi).append(oSpan);
		$("#hot_right").append(oLi);

	}
//===================================新品上架
	var arr4 = JSON.parse(data)._data4;
	for( var i = 0; i < arr4.length; i++){
		var oA = $("<a></a>");
		$(oA).css({display:"block",height:"370px",float:"left",marginRight:"10px",marginLeft:"10px"})
		oA.attr("href",arr4[i].des);
		var oImg = $("<img />");
		oImg.attr("src",arr4[i].image).css({height:"370px"});
		$(oA).append(oImg);
		$("#ul_new").find("div").eq(0).append(oA);
	}
	var arr5 = JSON.parse(data)._data5;
	for(var i = 0; i < arr5.length; i++){
		var oLi = $("<li></li>");
		$(oLi).css({height:"258px", width:"182px",float:"left",marginTop:"26px",marginRight:"22px",marginLeft:"22px"}).hover(function() {
			$(this).attr("class","box");
		}, function() {
			$(this).attr("class","");
		});
		$("#ul_new").find("div").eq(0).append(oLi);
		var oImg = $("<img/>");	
		oImg.attr("src",arr5[i].image);
		var oA = $("<a></a>");
		oA.attr("href",arr5[i].des);
		$(oA).append(oImg);
		$(oImg).css({height:"182px",width:"182px",marginBottom:"6px"});
		var oP = $("<p style='padding:0 12px'></p>");
		$(oP).html(arr5[i].preview).css({color:"#000",fontSize:"12px"}).hover(function() {
			$(this).css({color:"#ff5ca3"})
		}, function() {
			$(this).css({color:"#000"})
		});
		var oSpan = $("<span></span>");
		oSpan.html(arr5[i].price).css({paddingLeft:"10px",fontSize:"12px",color:"#ff5ca3"});
		$(oA).append(oP);	
		$(oLi).append(oA);
		$(oLi).append(oSpan);

	}
var arr6 = JSON.parse(data)._data6;
	for( var i = 0; i < arr6.length; i++){
		var oA = $("<a></a>");
		$(oA).css({display:"block",height:"370px",float:"left",marginRight:"10px",marginLeft:"10px"})
		oA.attr("href",arr6[i].des);
		var oImg = $("<img />");
		oImg.attr("src",arr6[i].image).css({height:"370px"});
		$(oA).append(oImg);
		$("#ul_new").find("div").eq(1).append(oA);
	}
	var arr7 = JSON.parse(data)._data7;
	for(var i = 0; i < arr7.length; i++){
		var oLi = $("<li></li>");
		$(oLi).css({height:"258px", width:"182px",float:"left",marginTop:"26px",marginRight:"22px",marginLeft:"22px"}).hover(function() {
			$(this).attr("class","box");
		}, function() {
			$(this).attr("class","");
		});
		$("#ul_new").find("div").eq(1).append(oLi);
		var oImg = $("<img/>");	
		oImg.attr("src",arr7[i].image);
		var oA = $("<a></a>");
		oA.attr("href",arr7[i].des);
		$(oA).append(oImg);
		$(oImg).css({height:"182px",width:"182px",marginBottom:"6px"});
		var oP = $("<p style='padding:0 12px'></p>");
		$(oP).html(arr7[i].preview).css({color:"#000",fontSize:"12px"}).hover(function() {
			$(this).css({color:"#ff5ca3"})
		}, function() {
			$(this).css({color:"#000"})
		});
		var oSpan = $("<span></span>");
		oSpan.html(arr5[i].price).css({paddingLeft:"10px",fontSize:"12px",color:"#ff5ca3"});
		$(oA).append(oP);	
		$(oLi).append(oA);
		$(oLi).append(oSpan);

	}

//=======================hover切换

	$(".new1").hover(function() {
			/* Stuff to do when the mouse enters the element */
			$('.new2').css({background:"",color:"#666"});	
			$('.new1').css({background:"#36dbd9",color:"#fff"});	
			$("#ul_new").find('div').eq(1).css("display","none");	
			$("#ul_new").find('div').eq(0).css("display","block");

		}, function() {
			/* Stuff to do when the mouse leaves the element */
		});
		$(".new2").hover(function() {
			/* Stuff to do when the mouse enters the element */
			$('.new1').css({background:"#fff",color:"#666"});
			$('.new2').css({background:"#36dbd9",color:"#fff"})
			$("#ul_new").find('div').eq(0).css("display","none");
			$("#ul_new").find('div').eq(1).css("display","block");
		}, function() {
			/* Stuff to do when the mouse leaves the element */
		});
})
})