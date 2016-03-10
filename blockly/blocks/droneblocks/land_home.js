Blockly.Blocks['land_home'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return home and land");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setColour('#E76F51');
    this.setTooltip('');
    this.setHelpUrl('https://github.com/dbaldwin/DroneBlocks-Web/wiki/Block-Definitions');
  }
};