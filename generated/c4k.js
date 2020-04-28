[{
  "type": "playerblock",
  "message0": "joueur",
  "output": "playerType",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},x
{
  "type": "getxblock",
  "message0": "x de %1",
  "args0": [
    {
      "type": "input_value",
      "name": "from",
      "check": [
        "playerType",
        "wallType"
      ]
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "getyblock",
  "message0": "y de %1",
  "args0": [
    {
      "type": "input_value",
      "name": "from",
      "check": [
        "playerType",
        "wallType"
      ]
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "wallblock",
  "message0": "mur",
  "output": "wallType",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]