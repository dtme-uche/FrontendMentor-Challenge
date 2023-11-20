function myFunction() {
    // Get the value of the input field with 
    let firstName = document.getElementById("fst-name").value;
    let lastName = document.getElementById("lst-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    // Get the id of the hidden paragraph
    let text = document.getElementById("fst");
    let text2 = document.getElementById("lst");
    let email1 = document.getElementById("add");
    let pass1 = document.getElementById("psw");
  
  

    // First Name Validation
    if (firstName==null || firstName=="") {
        document.getElementById("fst-name").style.borderColor = "#ff7a7a";
        document.getElementById("fst-name").style.borderWidth = "2px";
        text.style.display = 'block';
        text.innerHTML = "First Name cannot be empty";
         
      } else {
        text.style.display = 'none';
      document.getElementById("fst-name").style.borderColor = "#b9b6d3";
      document.getElementById("fst-name").style.borderWidth = "1px";
      }

       // Last Name Validation
   if (lastName==null || lastName=="") {
    document.getElementById("lst-name").style.borderColor = "#ff7a7a";
    document.getElementById("lst-name").style.borderWidth = "2px";
    text2.style.display = 'block';
    text2.innerHTML = "Last Name cannot be empty";
  } else {
    text2.style.display = 'none';
    document.getElementById("lst-name").style.borderColor = "#b9b6d3";
    document.getElementById("lst-name").style.borderWidth = "1px";
  }

  // Email Validation
    if (!email.match(validRegex)) {
      document.getElementById("email").style.borderColor = "#ff7a7a";
      document.getElementById("email").style.borderWidth = "2px";
      email1.style.display = 'block';
      email1.innerHTML = "Looks like this is not an email";
    } else {
      email1.style.display = 'none';
      document.getElementById("email").style.borderColor = "#b9b6d3";
      document.getElementById("email").style.borderWidth = "1px";
    }
  
    // Password validation
    if (password==null || password=="") {
      document.getElementById("pass").style.borderColor = "#ff7a7a";
      document.getElementById("pass").style.borderWidth = "2px";
      pass1.style.display = 'block';
      pass1.innerHTML = "Password cannot be empty";
      return false
    } else {
      pass1.style.display = 'none';
      document.getElementById("pass").style.borderColor = "#b9b6d3";
      document.getElementById("pass").style.borderWidth = "1px";
    }

    // If all validations pass, the form can be submitted
    return true;
  
  }


// function validateForm() {
//   var username = document.getElementById("fst-name").value;
//   var lastName = document.getElementById("lst-name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("pass").value;

//   // Simple validation for first-name (not empty)
//   if (username === "") {
//     document.getElementById("fst").style.display = 'block';
//     document.getElementById("fst").innerHTML = "Username cannot be empty";
//     return false;
//   } else {
//     document.getElementById("fst").innerHTML = "";
//   }

//   // Simple validation for last-name (not empty)
//   if (lastName === "") {
//     document.getElementById("lst").style.display = 'block';
//     document.getElementById("lst").innerHTML = "Username cannot be empty";
//     return false;
//   } else {
//     document.getElementById("lst").innerHTML = "";
//   }

//   // Simple validation for email (must be a valid email format)
//   var emailRegex = /^\S+@\S+\.\S+$/;
//   if (!emailRegex.test(email)) {
//     document.getElementById("add").style.display = 'block';
//     document.getElementById("add").innerHTML = "Invalid email format";
//     return false;
//   } else {
//     document.getElementById("add").innerHTML = "";
//   }

//   // Simple validation for password (at least 6 characters)
//   if (password.length < 6) {
//     document.getElementById("psw").style.display = 'block';
//     document.getElementById("psw").innerHTML = "Password must be at least 6 characters";
//     return false;
//   } else {
//     document.getElementById("psw").innerHTML = "";
//   }

//   // If all validations pass, the form can be submitted
//   // return true;
// }