$(document).ready(function(){
$("input#submT").click(function(){
	
var regnumber =$("#regnumber").val();
//var pass=$("#pass"). val();
//var dataString='Uname='+Uname+'loggin='+loggin;
if(regnumber  !=''){
	
	$.ajax({
		type:'POST',
		url:'content/name2T.php',
		data:{
			regnumber:regnumber  
			//pass:pass
			},
		success:function(data){
			
			$("#tithe").html(data);
			//$("#ind").load('home.html');
			$("#tabs").hide();
			//$("#foot").hide();
			
			return false;
			reset(0);
		}
		
	
		
		
	});
		
	
}
else if(regnumber  == ''){
	
	alert('Mandatory Field');
	return false;
}


});
return false;
});



