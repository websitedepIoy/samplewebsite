function login(){
	 
	var username = document.getElementById("username").value;
	 
	var password = document.getElementById("password").value;
	
	var account = new Array();
	account = [
    ['peter12345', 'peteris12345', 'Singapore', 'user' ],
    ['John12345', 'Johnis12345', 'USA', 'user'],
    ['adminalex', 'thisisadminpassword', 'Singapore', 'admin']
     ];
	 
	 
	
	if (username == account[0][0]&& password == account[0][1]) {
		role = account[0][3]; 
		if (role=="admin")
			window.location.href = "adminmainpage.html";
		else if (account[0][2]=="Singapore")
			window.location.href = "sgmainpage.html";
		else if (account[0][2]=="USA")
			window.location.href = "usmainpage.html";
			
	} 
		
	else if(username == account[1][0]&& password == account[1][1]){
		role = account[1][3]; 
		if (role=="admin")
			window.location.href = "adminmainpage.html";
		else if (account[1][2]=="Singapore")
			window.location.href = "sgmainpage.html";
		else if (account[1][2]=="USA")
			window.location.href = "usmainpage.html";
	} 
	
	else if (username == account[2][0]&& password == account[2][1]){
		role = account[2][3]; 
		if (role=="admin")
			window.location.href = "adminmainpage.html";
		else if (account[2][2]=="Singapore")
			window.location.href = "sgmainpage.html";
		else if (account[2][2]=="USA")
			window.location.href = "usmainpage.html";
	} 
	 
	
	else 
		alert("Make sure username and password is correct")
	
	 
}