
/* Register password*/
    function Validate() {
      var password = document.getElementById("myInput").value;
      var confirmPassword = document.getElementById("psw2").value;
      if (password != confirmPassword) {
          alert("Passwords do not match.");
              return false;
      }
      else{
          alert("Register Successful");
          return true;
          }  
      }

/*login*/
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  // login email n password
function myfunction4() {
    var username = document.getElementById('username');
    var user = "sweetface@gmail.com";
    var password = document.getElementById('myInput');
    var pass = "sweetface123";
    if (username.value != user) {
        alert("Please enter a registered email and password!!");
        return false;
    }
    else if (password.value != pass){
        alert("Please enter a registered email and password!!");
        return false;
    }
    else {
        return true;
    }
    
}