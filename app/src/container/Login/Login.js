import React, { Fragment, useState } from "react";
// Custom components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";

const initialFormState = {
  username: "",
  password: "",
  errorMap: ["username", "password"],
};

function Login() {
  const [formState, setFormState] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(false);
  // Event handlers
  const _handleInputChange = (e) => {
    if (e) e.persist();
    const { name, value } = e.target;

    if (!value) {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
        errorMap: [...formState.errorMap, name],
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
        errorMap:
          formState.errorMap.length !== 0 // Only run the filter if the errorMap has anything in it
            ? formState.errorMap.filter((field) => field !== name)
            : formState.errorMap,
      }));
    }
  };

  const _handleFormSubmit = (e) => {
    if (e) e.preventDefault();
    setSubmissionStatus(true);
    
    // If the 
    if (formState.errorMap.length !== 0) {
      return false;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmissionStatus(false);
    }, 5000);
  };

  console.log("FormState", formState);

  return (
    <Fragment>
      <div class="w-full h-screen flex items-center justify-center text-left">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={_handleFormSubmit}
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
            errorMessage={
              !formState.username && submissionStatus ? "Field is required" : ""
            }
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
            disabled={loading}
            errorMessage={
              !formState.password && submissionStatus
                ? "Field is required."
                : ""
            }
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
