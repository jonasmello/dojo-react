import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Divider, Grid, Header, Image, Segment } from "semantic-ui-react";

import { setUserData } from "../../redux/actions/userDataActions";
import { setFollowers } from "../../redux/actions/followersActions";
import { setFollowing } from "../../redux/actions/followingActions";

import FollowAndFollowers from "../components/FollowAndFollowers";
import LoginForm from "../components/LoginForm";

const headers = {
  headers: {
    Authorization: "token cce7551c1a4ff48ee0d9b2515dd9f555e7fe632f"
  }
};

const UserDetails = props => {
  const url = "https://api.github.com/users/";
  const { login } = props.match.params;

  const { userData, setUserData, setFollowers, setFollowing } = props;

  useEffect(() => {
    async function fetchUserData(login) {
      setUserData({});
      setFollowers([]);
      setFollowing([]);

      const responseUserData = await fetch(url + login, headers);
      const jsonUserData = await responseUserData.json();

      setUserData(jsonUserData);
    }
    fetchUserData(login);
  }, [login, setUserData, setFollowers, setFollowing]);

  useEffect(() => {
    async function fetchFollowersAndFollowing(login) {
      const responseFollowers = await fetch(url + login + "/followers?per_page=100", headers);
      const responseFollowing = await fetch(url + login + "/following?per_page=100", headers);
      const jsonFollowers = await responseFollowers.json();
      const jsonFollowing = await responseFollowing.json();
      setFollowers(jsonFollowers);
      setFollowing(jsonFollowing);
    }
    if (userData.login) {
      fetchFollowersAndFollowing(userData.login);
    }
  }, [userData.login, setFollowers, setFollowing]);

  return (
    <Container className="page details">
      <div className="content-top">
        <Segment>
          <Header as="h1" size="large">
            {userData.name}
          </Header>
          <Divider />

          <Grid columns={2} doubling>
            <Grid.Column>
              <Image size="small" className="user-thumb" src={userData.avatar_url} />
            </Grid.Column>
            <Grid.Column>
              {userData.bio && <p>{userData.bio}</p>}
              {userData.company && <p>{userData.company}</p>}
              {userData.blog && <p>{userData.blog}</p>}
              {userData.login && (
                <p>
                  <a href={`http://github.com/${userData.login}`} target="_blank" rel="noopener noreferrer">
                    {`http://github.com/${userData.login}`}
                  </a>
                </p>
              )}
              {userData.location && <p>{userData.location}</p>}
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

      <FollowAndFollowers />
    </Container>
  );
};
const mapStateToProps = state => ({
  userData: state.userData,
  followers: state.followers,
  following: state.following
});
const mapDispatchToProps = { setUserData, setFollowers, setFollowing };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
