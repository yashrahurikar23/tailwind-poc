import React, { Fragment, useState } from "react";
// Custom components
import Input from "../../components/Input";
import Button from "../../components/Button";

const initialFormState = {
  username: "",
  password: "",
};

function Login() {
  const [formState, setFormState] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  // Event handlers
  const _handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const _handleFormSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <Fragment>
      <Input
        placeholder="Enter your username"
        name="username"
        type="input"
        value={formState.username}
        onChange={_handleInputChange}
      />

      <Input
        placeholder="Enter your password"
        name="password"
        type="password"
        value={formState.password}
        onChange={_handleInputChange}
      />

      <Button
        label="Login"
        type='button'
        onClick={_handleFormSubmit}
      />
    </Fragment>
  );
}

export default Login;
