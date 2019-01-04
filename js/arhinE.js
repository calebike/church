$(document).ready(function(){

$("div#gol li a").click(function(){
	$("#main11").load('Enquires/Enq.html');
	
var page=$(this).attr('href');
$("#main1").load('Enquires/'+ page +'.html');
$("#main11").hide();
return false;
});
});


