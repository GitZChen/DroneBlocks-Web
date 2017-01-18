Blockly.Blocks['takeoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("takeoff");
    this.setInputsInline(true);
    this.setNextStatement(true);
    this.setColour('#006494');
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};