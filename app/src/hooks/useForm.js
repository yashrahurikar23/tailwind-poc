import { useEffect, useState } from "react";
// Utilities
import { isEmpty } from "../utils/utils";

const initialState = {
  username: "",
  password: ""
}

const useForm = (callback, validator) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if(isSubmitting) setErrors(validator(values));
  }, [values]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    const validatedErrors = validator(values);
    setErrors(validatedErrors);
    
    if (isEmpty(validatedErrors) && isSubmitting) {
      callback();
    }
  };

  const handleChange = (e) => {
    if (e) e.persist();
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));  
  };

  return {
    values,
    errors,
    handleSubmit,
    handleChange,
  };
};
export default useForm;
