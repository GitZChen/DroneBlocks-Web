var isCodeViewOpen = false;

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {media: 'blockly/media/',
     toolbox: document.getElementById('toolbox'),
      zoom:{controls: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
        scaleSpeed: 1.2}});

var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace); // Added to resize when code view is clicked
};
window.addEventListener('resize', onresize, false);
onresize();

function getMobileOS() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ) {
    return 'iOS';
  }
  else if( userAgent.match( /Android/i ) ) {
    return 'Android';
  }
  else {
    return 'unknown';
  }
}

function previewMission() {
  
  var code = 'var mission="";'
  code += Blockly.JavaScript.workspaceToCode(workspace);
  code = eval(code);
  
  var os = getMobileOS();
  
  if(os == 'iOS') {
    
    window.webkit.messageHandlers.observe.postMessage(code);
    
  } else if(os == 'Android') {

  	Android.confirmMission(code);
    
  } else {
    
    $("#mapPreviewModal").html("<iframe src='map_preview.html?code=" + escape(code) + "' width='100%' height='100%'></iframe>");
    $("#mapPreviewModal").openModal();
    
  }
  
}

// Called from the map preview iframe
function getMapPreviewCode() {
  var code = 'var mission="";'
  code += Blockly.JavaScript.workspaceToCode(workspace);
  code = eval(code);
  return code;
}

function toggleCodeView() {
  if(!isCodeViewOpen) {
    isCodeViewOpen = true;
    $("#blocklyArea").removeClass("full");
    $("#blocklyArea").addClass("half");
    $("#codeView").removeClass("hidden");
    $("#codeView").addClass("block");
    $("#codeViewButton a").html("X");
    $("#code").html(PR.prettyPrintOne(Blockly.Python.workspaceToCode(workspace)));
    $("#showCode").text("Hide Mission Code");
  } else {
    $("#showCode").text("Show Mission Code");
    closeCodeView();
  }
  
  // Call to redraw the view
  onresize();
  
}

function closeCodeView() {
  isCodeViewOpen = false;
  $("#blocklyArea").removeClass("half");
  $("#blocklyArea").addClass("full");
  $("#codeView").addClass("hidden");
  $("#codeViewButton a").html("{ Code }");
}

var blockIndex = 0;

function highlightBlock(id) {
  var id = parseInt(id); // This is the index of the waypoint block we're highlighting
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  
  // Now let's loop until we find the next waypoint
  for(var i=blockIndex; i<=blocks.length; i++) {
    var type = blocks[i].type;
    
    blockIndex++;
    
    if(type == "takeoff" || type == "fly_forward" || type == "change_altitude" || type == "land") {
      blocks[i].select();
      
      if(type == "land") {
        blockIndex = 0; // Reset the block index
      }
      
      break;
    }
  }
}

function highlightBlockFromAndroid(id) {
  var id = parseInt(id);
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  blocks[id].select();
}

// Listen for workspace changes and save blocks
function saveBlocks() {
  BlocklyStorage.backupBlocks_(Blockly.getMainWorkspace());
  
  if(isCodeViewOpen) {
    document.getElementById("code").innerHTML = PR.prettyPrintOne(Blockly.Python.workspaceToCode(workspace));
  }
  
  // Update text field for debugging
  //document.getElementById("textarea").value = Blockly.JavaScript.workspaceToCode(workspace);
}

// Save the blocks in local storage when dragged onto the canvas
workspace.addChangeListener(saveBlocks);

// Initialize some elements
$(document).ready(function() {
  setTimeout(function() {
    
    // Let's detect iphone and make the category blocks shorter
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Let's reduce the padding to 5px for the category blocks
    // Not the prettiest way but we'll go with it for now
    if(userAgent.match( /iPhone/i )) {
      $("div#\\:1").css("cssText", "padding: 3px !important");
      $("div#\\:2").css("cssText", "padding: 3px !important");
      $("div#\\:3").css("cssText", "padding: 3px !important");
      $("div#\\:4").css("cssText", "padding: 3px !important");
      $("div#\\:5").css("cssText", "padding: 3px !important");
      $("div#\\:6").css("cssText", "padding: 3px !important");
      $("div#\\:7").css("cssText", "padding: 3px !important");
      $("div#\\:8").css("cssText", "padding: 3px !important");
    }
  
    $("#codeView").addClass("hidden");
    
    $("#newMission").click(function() {
      newMission();
    });
  
    $("#previewMission").click(function() {
      previewMission();
    });
  
    $("#showCode").click(function() {
      toggleCodeView();
    });
  
    $("#saveMission").click(function() {
      
      // Clear out the mission title from the dialog
      $("#title").text("");
      
      // We only prompt on the first save of the mission
      if(missionId == null) {
        
        // Update the save text in the modal
        var h6 = $("#saveMissionModal").find("h6");
        h6.text("Please enter a mission title below and click SAVE");
        h6.css({"color": "black"});
        
        $('#saveMissionModal').openModal();
      } else {
        saveMission();
      }
      
    });
    
    // Save mission as a new one
    $("#saveMissionAs").click(function() {
      
      // Null out the mission id so a new one will be created
      missionId = null;
      
      // We need to figure out what to do if the user hits the cancel button
      $('#saveMissionModal').openModal();
      
    });
    
    $("#saveModal").click(function() {
      saveMission();
    });
  
    $('.button-collapse').sideNav({
      edge: 'right',
      closeOnClick: true
    });
  
    $("#logout").click(function() {
      logout();
    });
    
    $("#login").click(function() {
      login();
    });
  
    // Log the user in if necessary
    initAuth();
    
    // Let's setup the block canvas
    // See if this is a shared mission
    if(getUrlParam("share") != null || getUrlParam("view") != null) {
  
      // This is local and not a global
      var id = getUrlParam("missionId");
      var missionsRef = ref.child("droneblocks/missions/" + id);
      
      // Update the mission id global so this mission can be updated
      missionId = id;
      
      missionsRef.once("value", function(snapshot) {
        
        var xml = Blockly.Xml.textToDom(snapshot.val().missionXML);
        Blockly.Xml.domToWorkspace(xml, workspace);
        
        $("#missionTitle").text(snapshot.val().title);

      });
      
    // Load last set of blocks from local storage
    } else {
      
      window.setTimeout(BlocklyStorage.restoreBlocks, 1000);
  
    }
  
  }, 1000); // Let's remove this delay later
  
});

// Utility function to get url param
function getUrlParam(param) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === param) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}