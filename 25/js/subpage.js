$(function(){
	ajax("get" ,"json/subpage.json", "",function(data){
		var arr = JSON.parse(data)._data;
		for(var i = 0; i < arr.length; i++){
			var oLi = $("<li><a href = '"+ arr[i].des +"'><img src = '" + arr[i].image +"'/><p><span>"+ arr[i].preview +"</span></p></a><span class='pri'>"+ arr[i].price +"</span></li>");
			oLi.css({position:"relative",height:"394px",width:"284px",background:"#fff",marginTop:"10px",marginLeft:"19px",float:"left"});
			if(i % 4 == 0){
				oLi.css("marginLeft","3px")
			}
			$("#ul_main").css({marginBottom:"40px"})
			$("#ul_main").append(oLi);
		}
	})
	
	$(".page").css({textAlign:"center",width:"100%",height:"120px",paddingTop:"40px",float:"left",paddingLeft:"460px"})
	$(".page").find("span").css({display:"block",width:"36px",textAlign:"center",lineHeight:"36px",marginRight:"12px",border:"1px solid #999",float:"left"})
	$(".page").find('span').hover(function() {
		$(this).css({background:"#ff5fa3"})
	}, function() {
		$(this).css({background:"#fff"})
	});
})