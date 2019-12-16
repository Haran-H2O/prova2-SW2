
var bounce = new Bounce();

bounce.scale({
from: { x: 1, y: 2 },
to: { x: 1, y: 1 },
stiffness: 1
});
//bounce.applyTo($(".animation-target"));

// var bounceRebounce = new Bounce();
// bounceRebounce.translate({
//     from: { x: 100, y: 0 },
//     to: { x: 0, y: 0 }
//     });
//     bounceRebounce.applyTo($(".animation-target2"));


// function teste(){
//     if( $("#teste").hasClass("animation-target")){
//         $("#teste").addClass("animation-target2");
//         $("#teste").removeClass("animation-target");
//     } else {
//         $("#teste").addClass("animation-target");
//         $("#teste").removeClass("animation-target2");
//     }
    
// }
$("#botaoEntrar").click(function(){
    $("#perguntaEntrada").hide();
    $("#conteudo").show();
});

//row1

$("#witcher").mouseover(function(){
    $("#witcher").addClass("animation-target");
});

$("#witcher").mouseout(function(){
    $("#witcher").removeClass("animation-target");
});

$("#warframe").mouseover(function(){
    $("#warframe").addClass("animation-target");
});

$("#warframe").mouseout(function(){
    $("#warframe").removeClass("animation-target");
});

$("#destiny").mouseover(function(){
    $("#destiny").addClass("animation-target");
});

$("#destiny").mouseout(function(){
    $("#destiny").removeClass("animation-target");
});

$("#farcry").mouseover(function(){
    $("#farcry").addClass("animation-target");
});

$("#farcry").mouseout(function(){
    $("#farcry").removeClass("animation-target");
});

//row2

$("#nioh").mouseover(function(){
    $("#nioh").addClass("animation-target");
});

$("#nioh").mouseout(function(){
    $("#nioh").removeClass("animation-target");
});

$("#monster").mouseover(function(){
    $("#monster").addClass("animation-target");
});

$("#monster").mouseout(function(){
    $("#monster").removeClass("animation-target");
});

$("#souls").mouseover(function(){
    $("#souls").addClass("animation-target");
});

$("#souls").mouseout(function(){
    $("#souls").removeClass("animation-target");
});

$("#borderlands").mouseover(function(){
    $("#borderlands").addClass("animation-target");
});

$("#borderlands").mouseout(function(){
    $("#borderlands").removeClass("animation-target");
});