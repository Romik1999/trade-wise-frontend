/** Извлекает ошибки и записывает их в форму */
export const setErrors = (setError) => (result) => {
  const errorsObject = {};

  if (result && result.errors) {
    for (const fieldName in result.errors) {
      if (result.errors.hasOwnProperty(fieldName)) {
        const messages = result.errors[fieldName];
        if (messages && messages.length > 0) {
          errorsObject[fieldName] = { message: messages[0] };
        }
      }
    }
  } else if (result && result.message) {
    errorsObject.root = { message: result.message };
  }

  for (const field in errorsObject) {
    setError(field, errorsObject[field]);
  }
};
