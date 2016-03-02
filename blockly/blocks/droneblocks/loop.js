Blockly.Blocks['loop'] = {
  /**
   * Block for repeat n times (external number).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TIMES",
          "check": "Number",
          "options": [
            [
              "2",
              "2"
            ],
            [
              "3",
              "3"
            ],
            [
              "4",
              "4"
            ],
            [
              "5",
              "5"
            ],
            [
              "6",
              "6"
            ],
            [
              "7",
              "7"
            ],
            [
              "8",
              "8"
            ],
            [
              "9",
              "9"
            ],
            [
              "10",
              "10"
            ],
            [
              "11",
              "11"
            ],
            [
              "12",
              "12"
            ],
            [
              "13",
              "13"
            ],
            [
              "14",
              "14"
            ],
            [
              "15",
              "15"
            ],
            [
              "16",
              "16"
            ],
            [
              "17",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "20",
              "20"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#E9C46A',
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  }
};