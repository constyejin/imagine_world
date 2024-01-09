$(function(){
	
// --- beer slide ---	
    var wd = $(".beers > ul li").width();
    console.log(wd);
    
    function nextani(){
        $(".beers ul").stop().animate({marginLeft: "-" + wd + "px"},function(){
            $(".beers ul li:first").appendTo(".beers ul");
            $(".beers ul").css({marginLeft: "0px"});
        })
    }
    $(".angle_right").click(function(){
        nextani();
    })
    
    function prevani(){
        $(".beers ul li:last").prependTo(".beers ul");
        $(".beers ul").css({marginLeft: "-" + wd + "px"});
        $(".beers ul").stop().animate({marginLeft: "0px"});
    }
    $(".angle_left").click(function(){
       prevani(); 
    });
});
	