$(document).ready(function(){
$("input#subR").click(function(){
$("#coll").hide();	
var title=$("#title").val();
var genu=$("#genu"). val();
var fname=$("#fname"). val();
var mname=$("#mname"). val();
var sname=$("#sname"). val();
var regtype=$("#regtype"). val();
var contact1=$("#contact1"). val();
var contact2=$("#contact2"). val();

if(title !='' || genu !='' || fname !='' || mname !='' || sname !='' || regtype !='' || contact1 !='' || contact2 !='' ){
	
	$.ajax({
		type:'POST',
		url:'content/nameR.php',
		data:{
			title:title,
			genu:genu,
			fname :fname,
		    mname :mname,
			sname :sname,
			regtype:regtype,
			contact1:contact1,
			contact2:contact2
			
			},
		success:function(data){
			//alert('it works');
			$("#nocoll").html(data);
			//$("#ind").load('home.html');
			$("#coll").hide();
			
			
			return false;
		}
		
		
	});
		
	
}
else if(title =='' || genu =='' || fname !=='' || mname =='' || sname =='' || regtype =='' ||contact1 =='' || contact2 !='' ){
	
	alert('All Fields are Mandatory');
	return false;
}


});
return false;
});


