$(document).ready(function(){	
	var $dl = $("#glossary").parent().next("dl");
	console.log($dl.innerHTML);
	$dl.children("dt").sort(function(a, b){
        return a.innerHTML.toUpperCase() > b.innerHTML.toUpperCase() ? 1 : -1;
    }).each(function() {
        var dd = $(this).nextUntil("dt");
        $(this).appendTo($(this).parent());
        dd.appendTo(dd.parent());
    });
});