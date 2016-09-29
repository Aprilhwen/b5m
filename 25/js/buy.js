$(function(){
	ajax("get", "json/buy.json", "", function(data){
		var arr = JSON.parse(data)._data;
		for(var i = 0; i < arr.length; i++){
			var oLi = $("<li></li>");
			var oImg = $("<img/>");
			var oA1 = $("<a class='tit' href='#'></a>");
			var oA2 = $("<a class='pre' href='#'></a>");
			var oSpan1 = $("<span class='price'></span>");
			var oA3 = $("<a class='btn' href='#'>立即购买</a>")

			oImg.attr("src",arr[i].image)
			$(oA1).html(arr[i].title);
			$(oA2).html(arr[i].preview);
			$(oSpan1).html(arr[i].price);
			
			$("#buy_ul").append(oLi);
			$(oLi).append(oImg);
			$(oLi).append(oA1);
			
			$(oLi).append(oA2);
			$(oLi).append(oSpan1);
			$(oLi).append(oA3);
		}
	})

//=============================================================倒计时
	var day1 = new Date(2016,08,28,24);	
	var day2 = new Date();
	var sum1 = day1.getTime();
	var sum2 = day2.getTime();
	var i = Math.abs(sum1 - sum2);
	var unit = document.getElementById('unit');
	var decada = document.getElementById('decada');
	var unit1 = document.getElementById("unit1");
	var decada1 = document.getElementById('decada1');
	var unit2 = document.getElementById("unit2");
	var decada2 = document.getElementById('decada2');
	var tag = setInterval(function(){	
		var sec = getNum(i % 60);
		var min = getNum(parseInt(i / 60) % 60);
		var hour = getNum(parseInt(i / 3600) % 24);
		unit.innerHTML = hour % 10;
		decada.innerHTML = parseInt(hour / 10);
		unit1.innerHTML = min % 10;
		decada1.innerHTML = parseInt(min / 10)
		unit2.innerHTML = sec % 10;
		decada2.innerHTML = parseInt(sec / 10)
		i--;
	},1000);

	function getNum(num){
		if(num < 10){
			return "0" + num;
		}else{
			return num;
		}
	}
})