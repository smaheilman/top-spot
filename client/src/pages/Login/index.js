import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
//import { userLogin } from "../utils/API";
//import Auth from "../utils/auth";

const LoginForm = () => {
  //const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  //const [validated] = useState(false);
  //const [showAlert, setShowAlert] = useState(false);
//
  //const handleInputChange = (event) => {
  //  const { name, value } = event.target;
  //  setUserFormData({ ...userFormData, [name]: value });
  //};
//
  //const handleFormSubmit = async (event) => {
  //  event.preventDefault();
//
  //  // check if form has everything (as per react-bootstrap docs)
  //  const form = event.currentTarget;
  //  if (form.checkValidity() === false) {
  //    event.preventDefault();
  //    event.stopPropagation();
  //  }
//
  //  try {
  //    const response = await userLogin(userFormData);
//
  //    if (!response.ok) {
  //      console.log(response);
  //      throw new Error(response.message);
  //    }
//
  //    const { token, user } = await response.json();
  //    console.log(user);
  //    Auth.login(token);
  //  } catch (err) {
  //    setShowAlert(true);
  //  }
//
  //  setUserFormData({
  //    username: "",
  //    email: "",
  //    password: "",
  //  });
  //};

  return (
    <div>
        <h1>LOGIN</h1>
    </div>
  );
};

export default LoginForm;
