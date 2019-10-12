import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

import { withRouter } from "react-router-dom";

const LoginForm = props => {
  const { history } = props;
  const [login, setLogin] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/${login}`);
    setLogin("");
  }

  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="Insira seu login do Github"
        value={login}
        onChange={e => setLogin(e.target.value)}
      />

      <Button color="teal" fluid size="large">
        Entrar
      </Button>
    </Form>
  );
};

export default withRouter(LoginForm);
