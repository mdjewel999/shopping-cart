/* 
1. add event listener to the case plus button
2. get the valu inside the case number field (input field)
3. convert the number to an integer 
4. calculate the new case number
5. set the valu to the case number field
*/
function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousePhoneNumber = parseInt(phoneNumberString);
  let newPhoneNumber;
  if (isIncrease === true) {
    newPhoneNumber = previousePhoneNumber + 1;
  } else {
    newPhoneNumber = previousePhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  const phoneTotalElement = document.getElementById("phone-total");
  phoneTotalElement.innerText = phoneTotalPrice;
}
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);
    //   const caseTotalPrice = newCaseNumber * 59;
    //   const caseTotalElement = document.getElementById("phone-total");
    //   phoneTotalElement.innerText = phoneTotalPrice;
    updatePhoneTotalPrice(newPhoneNumber);
  });

document
  .getElementById("btn-phone-mins")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
    // const phoneTotalPrice = newPhoneNumber * 59;
    // const phoneTotalElement = document.getElementById("phone-total");
    // phoneTotalElement.innerText = phoneTotalPrice;
    updatePhoneTotalPrice(newPhoneNumber);
  });
