/**
*  @author {Z. Chen, D. Baldwin}
*  @version {1.0}
*/

var parser = window.webkit.messageHandlers.observe

/**
*  Directs the aircraft to take off to a certain altitude.
*  @param {number} altitude The initial altitude the aircraft should reach.
*/
function takeOff(altitude) {
	parser.postMessage("{\"name\": \"takeOff\", \"args\": {\"altitude\": "+altitude+"}}");
}

/**
*  ??????????????????????????????????????????????????????????????????????????????
?????????????????????????????????????????????????????????????????????????????????
?????????????????????????????????????????????????????????????????????????????????
*  @param {type???} path ???
*/
/*function flightPath(path) {
	parser.postMessage("{\"name\": \"flightPath\", \"args\": {\"path\": "+path+"}}");
}*/

/**
*  Directs the aircraft to land where it is.
*/
function land() {
	parser.postMessage("{\"name\": \"land\", \"args\": {}}");
}

/**
*  Directs the aircraft to fly back to its homepoint and land.
*/
function landHome() {
	parser.postMessage("{\"name\": \"landHome\", \"args\": {}}");
}

/**
*  Directs the aircraft to maintain its current position for some time.
*  @param {number} duration The amount of time the aircraft spends hovering, in seconds.
*/
function hover(duration) {
	parser.postMessage("{\"name\": \"hover\", \"args\": {\"duration\": "+duration+"}}");
}


/**
*  Directs the aircraft to yaw clockwisely.
*  @param {number} angle The angle to yaw in degrees.
*/
function yawRight(angle) {
	parser.postMessage("{\"name\": \"yawRight\", \"args\": {\"angle\": "+angle+"}}");
}

/**
*  Directs the aircraft to yaw counterclockwisely.
*  @param {number} angle The angle to yaw in degrees.
*/
function yawLeft(angle) {
	parser.postMessage("{\"name\": \"yawLeft\", \"args\": {\"angle\": "+angle+"}}");
}

/**
*  Directs the aircraft's camera to take a photo.
*/
function takePhoto() {
	parser.postMessage("{\"name\": \"takePhoto\", \"args\": {}}");
}

/**
*  Directs the aircraft's gimbal to rotate to a particular angle.
*  @param {number} angle The angle the gimbal is to reach in degrees.
*/
function pitchGimbal(angle) {
	parser.postMessage("{\"name\": \"pitchGimbal\", \"args\": {\"angle\": "+angle+"}}");
}

/**
*  Directs the aircraft to fly forward.
*  @param {number} distance The length the aircraft is to travel.
*/
function flyForward(distance) {
	parser.postMessage("{\"name\": \"flyForward\", \"args\": {\"distance\": "+distance+"}}");
}

/**
*  ??????????????????????????????????????????????????????????????????????????????
?????????????????????????????????????????????????????????????????????????????????
?????????????????????????????????????????????????????????????????????????????????
*  @param {type???} action ???
*/
/*function video(action) {
	parser.postMessage("{\"name\": \"video\", \"args\": {\"action\": "+action+"}}");
}*/

/**
*  Directs the aircraft to move vertically to a certain height.
*  @param {number} altitude The height the aircraft is to reach.
*/
function changeAltitude(altitude) {
	parser.postMessage("{\"name\": \"changeAltitude\", \"args\": {\"altitude\": "+altitude+"}}");
}
