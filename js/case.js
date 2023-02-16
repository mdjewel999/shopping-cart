document.getElementById("bt-case-plus").addEventListener("click", function () {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousNumber = parseInt(caseNumberString);

  const newCaseNumber = previousNumber + 1;
  caseNumberField.value = newCaseNumber;
});
