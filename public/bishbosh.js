// src/bishbosh.ts
var delay = function(time) {
  return new Promise((resolve, _) => setTimeout(resolve, time));
};
async function displayBishBosh(rowCount, bishNumber, boshNumber, displayField) {
  displayField.innerHTML = "";
  for (let index = 1;index <= rowCount; index++) {
    await delay(500);
    let output;
    if (index % bishNumber == 0 && index % boshNumber == 0) {
      output = "bish-bosh";
    } else if (index % bishNumber == 0) {
      output = "bish";
    } else if (index % boshNumber == 0) {
      output = "bosh";
    } else {
      output = index.toString();
    }
    let outputElem = document.createElement("p");
    outputElem.textContent = output;
    displayField.appendChild(outputElem);
  }
}
var bishNumberInput = document.getElementById("bish-number");
var boshNumberInput = document.getElementById("bosh-number");
var bishBoshRowsInput = document.getElementById("bish-bosh-rows");
var bishBoshButton = document.getElementById("bish-bosh-button");
var bishNumberDisplay = document.getElementById("bish-number-display");
var boshNumberDisplay = document.getElementById("bosh-number-display");
var bishBoshRowsDisplay = document.getElementById("bish-bosh-rows-display");
var bishBoshTextDisplay = document.getElementById("bish-bosh-text-display");
[bishNumberInput, boshNumberInput, bishBoshRowsInput].forEach((i) => {
  i.addEventListener("change", (event) => {
    event.preventDefault();
    let target = event.target;
    switch (target.id) {
      case "bish-number":
        bishNumberDisplay.textContent = target.value;
        break;
      case "bosh-number":
        boshNumberDisplay.textContent = target.value;
        break;
      case "bish-bosh-rows":
        bishBoshRowsDisplay.textContent = target.value;
        break;
    }
  });
});
bishNumberDisplay.textContent = bishNumberInput.value;
boshNumberDisplay.textContent = boshNumberInput.value;
bishBoshRowsDisplay.textContent = bishBoshRowsInput.value;
bishBoshButton?.addEventListener("click", (event) => {
  event.preventDefault();
  let bishNumber = Number.parseInt(bishNumberInput.value);
  let boshNumber = Number.parseInt(boshNumberInput.value);
  let bishBoshRows = Number.parseInt(bishBoshRowsInput.value);
  displayBishBosh(bishBoshRows, bishNumber, boshNumber, bishBoshTextDisplay);
});
