var myDate = new Date();
var day = myDate.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
	document.write("Today is: "+daylist[day]);
	document.write("<br/>");
var hours = myDate.getHours(); 
var ampm = hours >= 12 ? 'PM' : 'AM'; 
	hours = hours % 12; 
	hours = hours ? hours : 12; 
var minutes = myDate.getMinutes(); 
	minutes = minutes < 10 ? '0' + minutes : minutes; 
var myTime = hours + " " + ampm + " : " + minutes +  
	" : " + myDate.getMilliseconds(); 
		document.write("\tCurrent time is : " + myTime);