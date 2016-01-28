Blockly.Blocks['fly_forward'] = {
  init: function() {
    this.appendDummyInput().appendField("fly forward");
    this.appendValueInput("distance").setCheck("Number");
    this.appendDummyInput().appendField("ft");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};