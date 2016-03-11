Blockly.Blocks['flight_path'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("flight path")
        .appendField(new Blockly.FieldDropdown([["straight", "straight"], ["curved", "curved"]]), "path");
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setColour('#264653');
  }
};