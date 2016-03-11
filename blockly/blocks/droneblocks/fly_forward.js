Blockly.Blocks['fly_forward'] = {
  init: function() {
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("fly forward");
        //.appendField(new Blockly.FieldDropdown([["forward", "forward"], ["right", "right"], ["left", "left"], ["backward", "backward"]]), "direction");
    this.appendDummyInput()
        .appendField("ft");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
  }
};