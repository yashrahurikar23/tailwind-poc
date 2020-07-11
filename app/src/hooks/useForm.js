import { useState } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    callback();
  };

  const handleChange = (e) => {
    if (e) e.persist();
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return {
    values,
    handleSubmit,
    handleChange,
  };
};
export default useForm;