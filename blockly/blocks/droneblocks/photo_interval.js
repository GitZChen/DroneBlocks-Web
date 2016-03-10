Blockly.Blocks['photo_interval'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("take photo every");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setHelpUrl('https://github.com/dbaldwin/DroneBlocks-Web/wiki/Block-Definitions');
  }
};