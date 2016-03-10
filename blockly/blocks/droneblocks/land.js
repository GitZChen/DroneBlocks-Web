Blockly.Blocks['land'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("land");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setColour('#E76F51');
    this.setHelpUrl('https://github.com/dbaldwin/DroneBlocks-Web/wiki/Block-Definitions');
  }
};