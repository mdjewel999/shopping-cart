/* 
1. add event listener to the case plus button
2. get the valu inside the case number field (input field)
3. convert the number to an integer 
4. calculate the new case number
5. set the valu to the case number field
*/
function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previouseCaseNumber = parseInt(caseNumberString);
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previouseCaseNumber + 1;
  } else {
    newCaseNumber = previouseCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById("bt-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  //   const caseTotalPrice = newCaseNumber * 59;
  //   const caseTotalElement = document.getElementById("case-total");
  //   caseTotalElement.innerText = caseTotalPrice;
  updateCaseTotalPrice(newCaseNumber);
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById("case-total");
    // caseTotalElement.innerText = caseTotalPrice;
    updateCaseTotalPrice(newCaseNumber);
  });
