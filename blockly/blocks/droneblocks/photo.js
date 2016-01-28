Blockly.Blocks['photo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("take photo");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};