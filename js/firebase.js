var isUserLoggedIn = false;
var userId;

var ref = new Firebase("https://fiery-inferno-4972.firebaseio.com");

function login() {
  ref.onAuth(function(authData) {
    if (!authData) {
      ref.authWithOAuthRedirect("google", function (error) {
      });
    }
  });
}
  
// Save mission logic
function saveMission() {
  ref.onAuth(function(authData) {
    
    if (isUserLoggedIn) {
      
      var missionsRef = ref.child("droneblocks/missions");
      var missionXML = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
      
      missionsRef.push({
        title: $("#title").val(),
        mission: missionXML,
        userId: userId,
        createdAt: Firebase.ServerValue.TIMESTAMP
      });
      
      var usersRef = ref.child("droneblocks/users/" + userId + "/missions");
      usersRef.push({
        title: $("#title").val()
      });
      
    // This will prompt the user to login
    } else if (!authData) {
      
      // Let's replace this with a toast
      alert("please login");
    }
  });
}

function initAuth() {

  var authData = ref.getAuth();

  // User is logged in
  if (authData) {
    
    // Let's determine if the user is new or existing
    var usersRef = ref.child("droneblocks/users");
    
    usersRef.child(authData.uid).once("value", function(snapshot) {
      
      // This user already exists so we'll just update their login time
      if(snapshot.val() !== null) {
        
        usersRef.child(authData.uid).update({
          loginAt: Firebase.ServerValue.TIMESTAMP
        })
        
      // User doesn't exist so let's create their entry
      } else {
        
        usersRef.child(authData.uid).set({
          provider: authData.provider,
          name: authData.google.displayName,
          profileImage: authData.google.profileImageURL,
          email: authData.google.email || "",
          createdAt: Firebase.ServerValue.TIMESTAMP
        });
        
      }
    });
    
    // Change the login button the user's name
    $("#login").html('<a href="#" id="userInfo" class="light-blue lighten-3 white-text">Hi ' + authData.google.displayName.split(" ")[0] + '!</a>');
    $("#login").removeClass("center-align");
    
    isUserLoggedIn = true;
    userId = authData.uid;
    $("#logout").show();

  // User is logged out
  } else {
    
    logout();

  }

}

function logout() {
  $(".button-collapse").sideNav("hide");
  $("#login").html('<span class="waves-effect waves-light btn z-depth-0 light-blue">Login</span>');
  $("#login").addClass("center-align");
  $("#logout").hide();
  $("#d1").hide();
  $("#d2").hide();
  $("#d3").hide();
  $("#saveMission").hide();
  $("#shareMission").hide();
  $("#myMissions").hide();
  
  ref.unauth();
}

/*
function getMissionsForUser() {
  var missionsRef = ref.child("droneblocks/missions");
  missionsRef.orderByChild() {
    
  });
}
*/