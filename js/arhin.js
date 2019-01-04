$(document).ready(function(){
$("#main").load('content/table.html');
$("div#go li a").click(function(){
	$("#main1").hide();
var page=$(this).attr('href');
$("#main").load('content/'+ page +'.html');
$("#main1").hide();
return false;
});
$("div#NavE  a").click(function(){
	
var page=$(this).attr('href');
$("#main").load('content/Enquires/'+ page +'.html');
$("#main1").hide();
return false;

});
});


