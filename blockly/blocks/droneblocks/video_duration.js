Blockly.Blocks['video_duration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("record video for")
        .appendField(new Blockly.FieldNumber('10', 1, 600, 1), 'duration')
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};
