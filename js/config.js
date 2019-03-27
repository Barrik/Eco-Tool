console.log('config.js has run');

var configTest = 'config.js is communicating with script.js';

// ---Functions to generate different CS commands---
var createAlias = function(aliasName, aliasValue) {
  var totalOutput = "alias \"" + aliasName +"\" \"" + aliasValue +"\";";
  return totalOutput;
};
var createEcho = function(echoValue) {
  var totalOutput = "echo " + "\"" + echoValue + "\";";
  return totalOutput;
};

//  ---Function to add a line of text to the site with one line of code---
var addLine = function(lineOfText, divToAddTo) {
  var text = String(lineOfText + "<br>");
  divToAddTo.innerHTML += text;
};

// ---Populate ecotool.cfg---
var generateEcoTool = function(x) {
  addLine("clear;", x);
  for (var i = 0; i < setList.length; i++) {
    // var customAlias = setList[i].name;
    addLine(createAlias(setList[i].name, ""), x);
  };
  // 'ecotool' + setList[i].name.toLowerCase() + '.cfg'
  addLine(createAlias("lossbonus", "clear; lossbonus1; lossbonus2;"), x);
  addLine(createAlias("lossbonus1", "echo \"What does your round loss counter say?\";"), x);
  addLine(createAlias("lossbonus2", "echo \"______________________________________\";"), x);
  addLine(createAlias("lines", "echo \"=========================\";"), x);
  addLine(createAlias("twor", "clear; echo You will have to save two rounds to full buy.  You might need to force buy this round.; lines;"), x);
  addLine(createAlias("oner", "clear; echo You can buy next round if you save this round. You should probably save.; lines;"), x);
  addLine(createAlias("some", "clear; echo You can buy next round if you only spend a little bit.  Subtract your full buy price from your next round loss award, then keep that much in the bank.; lines;"), x);
  addLine(createAlias("full", "clear; echo You can full buy this round.; lines;"), x);
  addLine("lines;", x);
  addLine(createEcho("\xa0\xa0\xa0Eco Tool Activated\xa0\xa0\xa0\xa0"), x);
  addLine("lines;", x);
  addLine(createEcho(" "), x);
  addLine(createEcho(" "), x);
  addLine(createEcho("What set are you using?"), x);
  addLine(createEcho("_______________________"), x);
  addLine(createEcho(" "), x);
  for (var i = 0; i < setList.length; i++) {
    addLine(createEcho("*" + setList[i].name), x);
  };
  for (var i = 0; i < setList.length; i++) {
    addLine(createAlias(setList[i].name, "exec " + 'ecotool' + setList[i].name.toLowerCase()), x);
  };

};

// ---Populate eco sets---
var generateEcoSet = function(x, setNum) {
  addLine("clear;", x);
  addLine(createEcho(setNum.name), x);
  addLine("lines;", x);
  addLine(createEcho(" "), x);
  addLine(createEcho(" "), x);
  addLine(createEcho("How much money do you have? (1400 - 4800, round down)"), x);
  addLine(createEcho("_____________________________________________________"), x);
  for (var i = 0; i < setNum.monies.length; i++) {
    var answer = [1400+100*i];
    addLine(createAlias(answer, createAlias("0", setNum.monies[i][0]) + " " + createAlias("1", setNum.monies[i][1]) + " " + createAlias("2", setNum.monies[i][2]) + " " + createAlias("3", setNum.monies[i][3]) + " " + createAlias("4", setNum.monies[i][4]) + " lossbonus;"), x);
  }
};
