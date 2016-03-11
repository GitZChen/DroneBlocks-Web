Blockly.Blocks['heading_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("heading mode")
        .appendField(new Blockly.FieldDropdown([["auto", "auto"], ["takeoff heading", "takeoff"], ["user controlled", "user"], ["waypoint", "waypoint"], ["point of interest", "point"]]), "mode");
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour('#264653');
  }
};