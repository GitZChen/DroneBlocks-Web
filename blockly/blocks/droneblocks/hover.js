Blockly.Blocks['hover'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("hover for")
        .appendField(new Blockly.FieldDropdown([["5", "5"], ["10", "10"], ["15", "15"], ["20", "20"], ["25", "25"], ["30", "30"], ["35", "35"], ["40", "40"], ["45", "45"], ["50", "50"], ["55", "55"], ["60", "60"]]), "duration")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};