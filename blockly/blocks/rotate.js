Blockly.Blocks['rotate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("rotate")
        .appendField(new Blockly.FieldAngle("90"), "NAME")
        .appendField("degrees");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};