

var buscador = $("#tabla").DataTable();

$("#caja-busqueda").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#caja-busqueda").val() == ""){
        $(".contenido-de-tabla").fadeOut(300);
    }else{
        $(".contenido-de-tabla").fadeIn(300);
    }
})


$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});