<?
mysql_connect("localhost","root","") or die("Error connecting to server!");
mysql_select_db("church")or die("Error connecting to database");
 
echo '

    
<table style="align-text="center; font-size:8px" border="1" width="470px"  height="25px" cellpadding=""  BORDERCOLOR="ash">
<tr>
<th style="font-size:12px">#</th>
<th style="font-size:12px; cursor:pointer" >Account Name</th>
<th style="text-align:left; font-size:12px">Balances</th>
<th style="text-align:left; cursor:pointer; font-size:12px" ></th>


</tr>';
$count=1;
$member='member';
for ($x=1;$x<=30;$x++)
  $my=mysql_query("select * from  internaltable   ");
while($rop=mysql_fetch_assoc($my)){
	
	 $title=$rop['internal_Name'];
	$fname=$rop['Running_Amount'];
	$mname=$rop['type'];
	
	

	
echo '

<tr style="text-align:left;font-size:20px; height="25px" >
<td style="font-size:14px">';


echo $count;
echo '</td>';

echo '<td style="font-size:14px">';
//echo;
echo"<a  STYLE='cursor:pointer;'    id='$rop[type]'   > $title</a>";
echo '</td>';
echo '<td style="text-align:left; font-size:14px">';
echo '&nbsp;&nbsp;&nbsp;&nbsp;';
//echo ;
echo"<a  STYLE='cursor:pointer;float:right'  id='$rop[type]'   >$fname</a>";
echo '</td>';
//echo ;
echo '<td>';
 echo"<table>"; 
 echo ("<td><a href='#' style='width:70px;cursor:pointer;background-color:;text-align:right'
 onclick=smallpage('content/name2DD.php?id=$rop[type]')  >
 <img src='img/go.gif'></a></td> ");
 

echo "</table>";
echo '</td>';

echo '<tr>';

$count++;



}
echo '</table>';




//page navigation
//$res1=mysql_query("select * from registertable  ");
//$cou=mysql_num_rows($res1);
//$a=$cou/24;
//$a= ceil($a);
//echo "<br>";echo "<br>";
//echo "<center>";echo "&nbsp";
// for($b=1;$b<=$a;$b++)
// {

 
 //}



?>

