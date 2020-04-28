Blockly.Blocks['playerblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mon personnage");
    this.setOutput(true, "playerType");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getxblock'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck("playerType")
        .appendField("x de");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getyblock'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck("playerType")
        .appendField("y de");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getidblock'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck("playerType")
        .appendField("id de");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getmurblock'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck("playerType")
        .appendField("murs restants de");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['adversairesblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("liste d'adversaires");
    this.setOutput(true, "Array");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['canmove'] = {
  init: function() {
    this.appendValueInput("personnage")
        .setCheck("playerType")
    this.appendDummyInput()
        .appendField("peut-il ")
        .appendField(new Blockly.FieldDropdown([["avancer","avancer"], ["faire un pas sur sa gauche","gauche"], ["faire un pas sur sa droite","droite"], ["reculer","reculer"]]), "direction")
        .appendField(" ?");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['wallblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("liste de murs");
    this.setOutput(true, "Array");
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getxwallblock'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck("wallType")
        .appendField("x du mur");
    this.setOutput(true, "Number");
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getywallblock'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck("wallType")
        .appendField("y du mur");
    this.setOutput(true, "Number");
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getorientationblock'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck("wallType")
        .appendField("sens du mur");
    this.setOutput(true, "String");
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mainloopblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Avant de commencer faire:");
    this.appendStatementInput("initCode")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("A chaque tour, faire:");
    this.appendStatementInput("loopCode")
        .setCheck(null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tourblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tour");
    this.setOutput(true, "Number");
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['leftaction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Action => GAUCHE");
    this.setOutput(true, "Action");
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rightaction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Action => DROITE");
    this.setOutput(true, "Action");
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['upaction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Action => HAUT");
    this.setOutput(true, "Action");
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['downaction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Action => BAS");
    this.setOutput(true, "Action");
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['buildwall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Construire un mur")
        .appendField(new Blockly.FieldDropdown([["vertical","V"], ["horizontal","H"]]), "wallorientation")
        .appendField("qui part en haut à gauche de la case");
    this.appendValueInput("wallx")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x = ");
    this.appendValueInput("wally")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y = ");
    this.setOutput(true, "Action");
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['moveaction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Action se déplacer d'une case ")
        .appendField(new Blockly.FieldDropdown([["en avant","avancer"], ["à gauche","gauche"], ["à droite","droite"], ["en arrière","reculer"]]), "direction");
    this.setOutput(true, "Action");
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wallaction'] = {
  init: function() {
    this.appendValueInput("personnage")
        .setCheck("wallType")
        .appendField("Action mettre un mur ")
        .appendField(new Blockly.FieldDropdown([["devant (dépasse à gauche)","murDevant(0,"], ["devant (dépasse à droite)","murDevant(1,"], ["à gauche (dépasse devant) de","murGauche(0,"], ["à gauche (dépasse derrière) de","murGauche(1,"], ["à droite (dépasse devant) de","murDroite(0,"], ["à droite (dépasse derrière) de","murDroite(1,"], ["derrière (dépasse à gauche)","murDerriere(0,"], ["derrière (dépasse à droite)","murDerriere(1,"]]), "direction");
    this.setOutput(true, "Action");
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['actionvalid'] = {
  init: function() {
    this.appendValueInput("action")
        .setCheck("Action")
        .appendField("L'action");
    this.appendDummyInput()
        .appendField("est-elle valide?");
    this.setOutput(true, "Boolean");
    this.setColour(190);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['playaction'] = {
  init: function() {
    this.appendValueInput("action")
        .setCheck("Action")
        .appendField("jouer l'action");
    this.appendDummyInput()
        .appendField("avec le message")
        .appendField(new Blockly.FieldTextInput("coucou!"), "message")
        .appendField("et passer au tour suivant");
    this.setPreviousStatement(true, null);
    this.setColour(190);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};