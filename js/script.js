console.log("script.js has run.");

var d = document;
var nameList = [];
var valueList = [];

// Get Set Amount
var amountOfSets;
d.querySelector('#setsButton').addEventListener('click', function() {
  var amountOfSets = d.querySelector('#setsValue').options[d.querySelector('#setsValue').selectedIndex].value;
  console.log(amountOfSets);
  hideSetAmount();
  for (var i = 0; i < amountOfSets; i++) {
    console.log([i]);
    var headerOne = d.createElement("h1");
    var headerText = d.createTextNode("Set " + String(i + 1));
    var setList = d.querySelector("#setList");
    headerOne.appendChild(headerText);
    setList.appendChild(headerOne);
    var setDiv = d.createElement('div');
    setDiv.setAttribute('id', 'test');
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
    setList.appendChild(setDiv);

  };
  var lineBreak = d.createElement('br');
  setList.appendChild(lineBreak);
  var createButton = d.createElement('BUTTON');
  createButton.setAttribute('id', 'createButton');
  var createText = d.createTextNode('Create your script');
  createButton.appendChild(createText);
  setList.appendChild(createButton);

  // Get Set Inputs
  d.querySelector('#createButton').addEventListener('click', function() {
    // console.log(amountOfSets);
    for (var i = 0; i < amountOfSets; i++) {
        var nameToAdd = d.querySelector('#name' + i).value;
        var valueToAdd = d.querySelector('#value' + i).value;
        nameList.push(nameToAdd);
        valueList.push(valueToAdd);
      };
      console.log(nameList);
      console.log(valueList);

    });

});

// Hide Set Amount
function hideSetAmount() {
  var sets = d.querySelector('#sets');
  sets.classList.add('hidden');
};
