document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form field values
    const name = document.getElementById("name").value;
    const regNumber = document.getElementById("regNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const programme = document.getElementById("programme").value;
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;
    const email = document.getElementById("email").value;
    const areaOfInterest = document.getElementById("areaOfInterest").value;
    const cgpa = document.getElementById("cgpa").value;
  
    // Validate fields
    if (name === "" || regNumber === "" || password === "" || confirmPassword === "" || dob === "" || age === "" || gender === null || programme === "" || year === "" || semester === "" || email === "" || areaOfInterest === "" || cgpa === "") {
      alert("Please fill out all the fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    const dobPattern = /^\d{1,2}\/\d{1,2}\/\d{2}$/;
    if (!dob.match(dobPattern)) {
      alert("DOB must be in dd/mm/yy format.");
      return;
    }
  
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Invalid email address.");
      return;
    }
  
    // All validations passed, proceed with form submission (not implemented here)
    // You can submit the form data to the server or perform further actions here
    alert("Registration successful!");
  });
  