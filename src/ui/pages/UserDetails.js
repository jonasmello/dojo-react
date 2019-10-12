import React, { useState, useEffect } from "react";
import { Container, Divider, Grid, Header, Image, Segment } from "semantic-ui-react";

import UserList from "../components/UserList";
import LoginForm from "../components/LoginForm";

const headers = {
  headers: {
    Authorization: "token cce7551c1a4ff48ee0d9b2515dd9f555e7fe632f"
  }
};

const UserDetails = props => {
  const { login } = props.match.params;
  const url = "https://api.github.com/users/";
  const [userData, setUserData] = useState({});
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    async function fetchUserData(login) {
      setUserData({});
      setFollowersList([]);
      setFollowingList([]);

      const responseUserData = await fetch(url + login, headers);
      const jsonUserData = await responseUserData.json();

      setUserData(jsonUserData);
    }
    fetchUserData(login);
  }, [login]);

  async function fetchFollowersAndFollowing(login) {
    const responseFollowers = await fetch(url + login + "/followers?per_page=99999", headers);
    const responseFollowing = await fetch(url + login + "/following?per_page=99999", headers);
    const jsonFollowers = await responseFollowers.json();
    const jsonFollowing = await responseFollowing.json();
    setFollowersList(jsonFollowers);
    setFollowingList(jsonFollowing);
  }

  useEffect(() => {
    if (userData.login) {
      fetchFollowersAndFollowing(userData.login);
    }
  }, [userData.login]);

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

      <Grid columns={2} doubling>
        <Grid.Column>
          <Segment>
            <UserList total={userData.followers} users={followersList} title={"Seguidores"} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <UserList total={userData.following} users={followingList} title={"Seguindo"} />
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default UserDetails;
