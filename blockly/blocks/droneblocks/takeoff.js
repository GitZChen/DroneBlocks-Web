/*Blockly.Blocks['takeoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("takeoff to")
        .appendField(new Blockly.FieldDropdown([["25", "25"], ["50", "50"], ["75", "75"], ["100", "100"], ["125", "125"], ["150", "150"], ["175", "175"], ["200", "200"], ["225", "225"], ["250", "250"]]), "altitude")
        .appendField("ft");
    this.appendDummyInput()
        .appendField("along")
        .appendField(new Blockly.FieldDropdown([["straight", "straight"], ["curved", "curved"]]), "path_type")
        .appendField("path");
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};*/
Blockly.Blocks['takeoff'] = {
  init: function() {
    this.appendDummyInput().appendField("takeoff to");
    this.appendValueInput("altitude").setCheck("Number");
    this.appendDummyInput().appendField("ft");
    this.setInputsInline(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};