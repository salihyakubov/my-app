
$(".salad").hide()
$(".deserts").hide()
$(".drinks").hide()
$(".dishes-link").css("color","#E1B168")


$(".salad-link").on("click", function(){
    $(".menu").css("height", "1420px")
    $(".salad-link").css("color","#E1B168")
    $(".deserts-link").css("color","black")
    $(".dishes-link").css("color","black")
    $(".drinks-link").css("color","black")
    $(".dishes").hide(200)
    $(".deserts").hide(200)
    $(".drinks").hide(200)
    $(".salad").show(500)
})
$(".deserts-link").on("click", function(){
    $(".menu").css("height", "1420px")
    $(".deserts-link").css("color","#E1B168")
    $(".salad-link").css("color","black")
    $(".drinks-link").css("color","black")
    $(".dishes-link").css("color","black")
    $(".dishes").hide(200)
    $(".drinks").hide(200)
    $(".salad").hide(200)
    $(".deserts").show(500)
})

$(".dishes-link").on("click", function(){
    $(".menu").css("height", "1420px")
    $(".deserts-link").css("color","black")
    $(".salad-link").css("color","black")
    $(".drinks-link").css("color","black")
    $(".dishes-link").css("color","#E1B168")
    $(".drinks").hide(200)
    $(".salad").hide(200)
    $(".deserts").hide(200)
    $(".dishes").show(500)
})
$(".drinks-link").on("click", function(){
    $(".menu").css("height", "600px")
    $(".deserts-link").css("color","black")
    $(".salad-link").css("color","black")
    $(".drinks-link").css("color","#E1B168")
    $(".dishes-link").css("color","black")
    $(".salad").hide(200)
    $(".deserts").hide(200)
    $(".dishes").hide(200)
    $(".drinks").show(500)
})



