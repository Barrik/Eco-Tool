console.log("script.js has run.");

var d = document;
var setList = [];
var valueList = [];

// ---Create array of objects, one object for each set---
function createObjectList(amount) {
  for (var i = 0; i < amount; i++) {
    function getI() {
      return i;
    };
    // console.log("The value of i is " + getI());
    switch (getI()) {
      case 0:
        setList.push({number:0, name:"", monies:[]});
        break;
        case 1:
          setList.push({number:1, name:"", monies:[]});
          break;
          case 2:
            setList.push({number:2, name:"", monies:[]});
            break;
            case 3:
              setList.push({number:3, name:"", monies:[]});
              break;
              case 4:
                setList.push({number:4, name:"", monies:[]});
                break;
                case 5:
                  setList.push({number:5, name:"", monies:[]});
                  break;
                  case 6:
                    setList.push({number:6, name:"", monies:[]});
                    break;
                    case 7:
                      setList.push({number:7, name:"", monies:[]});
                      break;
                      case 8:
                        setList.push({number:8, name:"", monies:[]});
                        break;
                        case 9:
                          setList.push({number:9, name:"", monies:[]});
                          break;
      default: console.log("Ummmmmmmmmmm");
    }
  };
};

// ---Hide Set Number Option after input---
function hideSetAmount() {
  var sets = d.querySelector('#sets');
  sets.classList.add('hidden');
};

// ---Get Set Amount---
var amountOfSets;
d.querySelector('#setsButton').addEventListener('click', function() {
  var amountOfSets = d.querySelector('#setsValue').options[d.querySelector('#setsValue').selectedIndex].value;
  createObjectList(amountOfSets);
  // console.log(setList);
  // console.log(amountOfSets);
  hideSetAmount();
  for (var i = 0; i < amountOfSets; i++) {
    var headerOne = d.createElement("h1");
    var headerText = d.createTextNode("Set " + String(i + 1));
    var inputList = d.querySelector("#inputList");
    headerOne.appendChild(headerText);
    inputList.appendChild(headerOne);
    var setDiv = d.createElement('div');
    setDiv.setAttribute('id', 'setInputField');
    var setText = d.createTextNode('Set Name');
    var setName = d.createElement('input');
    setName.setAttribute('id', 'name' + [i]);
    var setTextTwo = d.createTextNode('Full Buy Value');
    var setValue = d.createElement('input');
    setValue.setAttribute('id', 'value' + [i]);
    setDiv.appendChild(setText);
    setDiv.appendChild(setName);
    setDiv.appendChild(setTextTwo);
    setDiv.appendChild(setValue);
    inputList.appendChild(setDiv);
  };
  var lineBreak = d.createElement('br');
  inputList.appendChild(lineBreak);
  var createButton = d.createElement('BUTTON');
  createButton.setAttribute('id', 'createButton');
  var createText = d.createTextNode('Create your script');
  createButton.appendChild(createText);
  inputList.appendChild(createButton);

  // ---Generate Config from user input---
  d.querySelector('#createButton').addEventListener('click', function() {
    for (var i = 0; i < amountOfSets; i++) {
        var nameToAdd = d.querySelector('#name' + i).value;
        var valueToAdd = d.querySelector('#value' + i).value;
        setList[i].name = nameToAdd;
        setList[i].fullBuy = valueToAdd;
        calc(setList[i].fullBuy, i);
      };
      console.log(setList);
      hideSetValueInputs();
      generateConfig();

    });

});

// ---Everything before this is created after inputting set amount---

// ---Function to clear set value inputs and display generated config---
var hideSetValueInputs = function() {
  var inputList = d.querySelector("#inputList");
  inputList.classList.add('hidden');
};

// ---Function to write config files on screen---
var generateConfig = function() {
  var configDisplay = d.querySelector('#configDisplay');
  // ecotool.cfg section
  var ecoToolDiv = d.createElement('div');
  ecoToolDiv.setAttribute('id', 'ecoTool');
  var ecoToolHeader = d.createElement('h1');
  ecoToolHeader.classList.add('configHeader');
  var ecoToolHeaderText = d.createTextNode('ecotool.cfg')
  ecoToolHeader.appendChild(ecoToolHeaderText);
  ecoToolDiv.appendChild(ecoToolHeader);
  configDisplay.appendChild(ecoToolDiv);
  // fill ecotool.cfg with text
  generateEcoTool(ecoToolDiv);

  // Create sections for each set
  for (var i = 0; i < setList.length; i++) {
    console.log("Generating header for set " + [i+1]);
    var ecoSetDiv = d.createElement('div');
    ecoSetDiv.setAttribute('id', 'ecoSet');
    var ecoSetHeader = d.createElement('h1');
    ecoSetHeader.classList.add('configHeader');
    var ecoSetHeaderText = d.createTextNode('ecotool' + setList[i].name.toLowerCase() + '.cfg');
    ecoSetHeader.appendChild(ecoSetHeaderText);
    ecoSetDiv.appendChild(ecoSetHeader);
    configDisplay.appendChild(ecoSetDiv);
    // fill each set with text
    console.log("Generating cfg for set " + setList[i].number);
    generateEcoSet(ecoSetDiv, setList[i]);
  };
  // for (var i = 0; i < setList.length; i++) {
  // };
};

// ---Calculations function---
function calc(fullBuy, setNumber) {
  for (var i = 0; i < 35; i++) {
    function whatIsBank() {
      var bank = 1400;
      return bank+(100*i);
    };
    var money = whatIsBank();
    var positionInArray = i;
    var arrayToPush = [];
    for (var j = 0; j < 5; j++) {
      function whatIsLossAward() {
        var toStart = 1400;
        return toStart+(500*j);
      };
      var lossAward = whatIsLossAward();
      if (money >= fullBuy) {
        arrayToPush.push("full");
      } else if (money-1300+lossAward >= fullBuy) {
        arrayToPush.push("save");
      } else if (money+lossAward >= fullBuy) {
        arrayToPush.push("oner");
      } else if (money+lossAward < fullBuy) {
        arrayToPush.push("twor");
      } else {
        arrayToPush.push("something went wrong here");
      };
    };
    setList[setNumber].monies.push(arrayToPush);
  };
  // console.log(setList);
};
