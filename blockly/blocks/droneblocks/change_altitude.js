Blockly.Blocks['change_altitude'] = {
  init: function() {
    this.appendValueInput("altitude")
        .setCheck("Number")
        .appendField("change altitude to");
    this.appendDummyInput()
        .appendField("ft");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
  }
};