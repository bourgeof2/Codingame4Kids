Blockly.JavaScript['playerblock'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'joueur';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tourblock'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'tour';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['getxblock'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_from + '.x';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getyblock'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 var code = value_from + '.y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getidblock'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + '.id';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getmurblock'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + '.mursRestants';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['adversairesblock'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'adversaires';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['wallblock'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'murs';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getxwallblock'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_from + '.x';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getywallblock'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 var code = value_from + '.y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getorientationblock'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + '.orientation';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['mainloopblock'] = function(block) {
  var initCode = Blockly.JavaScript.statementToCode(block, 'initCode');
  var loopCode = Blockly.JavaScript.statementToCode(block, 'loopCode');
  // TODO: Assemble JavaScript into code variable.
  var code = `
/*********************************************************************/
/*****************  Code généré automatiquement    *******************/
/*********************************************************************/

function Joueur (x, y, id, mursRestants) {}
function Mur (x, y, orientation) {}

var entrees = readline().split(' ');
const largeurDuPlateau = parseInt(entrees[0]); // Largeur du plateau
const hauteurDuPlateau = parseInt(entrees[1]); // Hauteur du plateau
const nombreDeJoueurs = parseInt(entrees[2]); // nombre de joueurs (2 ou 3)
const monId = parseInt(entrees[3]); // id de mon joueur (0 = premier joueur, 1 = 2e joueur, ...)

function bouge(personnage, ajout_x, ajout_y, mur_list) {
    if (personnage.x + ajout_x < 0 && personnage.id != 1)
        return 'Erreur! Action invalide! Le personnage ne peut pas sortir par là!';
    if (personnage.x + ajout_x > 8 && personnage.id != 0)
        return 'Erreur! Action invalide! Le personnage ne peut pas sortir par là!';
    if (personnage.y + ajout_y < 0 && personnage.id != 3)
        return 'Erreur! Action invalide! Le personnage ne peut pas sortir par là!';
    if (personnage.y + ajout_y > 8 && personnage.id != 2)
        return 'Erreur! Action invalide! Le personnage ne peut pas sortir par là!';
    for (var mur_index in mur_list) {
        mur = mur_list[mur_index];
        if (ajout_x !== 0 && (mur.orientation) == 'V') {
            var x_to_test = personnage.x;
            if (ajout_x == 1) {
                x_to_test = personnage.x + 1;
            }
            if (mur.x == x_to_test && ((mur.y) == (personnage.y) || (mur.y) + 1 == (personnage.y))) {
                return 'Erreur! Action invalide! Le personnage ne peut pas traverser le mur!';
            }
        }
        if (ajout_y !== 0 && (mur.orientation) == 'H') {
            var y_to_test = personnage.y;
            if (ajout_y == 1) {
                y_to_test = personnage.y + 1;
            }
            if (mur.y == y_to_test && ((mur.x) == (personnage.x) || (mur.x) + 1 == (personnage.x))) {
                return 'Erreur! Action invalide! Le personnage ne peut pas traverser le mur!';
            }
        }
    }

    if (ajout_x == 1)
        return "RIGHT";
    else if (ajout_x == -1)
        return "LEFT";
    else if (ajout_y == 1)
        return "DOWN";
    else
        return "UP";
}

function avancer(personnage, mur_list) {
    if (personnage.id === 0)
        return bouge(personnage, 1, 0, mur_list);
    else if (personnage.id == 1)
        return bouge(personnage, -1, 0, mur_list);
    else if (personnage.id == 2)
        return bouge(personnage, 0, 1, mur_list);
    else
        return bouge(personnage, 0, -1, mur_list);
}

function gauche(personnage, mur_list) {
    if (personnage.id === 0)
        return bouge(personnage, 0, -1, mur_list);
    else if (personnage.id == 1)
        return bouge(personnage, 0, 1, mur_list);
    else if (personnage.id == 2)
        return bouge(personnage, 1, 0, mur_list);
    else
        return bouge(personnage, -1, 0, mur_list);
}

function droite(personnage, mur_list) {
    if (personnage.id === 0)
        return bouge(personnage, 0, 1, mur_list);
    else if (personnage.id == 1)
        return bouge(personnage, 0, -1, mur_list);
    else if (personnage.id == 2)
        return bouge(personnage, -1, 0, mur_list);
    else
        return bouge(personnage, 1, 0, mur_list);
}

function reculer(personnage, mur_list) {
    if (personnage.id === 0)
        return bouge(personnage, -1, 0, mur_list);
    else if (personnage.id == 1)
        return bouge(personnage, 1, 0, mur_list);
    else if (personnage.id == 2)
        return bouge(personnage, 0, -1, mur_list);
    else
        return bouge(personnage, 0, 1, mur_list);
}

function Point(x, y) {
}

function personnageBloque(personnage, mur_list) {
    var opened = Array();
    var closed = Array();

    var orinalP = new Point();
    orinalP.x = personnage.x;
    orinalP.y = personnage.y;
    console.error('start for: '+orinalP.x+' '+orinalP.y);
    opened.push(orinalP);
    while(opened.length) {
        var p = new Point();
        p.x = opened[0].x;
        p.y = opened[0].y;
        console.error(p.x+' '+p.y);
        opened.shift();
        closed.push(p);
        if (p.x == 0 && personnage.id == 1) return false;
        if (p.x == 8 && personnage.id == 0) return false;
        if (p.y == 0 && personnage.id == 3) return false;
        if (p.y == 8 && personnage.id == 2) return false;
        if (p.x >= 1) {
            var newP = new Point()
            newP.x = p.x - 1;
            newP.y = p.y;
            if ((mur_list.find(function(mur) {
                return mur.orientation == 'V' && mur.x == p.x && (mur.y == p.y || mur.y == p.y - 1);
                }) == undefined)
                && opened.find(function(p2) {return p2.x == newP.x && p2.y == newP.y ;}) == undefined
                && closed.find(function(p2) {return p2.x == newP.x && p2.y == newP.y;}) == undefined) {

                opened.push(newP);
            }
        }
        if (p.x < 8) {
            var newP = new Point()
            newP.x = p.x + 1;
            newP.y = p.y;
            if ((mur_list.find(function(mur) {
                return mur.orientation == 'V' && mur.x == p.x + 1 && (mur.y == p.y || mur.y == p.y - 1);
                }) == undefined)
                 && opened.find(function(p2) {return p2.x == newP.x && p2.y == newP.y;}) == undefined
                && closed.find(function(p2) {return p2.x == newP.x && p2.y == newP.y;}) == undefined) {
                    opened.push(newP);
            }
        }
        if (p.y >= 1) {
            var newP = new Point()
            newP.x = p.x;
            newP.y = p.y - 1;
            if ((mur_list.find(function(mur) {
                return mur.orientation == 'H' && mur.y == p.y && (mur.x == p.x || mur.x == p.x - 1);
                }) == undefined)
                && opened.find(function(p2) {return p2.x == newP.x && p2.y == newP.y;}) == undefined
                && closed.find(function(p2) {return p2.x == newP.x && p2.y == newP.y;}) == undefined) {

                opened.push(newP);
            }
        }
        if (p.y < 8) {
            var newP = new Point()
            newP.x = p.x;
            newP.y = p.y + 1;
            if ((mur_list.find(function(mur) {
                return mur.orientation == 'H' && mur.y == p.y + 1 && (mur.x == p.x || mur.x == p.x - 1);
                }) == undefined)
                && opened.find(function(p2) {return p2.x == newP.x && p2.y == newP.y;}) == undefined
                && closed.find(function(p2) {return p2.x == newP.x && p2.y == newP.y;}) == undefined) {
                    opened.push(newP);
            }
        }
    }
    console.error("test");
    return true;
}

function isJoueursBloque(joueur, adversaires, mur_list) {
   if (personnageBloque(joueur, mur_list))
        return joueur.id;
    for (var adv_index in adversaires) {
        adv = adversaires[adv_index];
        if (personnageBloque(adv, mur_list))
            return adv.id;
    }

    return -1;
}

function mettreMur(joueur, personnage, ajout_x, ajout_y, orientation, adversaires, mur_list) {
	var orientationString = "vertical";
	if (orientation == 'H') orientationString = "horizontal";
    if (joueur.mursRestants <= 0)
        return "Erreur! Action invalide! Le personnage n'a plus de mur à poser!";
    if (personnage.x + ajout_x < 0 || (personnage.x + ajout_x < 1 && orientation == 'V'))
        return 'Erreur! Action invalide! un mur '+orientationString+' ne peut pas être poser ici! ('+personnage.x + ajout_x+', '+personnage.y + ajout_y+')';
    if (personnage.x + ajout_x > 8 || (personnage.x + ajout_x > 7 && orientation == 'H'))
        return 'Erreur! Action invalide! un mur '+orientationString+' ne peut pas être poser ici! ('+personnage.x + ajout_x+', '+personnage.y + ajout_y+')';
    if (personnage.y + ajout_y < 0 || (personnage.y + ajout_y < 1 && orientation == 'H'))
        return 'Erreur! Action invalide! un mur '+orientationString+' ne peut pas être poser ici! ('+personnage.x + ajout_x+', '+personnage.y + ajout_y+')';
    if (personnage.y + ajout_y > 8 || (personnage.y + ajout_y > 7 && orientation == 'V'))
        return 'Erreur! Action invalide! un mur '+orientationString+' ne peut pas être poser ici! ('+personnage.x + ajout_x+', '+personnage.y + ajout_y+')';
    for (var mur_index in mur_list) {
        mur = mur_list[mur_index];
        if (mur.orientation == "H" && orientation == "H" && mur.y == personnage.y + ajout_y) {
            if (mur.x == personnage.x + ajout_x || mur.x + 1 == personnage.x + ajout_x || mur.x - 1 == personnage.x + ajout_x)
				return 'Erreur! Action invalide! un mur '+orientationString+' ne peut pas être poser ici ('+personnage.x + ajout_x+', '+personnage.y + ajout_y+') car il chevauche un mur existant ('+mur.x+', '+mur.y+')';
        }
        if (mur.orientation == "V" && orientation == "V" && mur.x == personnage.x + ajout_x) {
            if (mur.y == personnage.y + ajout_y || mur.y + 1 == personnage.y + ajout_y || mur.y - 1 == personnage.y + ajout_y)
				return 'Erreur! Action invalide! un mur '+orientationString+' ne peut pas être poser ici ('+personnage.x + ajout_x+', '+personnage.y + ajout_y+') car il chevauche un mur existant ('+mur.x+', '+mur.y+')';
        }
        if (mur.orientation == "H" && orientation == "V" && mur.x + 1 == personnage.x + ajout_x && mur.y - 1 == personnage.y + ajout_y) {
			return 'Erreur! Action invalide! un mur '+orientationString+' ne peut pas être poser ici ('+personnage.x + ajout_x+', '+personnage.y + ajout_y+') car il croise un mur existant ('+mur.x+', '+mur.y+')';
        }
        if (mur.orientation == "V" && orientation == "H" && mur.x - 1 == personnage.x + ajout_x && mur.y + 1 == personnage.y + ajout_y) {
			return 'Erreur! Action invalide! un mur '+orientationString+' ne peut pas être poser ici ('+personnage.x + ajout_x+', '+personnage.y + ajout_y+') car il croise un mur existant ('+mur.x+', '+mur.y+')';
        }
    }

    //var mur_list2 = mur_list;
    var newMur = new Mur ();
    newMur.x = personnage.x + ajout_x;
    newMur.y = personnage.y + ajout_y;
    newMur.orientation = orientation;
    mur_list.push(newMur);

    var joueurBloque = isJoueursBloque(joueur, adversaires, mur_list)
    if (joueurBloque != -1)
        return 'Erreur! Action invalide! un mur '+orientationString+' ne peut pas être poser ici ('+personnage.x + ajout_x+', '+personnage.y + ajout_y+') car il bloque le joueur '+joueurBloque;

    return (personnage.x + ajout_x) + ' ' + (personnage.y + ajout_y) + ' ' + orientation;
}


function murDevant(gauche_droite, joueur, personnage, adversaires, mur_list) {
    if (personnage.id === 0)
        return mettreMur(joueur, personnage, 1, gauche_droite-1, "V", adversaires, mur_list);
    else if (personnage.id == 1)
        return mettreMur(joueur, personnage, 0, -gauche_droite, "V", adversaires, mur_list);
    else if (personnage.id == 2)
        return mettreMur(joueur, personnage, -gauche_droite, 1, "H", adversaires, mur_list);
    else
        return mettreMur(joueur, personnage, gauche_droite-1, 0, "H", adversaires, mur_list);
}

function murGauche(devant_derriere, joueur, personnage, adversaires, mur_list) {
    if (personnage.id === 0)
        return mettreMur(joueur, personnage, -devant_derriere, 0, "H", adversaires, mur_list);
    else if (personnage.id == 1)
        return mettreMur(joueur, personnage, devant_derriere-1, 1, "H", adversaires, mur_list);
    else if (personnage.id == 2)
        return mettreMur(joueur, personnage, 1, -devant_derriere, "V", adversaires, mur_list);
    else
        return mettreMur(joueur, personnage, 0, devant_derriere-1, "V", adversaires, mur_list);
}

function murDroite(devant_derriere, joueur, personnage, adversaires, mur_list) {
    if (personnage.id === 0)
        return mettreMur(joueur, personnage, -devant_derriere, 1, "H", adversaires, mur_list);
    else if (personnage.id == 1)
        return mettreMur(joueur, personnage, devant_derriere-1, 0, "H", adversaires, mur_list);
    else if (personnage.id == 2)
        return mettreMur(joueur, personnage, 0, -devant_derriere, "V", adversaires, mur_list);
    else
        return mettreMur(joueur, personnage, 1, devant_derriere-1, "V", adversaires, mur_list);
}


function murDerriere(gauche_droite, joueur, personnage, adversaires, mur_list) {
    if (personnage.id === 0)
        return mettreMur(joueur, personnage, 0, gauche_droite-1, "V", adversaires, mur_list);
    else if (personnage.id == 1)
        return mettreMur(joueur, personnage, 1, -gauche_droite, "V", adversaires, mur_list);
    else if (personnage.id == 2)
        return mettreMur(joueur, personnage, -gauche_droite, 0, "H", adversaires, mur_list);
    else
        return mettreMur(joueur, personnage, gauche_droite-1, 1, "H", adversaires, mur_list);
}

/*********************************************************************/
/*****************  Avant de commencer faire:      *******************/
/*********************************************************************/

${initCode} 

/*********************************************************************/
/*****************  Fin Avant de commencer         *******************/
/*********************************************************************/


// Boucle principale du jeu
var tour = 1;
mainloop:
while (true) {
    // Récupération des données d'entrées
    var joueur = new Joueur(0, 0, 0);
    var adversaires = Array(nombreDeJoueurs-1);

    var AdversaireNumero = 0;
    for (let i = 0; i < nombreDeJoueurs; i++) {
        var entrees = readline().split(' ');
		var x = parseInt(entrees[0]);
		var y = parseInt(entrees[1]);
		var murs = parseInt(entrees[2]);
        if (i == monId) {
            joueur.x = x; // x du joueur
            joueur.y = y; // y du joueur
            joueur.id = monId; 			   // id du joueur
            joueur.mursRestants = murs; // nombre de murs encore disponibles pour le joueur
        } else if (x >= 0) {
            adversaires[AdversaireNumero] = new Joueur();
            adversaires[AdversaireNumero].x = x; // x de l'adversaire
            adversaires[AdversaireNumero].y = y; // y de l'adversaire
            adversaires[AdversaireNumero].id = i; 				    // id de l'adversaire
            adversaires[AdversaireNumero].mursRestants = murs; // nombre de murs encore disponibles pour l'adversaire
            AdversaireNumero++;
        }
    }
    const nombreDeMurs = parseInt(readline()); // nombre de murs sur le plateau
    var murs = Array(nombreDeMurs);
    for (let i = 0; i < nombreDeMurs; i++) {
        var entrees = readline().split(' ');
        murs[i] = new Mur();
        murs[i].x = parseInt(entrees[0]); // x de la case ou le mur commence dans le coin en haut à gauche
        murs[i].y = parseInt(entrees[1]); // y de la case ou le mur commence dans le coin en haut à gauche
        murs[i].orientation = entrees[2]; // orientation du mur ('H' pour horizontal ou 'V' pour vertical)
    }

/*********************************************************************/

    /*********************************************************************/
    /*****************  Votre code boucle principale   *******************/
    /*********************************************************************/
    
    ${loopCode} 
    

    /*********************************************************************/
    /***************** Fin du code boucle principale   *******************/
    /*********************************************************************/

	tour++;
}
`;
  return code;
};

Blockly.JavaScript['leftaction'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\'LEFT\'';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['rightaction'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\'RIGHT\'';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['upaction'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\'UP\'';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['downaction'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\'DOWN\'';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['buildwall'] = function(block) {
  var dropdown_wallorientation = block.getFieldValue('wallorientation');
  var value_wallx = Blockly.JavaScript.valueToCode(block, 'wallx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_wally = Blockly.JavaScript.valueToCode(block, 'wally', Blockly.JavaScript.ORDER_ATOMIC);  // TODO: Assemble JavaScript into code variable.
  var code = value_wallx+'+\' \'+'+value_wally+'+\' '+dropdown_wallorientation+'\'';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['moveaction'] = function(block) {
  var action = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = action+'(joueur, murs)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['wallaction'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'personnage', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = value_action+' joueur, '+value_name+', adversaires, murs)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['canmove'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'personnage', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = "(!"+value_action+"("+value_name+", murs).startsWith('Erreur'))";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['actionvalid'] = function(block) {
  var value_action = Blockly.JavaScript.valueToCode(block, 'action', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "(!"+value_action+".startsWith('Erreur'))";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['playaction'] = function(block) {
  var value_action = Blockly.JavaScript.valueToCode(block, 'action', Blockly.JavaScript.ORDER_ATOMIC);
  var text_message = block.getFieldValue('message');
  // TODO: Assemble JavaScript into code variable.
  var code = "console.error("+value_action+");console.log("+value_action+'+" '+text_message+'");continue mainloop;\n';
  return code;
};