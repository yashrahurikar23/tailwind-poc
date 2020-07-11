export const validateLoginForm = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "Field is required.";
  } 
  
  if (!values.password) {
    errors.password = "Field is required.";
  }

  return errors;
};
