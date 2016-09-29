$(function(){
		var oDiv1 = $("<div>小帮帮资讯</div>");
		oDiv1.css({position:"fixed", width:"120px",textAlign:"center",lineHeight:"36px", background:"gray",right:"160px",top:"50%",marginTop:"-150px",display:"none",filter: "alpha(opacty=60)",opacity:"0.6"});
		$('body').append(oDiv1)
		$("#li1").hover(function() {
			oDiv1.css({"display":"block"})
			oDiv1.stop(true,true).animate({"right":"36px"})
		}, function() {
			oDiv1.stop(true,true).animate({"right":"160px"});
			var tag = setTimeout(function(){
				oDiv1.css({"display":"none"});
			},300)
		});

		var oDiv2 = $("<img src='image/b5m_weixin.png'/>");
		oDiv2.css({position:"fixed", background:"gray",right:"160px",top:"50%",marginTop:"-106px",display:"none",filter: "alpha(opacty=60)",opacity:"0.6"});
		$('body').append(oDiv2);
		$("#li2").hover(function() {
			oDiv2.css({"display":"block"})
			oDiv2.stop(true,true).animate({"right":"36px",})
		}, function() {
			oDiv2.stop(true,true).animate({"right":"160px",});
			var tag = setTimeout(function(){
				oDiv2.css({"display":"none"});
			},300)
		});

		var oDiv4 = $("<div>我的收藏</div>");
		oDiv4.css({position:"fixed", width:"120px",textAlign:"center",lineHeight:"36px", background:"gray",right:"160px",top:"50%",marginTop:"67px",display:"none",filter: "alpha(opacty=60)",opacity:"0.6"});
		$('body').append(oDiv4);
		$("#li4").hover(function() {
			oDiv4.css({"display":"block"})
			oDiv4.stop(true,true).animate({"right":"36px",})
		}, function() {
			oDiv4.stop(true,true).animate({"right":"160px",});
			var tag = setTimeout(function(){
				oDiv4.css({"display":"none"});
			},300)
		});

		var oDiv5 = $("<img src='image/b5m_app.png'/>");
		oDiv5.css({position:"fixed", background:"gray",right:"160px",top:"50%",marginTop:"108px",display:"none",filter: "alpha(opacty=60)",opacity:"0.6"});
		$('body').append(oDiv5);
		$("#li5").hover(function() {
			oDiv5.css({"display":"block"})
			oDiv5.stop(true,true).animate({"right":"36px",})
		}, function() {
			oDiv5.stop(true,true).animate({"right":"160px",});
			var tag = setTimeout(function(){
				oDiv5.css({"display":"none"});
			},300)
		});	

//====================购物车
		$(".B_btn").click(function(){
				var id = this.id;
				var first = $.cookie("goods") == null ? true : false;
				var same = false; //判断是否有相同的商品
				if(first){
					$.cookie("goods", "[{id:" + id +",num:1}]");
					$.cookie("first", "false");
				}else{
					var str = $.cookie("goods");
					var arr = eval(str);
					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num = arr[i].num + 1; //添加数量
							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr);
							same = true;
						}
					}

					if(!same){
						var obj = {id:id,num:1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr);
					}
				}
				sc_car();
			});
			sc_car();
			function sc_car(){
				var sc_str = $.cookie("goods");
				if(sc_str){
					var sc_obj = eval(sc_str); 
					var sc_num = 0; //记录所有商品的数量
					for(var i in sc_obj){
						sc_num += Number(sc_obj[i].num);
					}
					$(".num").html(sc_num);
				}
			};
			var oLi = document.getElementById('li3');
			oLi.onclick = function(){
				var url = "car.html";
				url = url + "?car=" + $.cookie("goods");
				open(url, "car");
			}

})