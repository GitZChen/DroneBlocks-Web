Blockly.Blocks['pitch_gimbal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pitch gimbal to")
        .appendField(new Blockly.FieldNumber('0', -90, 0, 1), 'angle')
        .appendField("degrees");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};