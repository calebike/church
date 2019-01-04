$(document).ready(function(){
$("input#subB").click(function(){
	
var Trans_Credit=$("#Trans_Credit").val();
var TransName=$("#TransName"). val();
var TransDate=$("#TransDate"). val();
var inputterName=$("#inputterName"). val();
var transtype=$("#transtype").val();


if(Trans_Credit !='' || TransName !='' || TransDate !='' || inputterName !='' || transtype !='' ){
	
	$.ajax({
		type:'POST',
		url:'content/nameB.php',
		data:{
			TransName:TransName,
			Trans_Credit:Trans_Credit,
			TransDate:TransDate,
			inputterName:inputterName,
			transtype:transtype
			
			
			
			},
		success:function(data){
			//alert('it works');
			$("#nocoll").html(data);
			//$("#ind").load('home.html');
			$("#hh").hide();
			
			
			return false;
		}
		
		
	});
		
	
}
else if(Trans_Credit =='' || TransName =='' || TransDate =='' || inputterName =='' || transtype =='' ){
	
	alert('All Fields are Mandatory');
	return false;
}


});
return false;
});


