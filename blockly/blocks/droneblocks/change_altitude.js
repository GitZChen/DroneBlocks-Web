Blockly.Blocks['change_altitude'] = {
  init: function() {
    this.appendDummyInput().appendField("change altitude to");
    this.appendValueInput("altitude").setCheck("Number");
    this.appendDummyInput().appendField("ft");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};