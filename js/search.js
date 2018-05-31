var buscador = $("#tabla").DataTable();

$("#caja-busqueda").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#caja-busqueda").val() == ""){
        $(".contenido-de-tabla").fadeOut(300);
    }else{
        $(".contenido-de-tabla").fadeIn(300);
    }
})