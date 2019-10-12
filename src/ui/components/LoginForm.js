import React from "react";
import { Button, Form } from "semantic-ui-react";

const LoginForm = () => (
    <Form size="large">
      <Form.Input fluid icon="user" iconPosition="left" placeholder="Insira seu login do Github" />

      <Button color="teal" fluid size="large">
        Entrar
      </Button>
  </Form>
);

export default LoginForm;
