var isUserLoggedIn = false;
var ref = new Firebase("https://fiery-inferno-4972.firebaseio.com");
  
// Save mission logic
function saveMission() {
  ref.onAuth(function(authData) {
    
    if (isUserLoggedIn) {
    
      alert("user is logged in so let's save!");
    
    } else if (!authData) {
      ref.authWithOAuthRedirect("google", function (error) {
        // Need to determine what to do with this error
      });
    
    
    } else {
      
      // Let's create or update the account
      
      
      
    }
  });
}

var authData = ref.getAuth();

if (authData) {
  
  $("#userInfo").text("Hi " + authData.google.displayName.split(" ")[0] + "!");
  isUserLoggedIn = true;

} else {

  // User is logged out

}


