Blockly.Blocks['landing_gear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["raise", "raise"], ["lower", "lower"]]), "direction")
        .appendField("landing gear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour('#264653');
  }
};