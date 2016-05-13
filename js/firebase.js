var isUserLoggedIn = false;
var userId;

var ref = new Firebase("https://fiery-inferno-4972.firebaseio.com");
  
// Save mission logic
function saveMission() {
  ref.onAuth(function(authData) {
    
    if (isUserLoggedIn) {
      
      var missionsRef = ref.child("droneblocks/missions");
      var missionXML = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
      
      missionsRef.push().set({
        mission: missionXML,
        userId: userId
      });
      
      alert("done saving");
    
    // This will prompt the user to login
    } else if (!authData) {
      ref.authWithOAuthRedirect("google", function (error) {
        // Need to determine what to do with this error
      });
    
    
    } else {
      
      // Let's create or update the account
      
      
      
    }
  });
}

function initAuth() {

  var authData = ref.getAuth();

  if (authData) {
    
    // Store the user auth data
    ref.child("droneblocks/users").child(authData.uid).set({
      provider: authData.provider,
      name: authData.google.displayName,
      profileImage: authData.google.profileImageURL,
      email: authData.google.email || ""
    });
    
    // Populate user name
    $("#userInfo").text("Hi " + authData.google.displayName.split(" ")[0] + "!");
    isUserLoggedIn = true;
    userId = authData.uid;
    $("#logout").show();

  } else {
    
    $("#logout").hide();
    // User is logged out

  }

}

function logout() {
  $("#nav-mobile").toggle();
  $("#userInfo").text("");
  ref.unauth();
}