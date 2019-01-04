$(document).ready(function(){
$("input#loggin").click(function(){
	
var Uname=$("#Uname").val();
var pass=$("#pass"). val();
//var dataString='Uname='+Uname+'loggin='+loggin;
if(Uname !='' || pass !=''  ){
	
	$.ajax({
		type:'POST',
		url:'content/name.php',
		data:{
			Uname:Uname,
			pass:pass
			},
		success:function(data){
			
			$("#ind").html(data);
			//$("#ind").load('home.html');
			$("#hog").hide();
			$("#foot").hide();
			
			return false;
		}
		
		}
		
		
	});
		
	
}
else if(Uname == '' || pass ==''){
	
	alert('All Fields are Mandatory');
	return false;
}


});
return false;
});



