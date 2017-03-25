Blockly.Blocks['yaw_left'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("yaw left");
    this.appendDummyInput()
        .appendField("°");
    this.appendDummyInput()
        .appendField("at")
        .appendField(new Blockly.FieldNumber(30, 1, 100, 1), 'velocity')
        .appendField("°/sec");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
  }
};