let usename;
let password;
let role;

console.log('Hello World!')

function login() {
	username = prompt('Enter username: ');
	password = prompt('Enter password: ');
	role = prompt('Enter role: ');

	if(username==="" || username===null || 
		password==="" || password===null ||
		role==="" || role===null) {
		alert("Warning!\n\nUsername/Password/Role should not be empty!");
	} else {
		switch(role.toLowerCase()) {
			case "admin": 
				console.log("Welcome back to the class portal, admin!");
				break;
			case "teacher": 
				console.log("Thank you for logging in, teacher!");
				break;
			case "student": 
				console.log("Welcome to the class portal, student!");
				break;
			default: 
				console.log("Role out of range.");
		}
	}
		
}

login();
console.log();

function average(n1, n2, n3, n4) {
	avg = Math.round((n1 + n2 + n3 + n4) / 4);
	console.log("Average: " + avg)

	if(avg <= 74) {
		// show average here
		alert("Hello, student, your average is " + avg + ". The letter equivalent is F.")
	} else if(avg >= 85 && avg <= 89) {
		// show average here
		alert("Hello, student, your average is " + avg + ". The letter equivalent is B.")
	} else if(avg >= 90 && avg <= 95) {
		// show average here
		alert("Hello, student, your average is " + avg + ". The letter equivalent is A.")
	} else if (avg > 96) {
		// show average here
		alert("Hello, student, your average is " + avg + ". The letter equivalent is A+.")
	}
}

average(86, 92, 89, 96);
