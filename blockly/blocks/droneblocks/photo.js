Blockly.Blocks['photo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("take photo");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};