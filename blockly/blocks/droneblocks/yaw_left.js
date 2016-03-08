Blockly.Blocks['yaw_left'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("yaw left");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
    this.setTooltip('');
  }
};