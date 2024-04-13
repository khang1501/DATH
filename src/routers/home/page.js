import React from "react";
import *as Realm from "realm-web";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
const app = new Realm.App({ id: process.eventNames.REACT_APP_REALM_ID });

const schema = {
  title: "Register",
  type: "object",
  required: ["email", "password"],
  properties: {
    email: { type: "string", title: "Email", format: "email" },
    password: { type: "string", title: "Password", minLength: 6 },
  },
};
const Home = () => {
  const onSubmit = (form) => {
    console.log(form.formData);
  };
  return (
    <div>
      <Form 
      schema={schema} 
      validator={validator} 
      onSubmit={onSubmit} />,
    </div>
  );
};

export default Home;
