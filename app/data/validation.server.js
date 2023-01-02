function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}

function isValidDate(value) {
  let currentDate =
    +new Date().toISOString().slice(0, 10).replace(/-/g, "") - 1;
  let userInput = new Date(value).toISOString().slice(0, 10);
  let newUserInput = +userInput.replace(/-/g, "");
  console.log(currentDate);
  console.log(newUserInput);
  return newUserInput - currentDate >= 0;
}

export function validateNoteInput(input) {
  let validationErrors = {};

  if (!isValidTitle(input.title)) {
    validationErrors.title =
      "Invalid expense title. Must be at most 30 characters long.";
  }

  if (!isValidDate(input.date)) {
    validationErrors.date =
      "Invalid date. Must be a date after or including today.";
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
