Blockly.Python['takeoff'] = function(block) {
  var altitude = block.getFieldValue("altitude");
  return 'takeoff(' + altitude + ');\n';
};

Blockly.Python['flight_path'] = function(block) {
  var path = block.getFieldValue("path");
  //return 'mission+="flight_path,' + path + '|";';
};

Blockly.Python['heading_mode'] = function(block) {
  var mode = block.getFieldValue("mode");
  //return 'mission+="heading_mode,' + mode + '|";';
};

Blockly.Python['land'] = function(block) {
  return 'land();\n';  
};

Blockly.Python['land_home'] = function(block) {
  return 'landHome();\n';
};

Blockly.Python['hover'] = function(block) {
  var duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_NONE);
  return 'hover(' + duration + ');\n';
};

Blockly.Python['yaw_right'] = function(block) {
  var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);
  return 'yawRight(' + angle + ');\n';
};

Blockly.Python['yaw_left'] = function(block) {
  var angle = block.getFieldValue("angle");
  return 'yawLeft(' + angle + ');\n';
};

Blockly.Python['photo'] = function(block) {
  return 'takePhoto();\n';
};

Blockly.Python['pitch_gimbal_to'] = function(block) {
  var angle = block.getFieldValue("angle");
  return 'pitchGimbal(' + angle + ');\n';
};

Blockly.Python['fly_forward'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  return 'flyForward(' + distance + ');\n';
};

Blockly.Python['video'] = function(block) {
  var action = block.getFieldValue("video_status");
  return 'video(' + action + ');\n';
};

Blockly.Python['change_altitude'] = function(block) {
  var altitude = Blockly.JavaScript.valueToCode(block, 'altitude', Blockly.JavaScript.ORDER_NONE);
  return 'change_altitude(' + altitude + ');\n';
};

Blockly.Python['loop'] = function(block) {
  var repeats = Number(block.getFieldValue('TIMES'));
  var branch = Blockly.Python.statementToCode(block, 'DO').trim();
  var code = "\nfor (var count = 0; count < " + repeats + "; count++) {\n";
  code += '  ' + branch + '\n';
  code += "}\n\n";
  return code;
};

Blockly.Python['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_NONE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};