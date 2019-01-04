$(document).ready(function(){
$("input#subD").click(function(){
	var amt=$("#amt").val();
	var fname=$("#fname").val();
	var duesdate=$("#duesdate").val();
	var contact=$("#contact").val();
	var duestype=$("#duestype").val();
	var transid=$("#transid").val();
	
	
	if(amt !='' || fname !='' || contact !='' || duestype !='' || duesdate !=''){
		$.ajax({
		type:'POST',
		url:'content/name2TTD.php',
		data:{
			amt :amt,
			fname:fname,
			contact:contact,
			duesdate:duesdate,
			duestype:duestype,
			transid:transid
			//pass:pass
			},
		success:function(data){
			
			$("#Dues").html(data);
			//$("#ind").load('home.html');
			$("#tabs").hide();
			//$("#foot").hide();
			reset(0);
			return false;
		}
			
			
		});
		
		
	}else if( amt ==''  || duestype =='' || duesdate =='' ){
	
	alert('A Mandatory Field');
	return false;
	}
});
return false;
});



