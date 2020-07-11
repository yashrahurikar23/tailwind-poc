import React, { Fragment, useState } from "react";
// Custom components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";

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
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const _handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  console.log("FormState", formState);

  return (
    <Fragment>
      <div class="w-full h-screen flex items-center justify-center text-left">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={_handleFormSubmit}>
          <Input
            placeholder="Enter your username"
            name="username"
            type="input"
            for="username"
            label="Username"
            divClass="mb-4"
            labelClass=""
            className=""
            value={formState.username}
            onChange={_handleInputChange}
          />

          <Input
            placeholder="*********************"
            name="password"
            type="password"
            for="password"
            label="Password"
            divClass="mb-6"
            labelClass=""
            className=""
            value={formState.password}
            onChange={_handleInputChange}
          />

          <div class="flex items-center justify-between">
            <Button
              label="Login"
              type="submit"
              className=""
              onClick={_handleFormSubmit}
              loading={loading}
              loadingBtnClass=""
            />
            <Link href="#" label="Forgot Password?" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
