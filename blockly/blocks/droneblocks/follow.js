Blockly.Blocks['follow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Follow");
    this.appendDummyInput()
        .appendField("heading")
        .appendField(new Blockly.FieldDropdown([["facing pilot", "facing_pilot"], ["pilot controlled", "pilot_controlled"]]), "heading");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
  }
};