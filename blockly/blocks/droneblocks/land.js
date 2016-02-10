Blockly.Blocks['land'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("land");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setColour(276);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};