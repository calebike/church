$(document).ready(function(){
$("input#subIT").click(function(){
var amt=$("#amt").val();
var quantity=$("#quantity").val();
var transdate=$("#transdate").val();
var transtype=$("#transtype").val();
var byname=$("#byname").val();

if(amt !=''  || quantity !='' ||  transdate !='' ||  transtype !=''|| byname !='' ){
$.ajax({
type:'POST',
url:'content/nameIT.php',
data:{
amt:amt,
quantity:quantity,
transdate:transdate,
transtype:transtype,
byname:byname 
},
success:function(data){
	$("#show").html(data);
	$("#hid").hide();
	return false;
	
}
});	
	
}else if(amt =='' ||  quantity =='' ||  transdate  =='' || transtype =='' || byname  ==''){
	
	alert("All Fields are Mandatory");
	return false;
	
}

});
return false;
});