import React from "react";
import { connect } from "react-redux";
import { Grid, Segment } from "semantic-ui-react";

import UserList from "./UserList";

function FollowAndFollowers(props) {
  const { userData, followers, following } = props;
  return (
    <Grid columns={2} doubling>
      <Grid.Column>
        <Segment>
          <UserList total={userData.followers} users={followers} title={"Seguidores"} />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <UserList total={userData.following} users={following} title={"Seguindo"} />
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = state => ({
  userData: state.userData,
  followers: state.followers,
  following: state.following
});

export default connect(mapStateToProps)(FollowAndFollowers);
