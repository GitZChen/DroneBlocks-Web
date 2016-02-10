Blockly.Blocks['fly_forward'] = { 
  init: function() {
    this.appendDummyInput().appendField("fly forward")
    .appendField(new Blockly.FieldDropdown([["25", "25"], ["50", "50"], ["75", "75"], ["100", "100"], ["125", "125"], ["150", "150"], ["175", "175"], ["200", "200"], ["250", "250"], ["300", "300"], ["350", "350"], ["400", "400"], ["450", "450"], ["500", "500"]]), "distance")
    this.appendDummyInput().appendField("ft");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};