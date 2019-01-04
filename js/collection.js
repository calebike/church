$(document).ready(function(){
$("input#subC").click(function(){
	
var Trans_Credit=$("#Trans_Credit").val();
var TransName=$("#TransName"). val();
var inputterName =$("#inputterName"). val();
var TransDate=$("#TransDate"). val();
var transid=$("#transid").val();

if(Trans_Credit !='' || TransName !='' || inputterName !='' || TransDate!='' ){
	
	$.ajax({
		type:'POST',
		url:'content/nameC.php',
		data:{
			Trans_Credit:Trans_Credit,
			TransName:TransName,
	        inputterName:inputterName,
			TransDate:TransDate,
			transid:transid
			
			
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
else if(Trans_Credit =='' || TransName=='' || inputterName =='' || TransDate =='' ){
	
	alert('All Fields are Mandatory');
	return false;
}


});
return false;
});


