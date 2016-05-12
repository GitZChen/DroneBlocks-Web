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
  
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  code = eval(code);
  
  var os = getMobileOS();
  if(os == 'iOS') {
    window.webkit.messageHandlers.observe.postMessage(code);
  } else if(os == 'Android') {
  	Android.confirmMission(Blockly.JavaScript.workspaceToCode(workspace));
  }
}

function toggleCodeView() {
  if(!isCodeViewOpen) {
    isCodeViewOpen = true;
    $("#blocklyArea").removeClass("full");
    $("#blocklyArea").addClass("half");
    $("#codeView").removeClass("hidden");
    $("#codeView").addClass("block");
    $("#codeViewButton a").html("X");
    $("#code").html(PR.prettyPrintOne(Blockly.Python.workspaceToCode()));
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
    document.getElementById("code").innerHTML = PR.prettyPrintOne(Blockly.Python.workspaceToCode());
  }
  
  // Update text field for debugging
  //document.getElementById("textarea").value = Blockly.JavaScript.workspaceToCode(workspace);
}
workspace.addChangeListener(saveBlocks);

// Load last set of blocks
window.setTimeout(BlocklyStorage.restoreBlocks, 1000);

// Initialize some elements
$(document).ready(function() {
  $("#codeView").addClass("hidden");
  
  $("#previewMission").click(function() {
    previewMission();
  });
  
  $("#showCode").click(function() {
    toggleCodeView();
  });
  
  $("#saveMission").click(function() {
    saveMission();
  });
  
  $('.button-collapse').sideNav({
    edge: 'right',
    closeOnClick: true
  });
  
});