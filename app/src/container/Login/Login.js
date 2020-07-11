import React, { Fragment, useState } from "react";
// Custom components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
// Hooks
import useForm from "../../hooks/useForm";
// Utilities
import { validateLoginForm } from "../../utils/validators";

function Login() {
  const { values, errors, handleChange, handleSubmit } = useForm(login, validateLoginForm);
  const [loading, setLoading] = useState(false);

  function login() {
    console.log("login");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  console.log("values", values, errors);

  return (
    <Fragment>
      <div class="w-full h-screen flex items-center justify-center text-left">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Enter your username"
            name="username"
            type="input"
            for="username"
            label="Username"
            divClass="mb-4"
            labelClass=""
            className=""
            disabled={loading}
            errorMessage={errors.username}
            value={values.username || ""}
            onChange={handleChange}
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
            disabled={loading}
            errorMessage={errors.password}
            value={values.password || ""}
            onChange={handleChange}
          />

          <div class="flex items-center justify-between">
            <Button
              label="Login"
              type="submit"
              className=""
              onClick={handleSubmit}
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
