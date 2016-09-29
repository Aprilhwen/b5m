$(function(){
		ajax("get", "json/nav.json", "", function(data){
				var arr = JSON.parse(data)._data;
				var aDiv = null;
				for(var i = 0; i < arr.length; i++){
					var oLi = $("<a href='"+ arr[i].des +"'><li></li></a>");
					oLi.html(arr[i].title);
					
					oLi.mouseover(function(){
						$(".ulId").find("li").attr("class","");
						$(".ulId").find("div").css("display","none");
						$(this).attr("class","active");
						$(".ulId").find("div").eq($(this).index()).css("display","block");						
					})
					$(".ulId").append(oLi);
					oLi.mouseout(function(){
						$(".ulId").find("div").hover(function() {
							$(this).css("display","block");
						}, function() {
							$(this).css("display","none");
						});
						$(".ulId").find("div").css("display","none");
					})
				}
				for(var i = 0; i < arr.length - 1; i++){
					aDiv = $("<div></div>");
					$(".ulId").append(aDiv);		
				}

				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content1;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulId").find("div").eq(0).append(oUl1);
				}
				var arr2 = JSON.parse(data).content2;
				var oLi2 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr2.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr2[i].title);
					$(oLi2).append(oA);
					$(oUl1).append(oLi2);
					$(".ulId").find("div").eq(0).append(oUl1);
				}
				var arr3 = JSON.parse(data).content3;
				var oLi3 = $("<li></li>");
				for(var i = 0; i < arr3.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr3[i].title);
					$(oLi3).append(oA);
					$(oUl1).append(oLi3);
					$(".ulId").find("div").eq(0).append(oUl1);
				}

				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content4;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulId").find("div").eq(0).append(oUl2);
				}
				var arr5 = JSON.parse(data).content5;
				var oLi5 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr5.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr5[i].title);
					$(oLi5).append(oA);
					$(oUl2).append(oLi5);
					$(".ulId").find("div").eq(0).append(oUl2);
				}
				var arr6 = JSON.parse(data).content6;
				var oLi6 = $("<li></li>");
				for(var i = 0; i < arr6.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr6[i].title);
					$(oLi6).append(oA);
					$(oUl2).append(oLi6);
					$(".ulId").find("div").eq(0).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr7 = JSON.parse(data).content7;
				for(var i = 0; i < arr7.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr7[i].title);
					
					$(oP).append(oA);
					$(".ulId").find("div").eq(0).append(oP);
				}

				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content8;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulId").find("div").eq(1).append(oUl1);
				}
				var arr2 = JSON.parse(data).content9;
				var oLi2 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr2.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr2[i].title);
					$(oLi2).append(oA);
					$(oUl1).append(oLi2);
					$(".ulId").find("div").eq(1).append(oUl1);
				}
				var arr3 = JSON.parse(data).content10;
				var oLi3 = $("<li></li>");
				for(var i = 0; i < arr3.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr3[i].title);
					$(oLi3).append(oA);
					$(oUl1).append(oLi3);
					$(".ulId").find("div").eq(1).append(oUl1);
				}

				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content11;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulId").find("div").eq(1).append(oUl2);
				}
				var arr5 = JSON.parse(data).content12;
				var oLi5 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr5.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr5[i].title);
					$(oLi5).append(oA);
					$(oUl2).append(oLi5);
					$(".ulId").find("div").eq(1).append(oUl2);
				}
				
				var oP = $("<p class='oUl3'></p>")
				var arr13 = JSON.parse(data).content13;
				for(var i = 0; i < arr13.length; i++){				
					var oA = $("<a href='#'></a>");				
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr13[i].title);
					$(oP).append(oA);
					$(".ulId").find("div").eq(1).append(oP);
				}
				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content14;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulId").find("div").eq(2).append(oUl1);
				}
				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content15;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulId").find("div").eq(2).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr16 = JSON.parse(data).content16;
				for(var i = 0; i < arr16.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr16[i].title);
					
					$(oP).append(oA);
					$(".ulId").find("div").eq(2).append(oP);
				}
				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content17;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulId").find("div").eq(3).append(oUl1);
				}
				var arr2 = JSON.parse(data).content18;
				var oLi2 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr2.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr2[i].title);
					$(oLi2).append(oA);
					$(oUl1).append(oLi2);
					$(".ulId").find("div").eq(3).append(oUl1);
				}
				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content19;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulId").find("div").eq(3).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr20 = JSON.parse(data).content20;
				for(var i = 0; i < arr20.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr20[i].title);
					
					$(oP).append(oA);
					$(".ulId").find("div").eq(3).append(oP);
				}
				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content21;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulId").find("div").eq(4).append(oUl1);
				}
				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content22;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulId").find("div").eq(4).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr16 = JSON.parse(data).content23;
				for(var i = 0; i < arr16.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr16[i].title);
					
					$(oP).append(oA);
					$(".ulId").find("div").eq(4).append(oP);
				}
				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content24;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulId").find("div").eq(5).append(oUl1);
				}
				var arr2 = JSON.parse(data).content25;
				var oLi2 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr2.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr2[i].title);
					$(oLi2).append(oA);
					$(oUl1).append(oLi2);
					$(".ulId").find("div").eq(5).append(oUl1);
				}
				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content26;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulId").find("div").eq(5).append(oUl2);
				}
				var arr5 = JSON.parse(data).content27;
				var oLi5 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr5.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr5[i].title);
					$(oLi5).append(oA);
					$(oUl2).append(oLi5);
					$(".ulId").find("div").eq(5).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr7 = JSON.parse(data).content28;
				for(var i = 0; i < arr7.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr7[i].title);
					
					$(oP).append(oA);
					$(".ulId").find("div").eq(5).append(oP);
				};


//////////////////////////////////////////fixed
				for(var i = 0; i < arr.length; i++){
					var oLi = $("<a href='"+ arr[i].des +"'><li></li></a>");
					oLi.html(arr[i].title);					
					oLi.mouseover(function(){
						$(".ulClass").find("li").attr("class","");
						$(".ulClass").find("div").css("display","none");
						$(this).attr("class","active");
						$(".ulClass").find("div").eq($(this).index()).css("display","block");						
					})
					$(".ulClass").append(oLi);
					oLi.mouseout(function(){
						$(".ulClass").find("div").hover(function() {
							$(this).css("display","block");
						}, function() {
							$(this).css("display","none");
						});
						$(".ulClass").find("div").css("display","none");
					})
				}
				for(var i = 0; i < arr.length - 1; i++){
					aDiv = $("<div></div>");
					$(".ulClass").append(aDiv);		
				}

				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content1;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulClass").find("div").eq(0).append(oUl1);
				}
				var arr2 = JSON.parse(data).content2;
				var oLi2 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr2.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr2[i].title);
					$(oLi2).append(oA);
					$(oUl1).append(oLi2);
					$(".ulClass").find("div").eq(0).append(oUl1);
				}
				var arr3 = JSON.parse(data).content3;
				var oLi3 = $("<li></li>");
				for(var i = 0; i < arr3.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr3[i].title);
					$(oLi3).append(oA);
					$(oUl1).append(oLi3);
					$(".ulClass").find("div").eq(0).append(oUl1);
				}

				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content4;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulClass").find("div").eq(0).append(oUl2);
				}
				var arr5 = JSON.parse(data).content5;
				var oLi5 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr5.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr5[i].title);
					$(oLi5).append(oA);
					$(oUl2).append(oLi5);
					$(".ulClass").find("div").eq(0).append(oUl2);
				}
				var arr6 = JSON.parse(data).content6;
				var oLi6 = $("<li></li>");
				for(var i = 0; i < arr6.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr6[i].title);
					$(oLi6).append(oA);
					$(oUl2).append(oLi6);
					$(".ulClass").find("div").eq(0).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr7 = JSON.parse(data).content7;
				for(var i = 0; i < arr7.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr7[i].title);
					
					$(oP).append(oA);
					$(".ulClass").find("div").eq(0).append(oP);
				}

				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content8;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulClass").find("div").eq(1).append(oUl1);
				}
				var arr2 = JSON.parse(data).content9;
				var oLi2 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr2.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr2[i].title);
					$(oLi2).append(oA);
					$(oUl1).append(oLi2);
					$(".ulClass").find("div").eq(1).append(oUl1);
				}
				var arr3 = JSON.parse(data).content10;
				var oLi3 = $("<li></li>");
				for(var i = 0; i < arr3.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr3[i].title);
					$(oLi3).append(oA);
					$(oUl1).append(oLi3);
					$(".ulClass").find("div").eq(1).append(oUl1);
				}

				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content11;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulClass").find("div").eq(1).append(oUl2);
				}
				var arr5 = JSON.parse(data).content12;
				var oLi5 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr5.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr5[i].title);
					$(oLi5).append(oA);
					$(oUl2).append(oLi5);
					$(".ulClass").find("div").eq(1).append(oUl2);
				}
				
				var oP = $("<p class='oUl3'></p>")
				var arr13 = JSON.parse(data).content13;
				for(var i = 0; i < arr13.length; i++){				
					var oA = $("<a href='#'></a>");				
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr13[i].title);
					$(oP).append(oA);
					$(".ulClass").find("div").eq(1).append(oP);
				}
				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content14;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulClass").find("div").eq(2).append(oUl1);
				}
				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content15;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulClass").find("div").eq(2).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr16 = JSON.parse(data).content16;
				for(var i = 0; i < arr16.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr16[i].title);
					
					$(oP).append(oA);
					$(".ulClass").find("div").eq(2).append(oP);
				}
				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content17;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulClass").find("div").eq(3).append(oUl1);
				}
				var arr2 = JSON.parse(data).content18;
				var oLi2 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr2.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr2[i].title);
					$(oLi2).append(oA);
					$(oUl1).append(oLi2);
					$(".ulClass").find("div").eq(3).append(oUl1);
				}
				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content19;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulClass").find("div").eq(3).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr20 = JSON.parse(data).content20;
				for(var i = 0; i < arr20.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr20[i].title);
					
					$(oP).append(oA);
					$(".ulClass").find("div").eq(3).append(oP);
				}
				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content21;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulClass").find("div").eq(4).append(oUl1);
				}
				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content22;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulClass").find("div").eq(4).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr16 = JSON.parse(data).content23;
				for(var i = 0; i < arr16.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr16[i].title);
					
					$(oP).append(oA);
					$(".ulClass").find("div").eq(4).append(oP);
				}
				var oUl1 = $("<ul class='oUl1'></ul>")
				var arr1 = JSON.parse(data).content24;
				var oLi1 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr1.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr1[i].title);
					$(oLi1).append(oA);
					$(oUl1).append(oLi1);
					$(".ulClass").find("div").eq(5).append(oUl1);
				}
				var arr2 = JSON.parse(data).content25;
				var oLi2 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr2.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr2[i].title);
					$(oLi2).append(oA);
					$(oUl1).append(oLi2);
					$(".ulClass").find("div").eq(5).append(oUl1);
				}
				var oUl2 = $("<ul class='oUl2'></ul>");
				var arr4 = JSON.parse(data).content26;
				var oLi4 = $("<li class='oLi1'></li>");
				for(var i = 0; i < arr4.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr4[i].title);
					$(oLi4).append(oA);
					$(oUl2).append(oLi4);
					$(".ulClass").find("div").eq(5).append(oUl2);
				}
				var arr5 = JSON.parse(data).content27;
				var oLi5 = $("<li class='oLi2'></li>");
				for(var i = 0; i < arr5.length; i++){
					
					var oA = $("<a href='#'></a>");
					if(i == 0){
						$(oA).attr("class","titles");
					}
					oA.html(arr5[i].title);
					$(oLi5).append(oA);
					$(oUl2).append(oLi5);
					$(".ulClass").find("div").eq(5).append(oUl2);
				}
				var oP = $("<p class='oUl3'></p>")
				var arr7 = JSON.parse(data).content28;
				for(var i = 0; i < arr7.length; i++){				
					var oA = $("<a href='#'></a>");
					
					if(i == 0){
						$(oA).attr("class","title");
					}
					if(i%3 == 1){
						$(oA).attr("class","bor");
					}
					oA.html(arr7[i].title);
					
					$(oP).append(oA);
					$(".ulClass").find("div").eq(5).append(oP);
				}

			});
	
	$(window).scroll(function(){
		if($(window).scrollTop() < 140){
			$(".fixed").css("display","none")
		}
		if($(window).scrollTop() > 140){
			
			//$(".nav").find("ulId").find('div').css("display","none");
			$(".fixed").css("display","block");
		}

	});


	
})