$("button").click(function(){
    //obter um article e esconder ele

    let articicleID = $(this).attr("name");
    $(articicleID).toggle();
});

$("#fade").click(function(){
    $(this).next().fadeToggle();
});

$("#slide").click(function(){
    $(this).next().slideToggle(4000); //velocidade em milisegundo p aparecer
});

$("h5:last").click(function(){
    $(this).parent().toggleClass("bg-danger");
});