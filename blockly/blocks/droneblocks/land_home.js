Blockly.Blocks['land_home'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return home and land");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setColour(276);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};