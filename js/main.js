// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] == "Yes") {
      yesCount++;
    } else if (surveyData[i] == "No") {
      noCount++;
    } else {
      maybeCount++;
    }
  }
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.

  outputEl.innerHTML = `<div>Yes: ${yesCount}<div>
  <div>No: ${noCount}<div>
  <div>Maybe: ${maybeCount}<div>`;
  console.log(surveyData);
}

function traverseAgeData() {
  let countUnder18 = 0;
  let count18to35 = 0;
  let count36to65 = 0;
  let countAbove65 = 0;
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      countUnder18++;
    } else if (ageData[i] <= 35) {
      count18to35++;
    } else if (ageData[i] <= 65) {
      count36to65++;
    } else {
      countAbove65++;
    }
  }
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  outputEl.innerHTML = `<div>Under 18: ${countUnder18}<div><div>18 to 35: ${count18to35}<div><div>36 to 65: ${count36to65}<div><div>Above 65: ${countAbove65}<div>`;
  console.log(ageData);
}

function traverseNumberData() {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  outputEl.innerHTML = `<div>Even: ${evenCount}<div><div>Odd: ${oddCount}<div>`;
  console.log(numberData);
}
