$(document).ready(function() {
	var offsetTop = $(".sidebar").offset().top;
	console.log("offsetTop : "+offsetTop);
	
	var firstScrollPosition = $(window).scrollTop();
	console.log("firstScrollPosition : "+firstScrollPosition);

	var sidebarOuterHeight = $(".sidebar").outerHeight();
	console.log("sidebarOuterHeight : "+sidebarOuterHeight);

	var header_sidebar = offsetTop + sidebarOuterHeight;

	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	console.log("windowHeight "+windowHeight);
	console.log("documentHeight "+documentHeight);
	// console.dir(window);

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);

		if(scrollTop > header_sidebar){
			$(".sidebar").css({
				"position": "absolute",
				"top": "10px"
			});
		}else{
			$(".insider-box1").css("position","static");
		}
	});

	// if(2 > 1){
	// 	alert("It works");
	// }
	
});