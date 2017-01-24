Blockly.Blocks['fly_forward'] = {
  init: function() {
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("fly forward");
    this.appendDummyInput()
        .appendField("ft at")
        .appendField(new Blockly.FieldNumber(10, 5, 25, 1), 'speed')
        .appendField("mph");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};