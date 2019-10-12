import React from "react";
import { Grid, Header, Segment, Divider } from "semantic-ui-react";

import LoginForm from "../components/LoginForm";

const LoginPage = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Segment stacked>
        <Header as="h2" color="teal" textAlign="center">
          Faça o login com o usuário do Github
        </Header>
        <Divider />
        <LoginForm />
      </Segment>
    </Grid.Column>
  </Grid>
);

export default LoginPage;
