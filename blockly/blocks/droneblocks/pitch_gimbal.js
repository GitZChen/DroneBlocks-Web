Blockly.Blocks['pitch_gimbal_to'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pitch gimbal to")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["-5", "-5"], ["-10", "-10"], ["-15", "-15"], ["-20", "-20"], ["-25", "-25"], ["-30", "-30"], ["-35", "-35"], ["-40", "-40"], ["-45", "-45"], ["-50", "-50"], ["-55", "-55"], ["-60", "-60"], ["-65", "-65"], ["-70", "-70"], ["-75", "-75"], ["-80", "-80"], ["-85", "-85"], ["-90", "-90"]]), "angle")
        .appendField("degrees");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};