var isUserLoggedIn = false;
var missionId;
var userId;

var ref = firebase.database().ref();

function login() {
  
  // This was introduced because of Google auth requirements
  if(getMobileOS() == 'iOS') {
    
    // Send the login message to iOS
    window.webkit.messageHandlers.observe.postMessage("login");
    
    // Hide the side bar after button click
    $(".button-collapse").sideNav("hide");
    
  } else {
  
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("email");
    firebase.auth().signInWithRedirect(provider);
    
  }
}

// This gets called from iOS after token is received
function loginFromiOS(idToken) {
  var credential = firebase.auth.GoogleAuthProvider.credential(idToken);
  firebase.auth().signInWithCredential(credential).catch(function(error) {
    //Materialize.toast("Error with signinWithCredential", 3000);
  });
}

function initAuth() {
  
  firebase.auth().onAuthStateChanged(function(user) {
    
    // User is signed in
    if (user && !userId) {
      
      console.log("user is logged in");
      
      userId = user.uid;
      
      var usersRef = ref.child("droneblocks/users");
      
      usersRef.child(user.uid).once("value", function(snapshot) {
        
        // Check to see if we've stored this user before
        if(snapshot.val() !== null) {
        
          usersRef.child(user.uid).update({
            loginAt: firebase.database.ServerValue.TIMESTAMP
          })
        
        // User doesn't exist so let's create their entry
        } else {
          
          var providerData = user.providerData[0];
          
          usersRef.child(user.uid).set({
            uid: providerData.uid,
            providerId: providerData.providerId,
            displayName: providerData.displayName,
            photoURL: providerData.photoURL,
            email: providerData.email,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            loginAt: firebase.database.ServerValue.TIMESTAMP
          });
        
        }
        
      });
      
      // Change the login button with the user's name if it exists
      if (!user.providerData[0].displayName)
        $("#login").html('<a href="#" id="userInfo" class="light-blue lighten-3 white-text">Hi!</a>');
      else
        $("#login").html('<a href="#" id="userInfo" class="light-blue lighten-3 white-text">Hi ' + user.providerData[0].displayName.split(" ")[0] + '!</a>');
      
      $("#login").removeClass("center-align");
    
      isUserLoggedIn = true;
      
      $("#d1").show();
      $("#d2").show();
      $("#d3").show();
      $("#saveMission").show();
      $("#myMissions").show();
      $("#logout").show();
      
    // User is not logged in
    } else {
      
      console.log("user is logged out");
      
      logout();
      
    }
  });
  
}

function saveMission() {
  
  firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
    
      var missionXML = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
      
      // Make sure there is a mission title
      if(!$("#title").val()) {
        var h6 = $("#saveMissionModal").find("h6");
        h6.text("You must provide a mission title before saving");
        h6.css({"color": "red"});
        return
      }
      
      if (missionId == null) {
        
        var missionsRef = ref.child("droneblocks/missions");
        var missionsRefPush = missionsRef.push({
          title: $("#title").val(),
          missionXML: missionXML,
          userId: userId,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        });
        
        // Set the mission id before we save and so we can update this mission later
        missionId = missionsRefPush.key;
        
        var usersRef = ref.child("droneblocks/users/" + userId + "/missions/" + missionId);
        usersRef.set({
            title: $("#title").val(),
            createdAt: firebase.database.ServerValue.TIMESTAMP
        });
        
        // Set the mission title
        $("#missionTitle").text($("#title").val());
        
        Materialize.toast("Your mission has been created and saved", 3000);
        
      } else {
        
        var missionsRef = ref.child("droneblocks/missions/" + missionId);
        missionsRef.update({
          missionXML: missionXML
        });
        
        Materialize.toast("Your mission has been updated and saved", 3000);
        
      }
      
      // Close the modal after saving
      $('#saveMissionModal').closeModal();
      
    } else {
      
      console.log("user is logged out");
      
    }
    
  });
  
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
  //$("#shareMission").hide();
  $("#myMissions").hide();
  
  // Send the logout message to iOS
  if(getMobileOS() == "iOS") {
    window.webkit.messageHandlers.observe.postMessage("logout");
  }
  
  userId = '';
  firebase.auth().signOut();
}

function newMission() {
  missionId = null;
  $("#missionTitle").text("Untitled Mission");
  Blockly.getMainWorkspace().clear();
  
  // TODO: Add confirmation that the user wants to create a new mission
}