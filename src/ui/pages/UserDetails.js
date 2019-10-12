import React from "react";
import { Container, Divider, Grid, Header, Image, Segment } from "semantic-ui-react";

import UserList from "../components/UserList";
import LoginForm from "../components/LoginForm";

const UserDetails = () => (
  <Container className="page details">
    <div className="content-top">
      <Segment>
        <Header as="h1" size="large">
          Jonas Mello
        </Header>
        <Divider />

        <Grid columns={2} doubling>
          <Grid.Column>
            <Image size="small" className="user-thumb" src="https://avatars0.githubusercontent.com/u/1612563?v=4" />
          </Grid.Column>
          <Grid.Column>
            <p>Desenvolvedor Front-end</p>
            <p>DBC Company</p>
            <p>https://br.linkedin.com/in/jonasmello</p>
            <p>Porto Alegre</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Header as="h3" size="medium">
          Faça o login com outro usuário
        </Header>
        <Divider />
        <div className="details-form">
          <LoginForm />
        </div>
      </Segment>
    </div>

    <Grid columns={2} doubling>
      <Grid.Column>
        <Segment>
          <UserList />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <UserList />
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>
);

export default UserDetails;
