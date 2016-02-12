Blockly.Blocks['video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["start", "start"], ["stop", "stop"]]), "video_status")
        .appendField("recording video");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#F4A261');
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};