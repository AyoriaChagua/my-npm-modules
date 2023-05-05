exports.formValidator = (form, required) => {
  const errors = {};
  required.map((field) => {
    const fieldName = field;
    const fieldValue = form[fieldName];
    if (!fieldValue) {
      errors[fieldName] = "Required";
    }
    return fieldName;
  });

  Object.keys(form).map((field) => {
    const fieldName = field;
    const fieldValue = form[fieldName];

    switch (fieldName) {
      case "email":
        if (
          !fieldValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
        ) {
          errors[fieldName] = "Invalid email";
        }
        break;
      case "password":
        if (fieldValue.length < 6) {
          errors[fieldName] = "Password must be at least 6 characters long";
        }
        break;
      case "birthday":
        let fieldValueDate = fieldValue;
        fieldValueDate = new Date(Date.parse(fieldValueDate));
        if (fieldValueDate == "Invalid Date") {
          errors[fieldName] = "Invalid date format";
        }
        break;
      default:
        if (!fieldValue) errors[fieldName] = "Required";
    }
    return fieldValue;
  });

  if (Object.keys(errors).length === 0) {
    return true;
  } else {
    console.log({ errors }, "\n");
    return false;
  }
};
