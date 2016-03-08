Blockly.Blocks['yaw_right'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("yaw right");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
    this.setTooltip('');
  }
};