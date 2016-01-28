Blockly.Blocks['orbit'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("Orbit")
    this.appendDummyInput()
        .appendField("radius")
        .appendField(new Blockly.FieldDropdown([["25", "25"], ["30", "30"], ["35", "35"], ["40", "40"]]), "radius")
        .appendField("ft");
    this.appendDummyInput()
        .appendField("altitude")
        .appendField(new Blockly.FieldDropdown([["10", "10"], ["15", "15"], ["20", "20"], ["25", "25"]]), "altitude")
        .appendField("ft");
    this.appendDummyInput()
        .appendField("entry direction")
        .appendField(new Blockly.FieldDropdown([["north", "north"], ["south", "south"], ["west", "west"], ["east", "east"]]), "direction");
    this.appendDummyInput()
        .appendField("heading")
        .appendField(new Blockly.FieldDropdown([["forward", "forward"], ["backward", "backward"], ["facing center", "center"], ["facing outward", "outward"], ["remote control", "remote"]]), "heading");
    this.appendDummyInput()
        .appendField("rotation")
        .appendField(new Blockly.FieldDropdown([["clockwise", "cw"], ["counter clockwise", "ccw"]]), "rotation");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};