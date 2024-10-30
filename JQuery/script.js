//syntax - $(selector),funtion()

//hide by selector
// $(document).ready(function(){
//     //code goes here
//     $("button").click(function(){
//         $("p").hide();
//     })
// })
//hide by id
// $(document).ready(function(){
//     //code goes here
//     $("button").dblclick(function(){
//         $("#test").hide();
//     })
// })

//hide by class
$(document).ready(function(){
    //code goes here
    $("button").click(function(){
        $("h1.new").hide();
    })
    $("#test").click(function(){
        $(this).hide();
    })
    // $("#mypara").mouseenter(function(){
    //     alert("Mouse Enter")
    // })
    // $("#mypara").mouseleave(function(){
    //     alert("Mouse leave")
    // })
    //hover
    // $("#mypara").hover(
    //     function(){
    //         alert("hover on")
    //     },
    //     function(){
    //         alert("hover out")
    //     }
    // )
    
    // $("input").focus(function(){
    //     $(this).css("background-color","pink")
    // })

    // $("input").blur(function(){
    //     $(this).css("background-color","green")
    // })


    // $("#hide").click(function(){
    //     $("p").hide(2000)
    // })

    // $("#show").click(function(){
    //     $("p").show(2000)
    // })

    $("#btn").click(function(){
        $("p").toggle();
    })

    $("#fadein").click(function(){
        $(".box1").fadeIn();
        $(".box2").fadeIn(1000);
        $(".box3").fadeIn(3000);
    })

    $("#fadeout").click(function(){
        $(".box1").fadeOut();
        $(".box2").fadeOut(1000);
        $(".box3").fadeOut(3000);
    })

    $("#togglebutton").click(function(){
        $(".box1").fadeToggle();
        $(".box2").fadeToggle(1000);
        $(".box3").fadeToggle(3000);
    })
    $(".container").click(function(){
        $(".content").slideDown();
    })
})
