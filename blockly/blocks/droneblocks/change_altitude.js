Blockly.Blocks['change_altitude'] = {
  init: function() {
    this.appendDummyInput().appendField("change altitude to")
    .appendField(new Blockly.FieldDropdown([["25", "25"], ["50", "50"], ["75", "75"], ["100", "100"], ["125", "125"], ["150", "150"], ["175", "175"], ["200", "200"], ["225", "225"], ["250", "250"], ["275", "275"], ["300", "300"], ["325", "325"], ["350", "350"], ["375", "375"], ["400", "400"]]), "altitude")
    this.appendDummyInput().appendField("ft");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};