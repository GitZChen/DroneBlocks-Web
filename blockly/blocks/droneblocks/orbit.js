Blockly.Blocks['orbit'] = {
  init: function() {
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField("orbit with radius");
    this.appendDummyInput()
        .appendField("ft at ")
        .appendField(new Blockly.FieldNumber('30', 5, 100, 1), 'velocity')
        .appendField("°/sec");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
  }
};
