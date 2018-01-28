Blockly.Blocks['takeoff'] = {
  init: function() {
    this.appendValueInput("altitude")
    .setCheck("Number")
    .appendField("takeoff to");
    this.appendDummyInput().appendField("ft");
    this.setInputsInline(true);
    this.setNextStatement(true);
    this.setColour('#264653');
    this.setTooltip('');
  }
};