$(document).ready(function(){
	
$("input#subIN").click(function(){
	var internal_Name=$("#internal_Name").val();
	var CreationDate=$("#CreationDate").val();
	
	if(internal_Name !='' || CreationDate !=''){
$.ajax({
	type:'POST',
	url:'content/nameIN.php',
	data:{
		internal_Name:internal_Name,
		CreationDate:CreationDate
	},
	success:function(data){
		
		$("#inter").html(data);
		$("#coll").hide();
		return false;
	}
	
	
});
		
	}
	else if(internal_Name =='')
	{
		alert("ALL Fields are Mandatory");
		return false;
	}
});
return false;
});

