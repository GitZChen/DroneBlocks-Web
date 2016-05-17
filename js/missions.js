var ref = new Firebase("https://fiery-inferno-4972.firebaseio.com");
var userId;
var missionToBeDeleted;

// This should be refactored at some point since it's redundant with the auth in firebase.js
$(document).ready(function(){
  
  var authData = ref.getAuth();
  
  // User is logged in
  if(authData) {
    
    userId = authData.uid;
    
    var usersRef = ref.child("droneblocks/users/" + userId + "/missions");
    
    usersRef.orderByChild("createdAt").on("child_added", function(snapshot) {
      
      var row = '<tr>';
      row += '<td style="padding-left: 25px"><a href="index.html?share=1&missionId=' + snapshot.key() + '">' + snapshot.val().title + '</a></td>';
      row += '<td>' + new Date(snapshot.val().createdAt) + '</td>';
      row += '<td>';
      row += '<a href="#"><i class="material-icons">share</i></a>';
      row += '&nbsp;&nbsp;&nbsp;&nbsp;';
      row += '<a href="#!" onClick="deleteMissionConfirm(\'' + snapshot.key() +'\');"><i class="material-icons">delete</i></a>';
      row += '</td></tr>'
      
      $("#tbody").append(row);
      
    });
    
    
    $("#deleteMissionButton").click(function() {
      deleteMission();
    });
    
    
  // User not logged in take them to the block page
  } else {
    
    document.location.href = "index.html";
    
  }
  
});

function getMissionsForUser() {
  var missionsRef = ref.child("droneblocks/missions");
  missionsRef.orderByChild({
    
  });
}

function deleteMissionConfirm(missionId) {
  missionToBeDeleted = missionId;
  $('#deleteMissionModal').openModal();
}

// Delete the mission
function deleteMission() {
  
  // Remove the mission from the user's mission list
  var usersRef = ref.child("droneblocks/users/" + userId + "/missions/" + missionToBeDeleted);
  usersRef.remove();
  
  // Remove the mission 
  var missionsRef = ref.child("droneblocks/missions/" + missionToBeDeleted);
  missionsRef.remove(function(error) {
    if(!error) {
      Materialize.toast("Mission deleted successfully", 3000);
    }
  });
  
  // For now let's just reload the page
  document.location.href = "missions.html";
  
}