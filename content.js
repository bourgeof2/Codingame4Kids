// content.js

var htmlCode = `

<div id="blocklyDiv" style="position: absolute;
    top: 45px;
    right: 0;
    left: 0;
    bottom: 0;"></div>

<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <category name="Jeu" colour="#a55b80">
    <block type="mainloopblock"></block>
  </category>
  <category name="Joueurs" colour="#a55b80">
    <block type="playerblock"></block>
    <block type="canmove"></block>
    <block type="getmurblock"></block>
    <block type="adversairesblock"></block>
    <block type="controls_forEach">
      <field name="VAR" id="jZOeg8P3Dfg5@^qb$#C%">adversaire</field>
    </block>
  </category>
  <category name="Actions" colour="#a55b80">
    <block type="moveaction"></block>
    <block type="wallaction"></block>
    <block type="actionvalid"></block>
    <block type="playaction"></block>
  </category>
  <category name="Logique" colour="#5b80a5">
    <block type="controls_if"></block>
    <block type="logic_compare">
      <field name="OP">EQ</field>
    </block>
    <block type="logic_operation">
      <field name="OP">AND</field>
    </block>
  </category>
    <category name="Nombre" colour="#5b67a5">
    <block type="math_number">
      <field name="NUM">0</field>
    </block>
    <block type="math_arithmetic">
      <field name="OP">ADD</field>
      <value name="A">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="B">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_int">
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="Texte" colour="#5ba58c">
    <block type="text">
      <field name="TEXT"></field>
    </block>
  </category>
  <sep></sep>
  <category name="Variables" colour="#a55b80" custom="VARIABLE"></category>
  <sep></sep>
  <category name="Statut(Expert)" colour="#a55b80">
    <block type="getxblock"></block>
    <block type="getyblock"></block>
    <block type="getidblock"></block>
    <block type="wallblock"></block>
    <block type="getxwallblock"></block>
    <block type="getywallblock"></block>
    <block type="getorientationblock"></block>
    <block type="tourblock"></block>
  </category>
  <category name="Actions(Expert)" colour="#a55b80">
    <block type="leftaction"></block>
    <block type="rightaction"></block>
    <block type="upaction"></block>
    <block type="downaction"></block>
    <block type="buildwall"></block>
  </category>
  <category name="Logique(Expert)" colour="#5b80a5">
    <block type="controls_if"></block>
    <block type="logic_compare">
      <field name="OP">EQ</field>
    </block>
    <block type="logic_operation">
      <field name="OP">AND</field>
    </block>
    <block type="logic_negate"></block>
    <block type="logic_boolean">
      <field name="BOOL">TRUE</field>
    </block>
    <block type="logic_null"></block>
    <block type="logic_ternary"></block>
  </category>
  <category name="Répéter(Expert)" colour="#5ba55b">
    <block type="controls_repeat_ext">
      <value name="TIMES">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="controls_whileUntil">
      <field name="MODE">WHILE</field>
    </block>
    <block type="controls_for">
      <field name="VAR" id="8UL.461D?+lU@MH^i#pZ">i</field>
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="BY">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="controls_forEach">
      <field name="VAR" id="jZOeg8P3Dfg5@^qb$#C%">j</field>
    </block>
    <block type="controls_flow_statements">
      <field name="FLOW">BREAK</field>
    </block>
  </category>
  <category name="Nombre(Expert)" colour="#5b67a5">
    <block type="math_number">
      <field name="NUM">0</field>
    </block>
    <block type="math_arithmetic">
      <field name="OP">ADD</field>
      <value name="A">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="B">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="math_single">
      <field name="OP">ROOT</field>
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">9</field>
        </shadow>
      </value>
    </block>
    <block type="math_trig">
      <field name="OP">SIN</field>
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">45</field>
        </shadow>
      </value>
    </block>
    <block type="math_constant">
      <field name="CONSTANT">PI</field>
    </block>
    <block type="math_number_property">
      <mutation divisor_input="false"></mutation>
      <field name="PROPERTY">EVEN</field>
      <value name="NUMBER_TO_CHECK">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="math_round">
      <field name="OP">ROUND</field>
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">3.1</field>
        </shadow>
      </value>
    </block>
    <block type="math_on_list">
      <mutation op="SUM"></mutation>
      <field name="OP">SUM</field>
    </block>
    <block type="math_modulo">
      <value name="DIVIDEND">
        <shadow type="math_number">
          <field name="NUM">64</field>
        </shadow>
      </value>
      <value name="DIVISOR">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="math_constrain">
      <value name="VALUE">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
      <value name="LOW">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="HIGH">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_int">
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_float"></block>
  </category>
  <category name="Texte(Expert)" colour="#5ba58c">
    <block type="text">
      <field name="TEXT"></field>
    </block>
    <block type="text_join">
      <mutation items="2"></mutation>
    </block>
    <block type="text_append">
      <field name="VAR" id="LrQs]]Ad6hr;,?Q~7mNB">item</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_length">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_isEmpty">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_indexOf">
      <field name="END">FIRST</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="ge3OmZ~U+E)_W,an,{M$">text</field>
        </block>
      </value>
      <value name="FIND">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_charAt">
      <mutation at="true"></mutation>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="ge3OmZ~U+E)_W,an,{M$">text</field>
        </block>
      </value>
    </block>
    <block type="text_getSubstring">
      <mutation at1="true" at2="true"></mutation>
      <field name="WHERE1">FROM_START</field>
      <field name="WHERE2">FROM_START</field>
      <value name="STRING">
        <block type="variables_get">
          <field name="VAR" id="ge3OmZ~U+E)_W,an,{M$">text</field>
        </block>
      </value>
    </block>
    <block type="text_changeCase">
      <field name="CASE">UPPERCASE</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_trim">
      <field name="MODE">BOTH</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_prompt_ext">
      <mutation type="TEXT"></mutation>
      <field name="TYPE">TEXT</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="Listes(Expert)" colour="#745ba5">
    <block type="lists_create_with">
      <mutation items="0"></mutation>
    </block>
    <block type="lists_create_with">
      <mutation items="3"></mutation>
    </block>
    <block type="lists_repeat">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">5</field>
        </shadow>
      </value>
    </block>
    <block type="lists_length"></block>
    <block type="lists_isEmpty"></block>
    <block type="lists_indexOf">
      <field name="END">FIRST</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="I!^N:xsqz~h@)P]BTUSF">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getIndex">
      <mutation statement="false" at="true"></mutation>
      <field name="MODE">GET</field>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="I!^N:xsqz~h@)P]BTUSF">list</field>
        </block>
      </value>
    </block>
    <block type="lists_setIndex">
      <mutation at="true"></mutation>
      <field name="MODE">SET</field>
      <field name="WHERE">FROM_START</field>
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR" id="I!^N:xsqz~h@)P]BTUSF">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getSublist">
      <mutation at1="true" at2="true"></mutation>
      <field name="WHERE1">FROM_START</field>
      <field name="WHERE2">FROM_START</field>
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR" id="I!^N:xsqz~h@)P]BTUSF">list</field>
        </block>
      </value>
    </block>
    <block type="lists_split">
      <mutation mode="SPLIT"></mutation>
      <field name="MODE">SPLIT</field>
      <value name="DELIM">
        <shadow type="text">
          <field name="TEXT">,</field>
        </shadow>
      </value>
    </block>
    <block type="lists_sort">
      <field name="TYPE">NUMERIC</field>
      <field name="DIRECTION">1</field>
    </block>
  </category>
  <sep></sep>
  <category name="Functions(Expert)" colour="#995ba5" custom="PROCEDURE"></category>
</xml>

<script>
    function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log('javascript code: ' + code);
  Javascript.textContent = code;
}
</script>

`;

var htmlButtonText1 = "Voir le code Javascript =>";
var htmlButton = `<div class='fboButtonContainer' style='font-family: Open Sans,Lato,sans-serif!important;
    font-weight: 300;
    color: #454c55;
    background-color: #464d56;
    margin: 5px;
    padding: 5px;'>
	<button class='fboGenerateCode' type='button' style='
    font-size: 12.5px;
    font-weight: 700;
    color: #1a99aa;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    display: inline-block;
'>${htmlButtonText1}</button></div>`

var blocklyWorkspace;
var checkContent;
var blocklyArea;

var onresize = function(e) {
	console.log("Resizing blockly!");
	var blocklyDiv = document.getElementById('blocklyDiv');
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(blocklyWorkspace);
  };

function searchCodeContent() {
   if ($(".play").length) {
      console.log("Code Content Found!");
	  //Creating Elements
	  var codeContent = $(".code-content").eq(0)
	  //Appending to DOM 
	  codeContent.hide();
	  blocklyArea = codeContent.parent();
	  blocklyArea.append(htmlCode);
	  //$(".play").eq(0).hide();
	  $(".play").eq(0).bind("mouseenter", blocklyToCG);
	  $(".replay").eq(0).bind("mouseenter", blocklyToCG);
	  $(".submit").eq(0).bind("mouseenter", blocklyToCG);
	  //$(".code-management").eq(0).hide();
	  
	  var codeManagement = $(".code-management").eq(0)
	  codeManagement.after(htmlButton);
	  
	  registerExternal("fbo", "1.0");
	  setSynchronized(true);
	  
		$(".cg-ide-actions").bind("DOMSubtreeModified", function() {
			if ($('.play').length) {
				console.log("Found back play");
				if ($("#blocklyDiv").eq(0).is(":visible"))
					$(".play").eq(0).bind("mouseenter", blocklyToCG);
			}
		});
	  
	  
	  // restore
	  //var xml = Blockly.Xml.textToDom(xml_text);
	  //Blockly.Xml.domToWorkspace(xml, workspace);
	  getCode();

	  var fboGenerateCode = $(".fboGenerateCode").eq(0)
	  fboGenerateCode.click(function(){
		  var blocklyD = $("#blocklyDiv").eq(0)
		  if (blocklyD.is(":visible")) {
			  blocklyD.hide();
			  blocklyToCG();
			  //$(".play").eq(0).show();
			  //$(".replay").eq(0).show();
			  $("#blocklyDiv").eq(0).hide();
			  $(".code-content").eq(0).show();
			  //$(".submit").eq(0).show();
			  $(".fboGenerateCode").eq(0).text("<= Revenir aux blocks");
			  //$(".code-management").eq(0).show();
	  $(".play").eq(0).unbind("mouseenter", blocklyToCG);
	  $(".replay").eq(0).unbind("mouseenter", blocklyToCG);;
	  $(".submit").eq(0).unbind("mouseenter", blocklyToCG);
		  } else {
			  blocklyD.show();
			  //$(".play").eq(0).hide();
			  $(".code-management").eq(0).hide();
			  //$(".replay").eq(0).hide();
			  $("#blocklyDiv").eq(0).show();
			  $(".code-content").eq(0).hide();
			  //$(".submit").eq(0).hide();
			  $(".fboGenerateCode").eq(0).text(htmlButtonText1);
			  //$(".code-management").eq(0).hide();
	  $(".play").eq(0).bind("mouseenter", blocklyToCG);
	  $(".replay").eq(0).bind("mouseenter", blocklyToCG);
	  $(".submit").eq(0).bind("mouseenter", blocklyToCG);
			  
			  getCode();
	  onresize();
		  }
	  });
	  
	  blocklyWorkspace = Blockly.inject('blocklyDiv', {toolbox: document.getElementById('toolbox')});
	  window.addEventListener('resize', onresize, false);
	  blocklyArea.change(onresize);
	  onresize();
	  
      clearInterval(checkContent);
   }
}


function emitToEditor(event, data = {}) {
    data.status = event;

    var ev = new CustomEvent('ExternalEditorToIDE', { detail: data });
	
	console.log("dispatchEvent: ");
	console.log(ev);
    window.document.dispatchEvent(ev);
  }

function registerExternal(name, version) {
    this.emitToEditor('status', { name, version });
  }

function setSynchronized(state) {
    this.emitToEditor('synchronized', { value: state });
  }
 
function blocklyToCG() {
	var xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);
	var xml_text = Blockly.Xml.domToText(xml);
	var code = Blockly.JavaScript.workspaceToCode(blocklyWorkspace);
	var allCode = `// NE PAS TOUCHER la ligne ci-dessous! (Réservé pour faire fonctionner blockly!)
// XML: ${xml_text} 
${code}`
	console.log("Setting code to: ");
	console.log(allCode);
    emitToEditor('updateCode', {
      code: allCode.replace(/\r\n|\r/g, '\n'),
    });
  }
  
function getCode() {
    this.emitToEditor('getCode');
  }


window.document.addEventListener('IDEToExternalEditor', fboHandleEvent);

function fboHandleEvent(ev) {
	console.log("Received " + ev);
    switch (ev.detail.status) {
      case 'connect':
        console.log("ConnectExternal received!");
        break;
      case 'disconnect':
        console.log("DisconnectExternal received!");
        break;
      case 'questionDetails':
         console.log("QuestionDetails received!");
         console.log(ev.detail.title);
		 if (ev.detail.title == "Great escape" && $(".blocklyDiv").length == 0)
			 checkContent = setInterval(searchCodeContent, 100);
		 else activateBlockly = false;
         console.log(ev.detail.questionId);
        break;
      case 'updateCode':
         console.log("CodeUpdated received!");
         console.log(ev.detail.code);
		 var start = ev.detail.code.indexOf("// XML: ");
		 var end = ev.detail.code.indexOf("\n", start);
		 var xml_text = ev.detail.code.substring(start + 8, end);
		 // restore
		 var xml = Blockly.Xml.textToDom(xml_text);
		 blocklyWorkspace.clear();
	     Blockly.Xml.domToWorkspace(xml, blocklyWorkspace);
		 
        break;
      case 'submitted':
         console.log("Submitted received!");
        break;
    }
  }
  
var lastWidth = null;
setInterval(function () {
	if (blocklyArea == null || blocklyArea.length < 1) return; // abort if element is non existend eny more
	if (lastWidth == null) lastWidth = blocklyArea.width();
	var newWidth = blocklyArea.width();
	if (lastWidth != newWidth) {
		onresize();
		lastWidth = newWidth;
	}
}, 100);

