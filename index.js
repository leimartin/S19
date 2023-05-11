// Main Activity (230511)
// MARTIN, Katryna Lei V.
// 2nd Year BSCS - AN22

// 3 global variables w/o init
let usename;
let password;
let role;

// console log the message "Hello World" to ensure that the script file is properly associated with the html file
console.log('Hello World!')

function login() {
	// user input section
	username = prompt('Enter username: ');
	password = prompt('Enter password: ');
	role = prompt('Enter role: ');

	/* check 
		if the username is an empty string or null or 
		if the password is an empty string or null or 
		if the role is an empty string or null */

	if(username==="" || username===null || 
		password==="" || password===null||
		role==="" || role===null) {
		// alert to inform the user that their input should not be empty
		alert("Warning!\n\nUsername/Password/Role should not be empty!");
	} else {
		switch(role.toLowerCase()) {
			case "admin": 
				alert("Welcome back to the class portal, admin!");
				break;
			case "teacher": 
				alert("Thank you for logging in, teacher!");
				break;
			case "student": 
				alert("Welcome to the class portal, student!");
				break;
			default: 
				alert("Role out of range.");
		}
	}
		
}

// function that takes 4 arguments
function average(n1, n2, n3, n4) {
	// calculate its average
	avg = Math.round((n1 + n2 + n3 + n4) / 4);

	// checking if the Math.round is working
	console.log("Average: " + avg)

	// log a message accdg to the calculated average
	if(avg <= 74) {
		console.log("Hello, student, your average is " + avg + ". The letter equivalent is F.")
	} else if(avg >= 85 && avg <= 89) {
		console.log("Hello, student, your average is " + avg + ". The letter equivalent is B.")
	} else if(avg >= 90 && avg <= 95) {
		console.log("Hello, student, your average is " + avg + ". The letter equivalent is A.")
	} else if (avg > 96) {
		console.log("Hello, student, your average is " + avg + ". The letter equivalent is A+.")
	}
}

// calling the login function
login();
// inserting a space to make it readable
console.log();
// calling the average function along with its 4 numbers as arguments
average(96, 97, 78, 85);