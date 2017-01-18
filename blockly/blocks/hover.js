Blockly.Blocks['hover'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("hover")
        .appendField(new Blockly.FieldDropdown([["10", "ten"], ["15", "fifteen"], ["20", "twenty"], ["25", "twentyfive"], ["30", "thirty"], ["35", "thirtyfive"], ["40", "fourty"], ["45", "fourtyfive"], ["50", "fifty"], ["55", "fiftyfive"], ["60", "sixty"], ["65", "sixtyfive"], ["70", "seventy"], ["75", "seventyfive"], ["80", "eighty"], ["85", "eightyfive"], ["90", "ninety"], ["95", "ninetyfive"], ["100", "hundred"]]), "altitude")
        .appendField("ft")
        .appendField("for")
        .appendField(new Blockly.FieldDropdown([["5", "five"], ["10", "ten"], ["15", "fifteen"], ["20", "twenty"], ["25", "twentyfive"], ["30", "thirty"], ["35", "thirtyfive"], ["40", "fourty"], ["45", "fourtyfive"], ["50", "fifty"], ["55", "fiftyfive"], ["60", "sixty"]]), "duration")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};