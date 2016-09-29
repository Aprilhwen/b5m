//========================================================购物车页面
	$(function(){
		ajax("get", "json/detail.json", "", function(data){
			$.cookie("goods")
			var data4 = JSON.parse(data).data4;
			var sc_str = $.cookie("goods");//[{id:03,num:1}]·
			if(sc_str){
				var sc_obj = eval(sc_str)/*.id;alert(sc_obj)*/
				var html = '';
				for(var i in sc_obj){
					//alert(sc_obj[i].id);
					//alert(data4[i].id)
					html += "<li><img src='"+data4[sc_obj[i].id].image+"'/><div><a href = '#'>ROYVALU学院风休闲双肩背包 WAY</a><span class='color'>颜色："+data4[sc_obj[i].id].color+"</span><i>"+data4[sc_obj[i].id].price+"</i><button class='reduce'>-</button><span class='number'>"+sc_obj[i].num+"</span><button class='increase'>+</button><span class='total'></span><span class='color delete'>删除</span><div></li>";
				}
				$("#ulId").html(html); 
				$(".total").css({margin:"120px"}).html(data4[sc_obj[i].id].price * sc_obj[i].num)
				$(".reduce").css({height:"25px",width:"16px",border:"1px #ccc solid"}).on('click', function(event) {
						if (parseInt($(".number").html()) > 1) {
							var number = parseInt($(".number").html()) - 1;
							$(".number").html(number);
							$(".total").html(data4[sc_obj[i].id].price * number)
						}		
					});
				$(".increase").css({height:"25px",width:"16px",border:"1px #ccc solid"}).on('click', function(event) {
						var number = parseInt($(".number").html()) + 1;
						$(".number").html(number);
						$(".total").html(data4[sc_obj[i].id].price * number)
					});

				$(".number").css({padding:"4px 12px",borderTop:"1px #ccc solid",borderBottom:"1px #ccc solid"})
				$(".delete").css({cursor:"pointer",marginLeft:"20px"}).click(function(){
					$.cookie('goods', null);
					$(".number").html(0);
					$(".total").html(0)
				})
			}			
		})

		var oLi = $('#list').find('li');
		for(var i = 0; i < oLi.length; i++){
			$(oLi[i]).hover(function() {
				$(this).find("img").css("display","block");
			}, function() {
				$(this).find("img").css("display","none");
			});
		}
		$("#ulId").css({width:"1180px",background:"#fffcef",padding:"10px",border:"1px solid #fdefc4"})	
		var hot = $("<i>热销</i><span>为您推荐的最热销商品</span><em>展开</em>");
		$("#hot").append(hot)
		$("#hot").css({height:"32px",background:"#feecec",marginBottom:"20px",padding:"8px 0 0 12px"})
		$("#hot").find("i").css({display:"block",float:"left",lineHeight:"28px",width:"65px",background:"#ff9f9f",textAlign:"center",color:"#fff"})
		$("#hot").find("span").css({font:"14px/28px ''",margin:"0 12px",color:"#fc8787",float:"left"})
		$("#hot").find("em").css({color:"#e24949",display:"block",float:"left",lineHeight:"28px",width:"65px",background:"#ff9f9f",marginLeft:"30px",textAlign:"center"})
	})