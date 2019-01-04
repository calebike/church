$(document).ready(function(){
$("input#submD").click(function(){
	
var regnumber=$("#regnumber").val();
//var pass=$("#pass"). val();
//var dataString='Uname='+Uname+'loggin='+loggin;
if(regnumber  !=''){
	
	$.ajax({
		type:'POST',
		url:'content/name2D.php',
		data:{
			regnumber :regnumber 
			//pass:pass
			},
		success:function(data){
			
			$("#Dues").html(data);
			//$("#ind").load('home.html');
			$("#tabs").hide();
			//$("#foot").hide();
			
			return false;
		}
		
	
		
		
	});
		
	
}
else if(regnumber == ''){
	
	alert('Mandatory Field');
	return false;
}


});
return false;
});



