Blockly.Blocks['fly_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("fly")
    .appendField(new Blockly.FieldDropdown([["forward", "fly_forward"], ["backward", "fly_backward"], ["left", "fly_left"], ["right", "fly_right"]]), "direction");
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