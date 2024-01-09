$(function(){
    var i = 1;
    var wd = $(".banner").width();
    var $current = $("#btn1").find("a");
    $current.addClass("on");
    
    function nextani(num){
        $(".banner > ul").stop().animate({marginLeft: "-" + wd + "px"},1000,function(){
            $(".banner > ul li:first").appendTo(".banner > ul");
            $(".banner > ul").css({marginLeft: "0px"});
            
            var num = $(".banner > ul li img").attr("src").substr(13,1);
            console.log(num);
            $current.removeClass("on");
            $current = $("#btn" + num).find("a");
            $current.addClass("on");
        })
    }
    
    $(".btn_right").click(function(){
        clearInterval(interval);
        nextani();
    })
    
    function prevani(){
        $(".banner > ul li:last").prependTo(".banner > ul");
        $(".banner > ul").css({marginLeft: "-" + wd + "px"});
        $(".banner > ul").stop().animate({marginLeft: "0px"},1000);
        
        var num = $(".banner > ul li img").attr("src").substr(13,1);
        console.log(num);
        $current.removeClass("on");
        $current = $("#btn" + num).find("a");
        $current.addClass("on");
    }
    $(".btn_left").click(function(){
        clearInterval(interval);
       prevani(); 
    });
    
    
    $(".circle ul li a").click(function(e){
        e.preventDefault();
        var i = $(this).parent().attr("id").substr(3,1);
        console.log( "i" + i);
        $(".banner > ul li").eq(1).find("img").attr("src","images/banner" + i + ".webp");
        nextani(i);
    });
    
    
    var interval = setInterval(function(){
        nextani();
    },3000)
    $(".banner > ul").hover(function(){
        clearInterval(interval);
    },function(){
        interval = setInterval(function(){
            nextani();
        },3000);
    });
});