var ref = firebase.database().ref();
var userId;
var missionToBeDeleted;


$(document).ready(function() {
  
  console.log("document ready");
  
  $("#deleteMissionButton").click(function() {
    deleteMission();
  });
  
  firebase.auth().onAuthStateChanged(function(user) {
  
    console.log("auth state changed: " + new Date());
    
    if (user && !userId) {
    
      userId = user.uid;
    
      var usersRef = ref.child("droneblocks/users/" + userId + "/missions");
    
      usersRef.orderByChild("createdAt").on("child_added", function(snapshot) {
      
        var row = '<tr>';
        row += '<td style="padding-left: 25px"><a href="index.html?share=1&missionId=' + snapshot.key + '">' + snapshot.val().title + '</a></td>';
        row += '<td>' + new Date(snapshot.val().createdAt) + '</td>';
        row += '<td>';
        row += '<a href="#!" onClick="shareMission(\'' + snapshot.key +'\');"><i class="material-icons">share</i></a>';
        row += '&nbsp;&nbsp;&nbsp;&nbsp;';
        row += '<a href="#!" onClick="deleteMissionConfirm(\'' + snapshot.key +'\');"><i class="material-icons">delete</i></a>';
        row += '</td></tr>'
    
        $("#tbody").append(row);
    
      });
    
    // User is logged out
    } else {
    
      // TODO perhaps let them know they're logged out in the future instead of just redirecting
      
      document.location.href = "./index.html";
    
    }
  
  });
  
});

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

function shareMission(missionId) {
  $("#shareModal").openModal();
  
  $("#iPadShareLink").val("droneblocks://?missionId=" + missionId);
  
  $("#desktopShareLink").val("https://fiery-inferno-4972.firebaseapp.com?share=1&missionId=" + missionId);
}