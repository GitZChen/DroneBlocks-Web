Blockly.Blocks['yaw_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("yaw right")
        .appendField(new Blockly.FieldDropdown([["10", "10"], ["20", "20"], ["30", "30"], ["40", "40"], ["50", "50"], ["60", "60"], ["70", "70"], ["80", "80"], ["90", "90"], ["100", "100"], ["110", "110"], ["120", "120"], ["130", "130"], ["140", "140"], ["150", "150"], ["160", "160"], ["170", "170"], ["180", "180"]]), "angle")
        .appendField("degrees");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};