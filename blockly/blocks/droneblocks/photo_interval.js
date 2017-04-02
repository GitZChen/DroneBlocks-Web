Blockly.Blocks['photo_interval'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("take")
        .appendField(new Blockly.FieldNumber(5, 1, 100, 1), 'photo_count')
        .appendField("photos with")
        .appendField(new Blockly.FieldNumber(5, 2, 30, 1), 'interval')
        .appendField("sec interval");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};
