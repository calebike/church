$(document).ready(function(){
$("input#subT").click(function(){
	var amt=$("#amt").val();
	var fname=$("#fname").val();
	var transdate=$("#transdate").val();
	var contact=$("#contact").val();
	var transid=$("#transid").val();
	
	
	if(amt !='' || fname !='' || contact !='' || transdate !=''){
		$.ajax({
		type:'POST',
		url:'content/name2TT.php',
		data:{
			amt :amt,
			fname:fname,
			contact:contact,
			transdate:transdate,
			transid:transid
			//pass:pass
			},
		success:function(data){
			
			$("#tithe").html(data);
			//$("#ind").load('home.html');
			$("#tabs").hide();
			//$("#foot").hide();
			reset(0);
			return false;
		}
			
			
		});
		
		
	}else if( amt =='' || fname ==''){
	
	alert('A Mandatory Field');
	return false;
	}
});
return false;
});



