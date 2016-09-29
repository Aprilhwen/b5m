ajax("get","json/look.json","",function(data){
	var arr1 = JSON.parse(data).data1;
	var arr2 = JSON.parse(data).data2;
	for(var i = 0; i < arr1.length; i++){
		var oLi = $("<li></li>");
				$(oLi).css({height:"344px",width:"242px",background:"#fff",float:"left",marginBottom:"6px",marginLeft:"9px"}).hover(function() {
					$(this).attr("class","box");
				}, function() {
					$(this).attr("class","");
				});
				if(i == 5 || i == 6 || i == 4 || i == 7){
					oLi.css({marginBottom:"24px"})
				}
				$("#ul_look").append(oLi);
				var oImg = $("<img/>");	
				oImg.attr("src",arr1[i].image);
				var oA = $("<a></a>");
				oA.attr("href",arr1[i].des);
				$(oA).append(oImg);
				$(oImg).css({height:"242px",width:"242px",marginBottom:"20 px"});
				var oP = $("<p style='padding:0 22px;margin-bottom:8px'></p>");
				$(oP).html(arr1[i].preview).css({color:"#000",fontSize:"12px"}).hover(function() {
					$(this).css({color:"#ff5ca3"})
				}, function() {
					$(this).css({color:"#000"})
				});
				var oSpan = $("<span style='padding:0 20px'></span>");
				oSpan.html(arr1[i].price).css({fontSize:"18px",color:"#ff5ca3"});
				$(oA).append(oP);	
				$(oLi).append(oA);
				$(oLi).append(oSpan);

			}

	for(var i = 0;i < arr2.length; i++){
		var oImg = $('<a href = "'+ arr2[i].des +'" ><img src = "'+ arr2[i].image +'" /></a>');
		$("#ul_recom").find("a").css({float:"left"});
		$("#ul_recom").find("a").eq(0).attr("class","index0").css({marginLeft:"-1px",marginRight:"4px"});
		$("#ul_recom").find("a").eq(0).find('img').css({width:"314px",height:"246px",marginRight:"-1px"});
		$("#ul_recom").append(oImg);
	}
})