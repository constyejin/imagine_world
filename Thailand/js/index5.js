$(function(){
    
/*-------------- menu -------------*/
    
    $(".fa-bars").click(function(){
        $(".menu").animate({right:"0"},500);
    });
    $(".fa-times").click(function(){
        $(".menu").animate({right:"-550px"},500);
    });
    
    $(".sub").hide();
    $(".main_menu > li").click(function(){
       if($(this).hasClass("active")== false){
           $(".main_menu > li").removeClass("active");
			$(".sub").slideUp();
			$(this).addClass("active");
			$(this).next().slideDown();
       }else {
           $(this).removeClass("active");
			$(this).next().slideUp();
       } 
    });
        
/*-------------- slide img -------------*/
	
	var i = 1;
	var wd = $(".slide_img li").width();
	var $current = $("#slide1").addClass("on");
	
	$(".slide_btn li").click(function(){
		var a = $(this).index();
		console.log("a :" + a);
		$(".slide_btn li").removeClass("on");
		$(this).addClass("on");
		firstImg();
	});
	
	function firstImg(num){
		$(".slide_img").animate({marginLeft : "-" + wd + "px"},1200,function(){
			$(".slide_img li:first").appendTo(".slide_img");
			$(".slide_img").css({marginLeft : "0px"})
			var num = $(".slide_img img").attr("alt").substr(3,1);
			//console.log(num);
			$current.removeClass("on");
			$current = $("#slide" + num).addClass("on");
		});	
	};
	function secondImg(num){
		$(".slide_img li:last").appendTo(".slide_img");
		$(".slide_img").css({marginLeft : "-" + wd + "px"});
		$(".slide_img").animate({marginLeft : "0px"});
		var num = $(".slide_img img").attr("alt").substr(3,1);
		//console.log(num);
		$current.removeClass("on");
		$current = $("#slide" + num).addClass("on");
	};

	$("#slide1").click(function(){
		clearInterval(interval);
		secondImg(i);
	});
	$("#slide2").click(function(){
		clearInterval(interval);
		firstImg(i);
	});

	var interval = setInterval(function(){
		firstImg(i);
	},4000);
	
	$(".slide_img, .slide_btn").hover(function(){
		clearInterval(interval);
	},function(){
		interval = setInterval(function(){
			firstImg(i);
		},4000)
	});
  
    
/*-------------- section hover-------------*/
    
        var result = "true"
    $(".imgHover").css({opacity : "0.5"});
    
	$("#seemore1").click(function(){
		if(result == "true"){
           result = "false";
	       $(".sub_img_1").stop().animate({left: "300px"},500 , "swing");
           $(".side_text1").stop().animate({left:"-300px"},500, "swing");
	    }else{
            result = "true";
            $(".sub_img_1").stop().animate({left: "0"},500 , "easeInBack");
            $(".side_text1").stop().animate({left:"0"},500, "easeInBack");
	    }
	});
	
    $("#seemore2").click(function(){
		if(result == "true"){
           result = "false";
	       $(".sub_img_2").stop().animate({right: "300px"},500,"swing");
           $(".side_text2").stop().animate({right:"-300px"},500, "swing");
	    }else{
            result = "true";
            $(".sub_img_2").stop().animate({right: "0"},500 , "easeInBack");
            $(".side_text2").stop().animate({right:"0"},500, "easeInBack");
	    }
	});
    
    $("#seemore3").click(function(){
        if(result == "true"){
            result = "false";
            $(".sub_img_3").stop().animate({left: "300px"},500,"swing");
            $(".side_text3").stop().animate({left:"-300px"},500, "swing");
        }else{
            result = "true";
            $(".sub_img_3").stop().animate({left: "0"},500 , "easeInBack");
            $(".side_text3").stop().animate({left:"0"},500, "easeInBack");
        }
    });
    
     $("#seemore4").click(function(){
		if(result == "true"){
           result = "false";
	       $(".sub_img_4").stop().animate({right: "300px"},500,"swing");
           $(".side_text4").stop().animate({right:"-300px"},500, "swing");
	    }else{
            result = "true";
            $(".sub_img_4").stop().animate({right: "0"},500, "easeInBack");
            $(".side_text4").stop().animate({right:"0"},500, "easeInBack");
	    }
	});
	
    $(".imgHover").hover(function(){
        $(this).stop().animate({opacity: "1"},500);
    },function(){
        $(this).stop().animate({opacity: "0.5"},1000);
    });
	
});