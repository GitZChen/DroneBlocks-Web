var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {media: 'blockly/media/',
     toolbox: document.getElementById('toolbox')});
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

function uploadMission() {
  
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  code = eval(code);
  
  var os = getMobileOS();
  if(os == 'iOS') {
    window.webkit.messageHandlers.observe.postMessage(code);
  } else if(os == 'Android') {
  	Android.confirmMission(Blockly.JavaScript.workspaceToCode(workspace));
  }
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
  
  // Update text field for debugging
  //document.getElementById("textarea").value = Blockly.JavaScript.workspaceToCode(workspace);
}
workspace.addChangeListener(saveBlocks);

// Load last set of blocks
window.setTimeout(BlocklyStorage.restoreBlocks, 1000);

/*
var x;
var y;


:::takeoff,25|x = 30;
y = 5;
y = y + 10;
::fly_forward,x|yaw_right,180|::fly_forward,y|land
*/