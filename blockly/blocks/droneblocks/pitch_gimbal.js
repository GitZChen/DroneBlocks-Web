Blockly.Blocks['pitch_gimbal_to'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("pitch gimbal to");
    this.appendDummyInput()
        .appendField("degrees");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};