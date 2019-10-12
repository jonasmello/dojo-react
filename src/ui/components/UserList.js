import React from "react";
import { Header, Divider, List, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ListExampleImage = props => {
  const { title, users, total } = props;
  return (
    <>
      <Header as="h3" size="medium">
        {title}({total}):
      </Header>
      <Divider />
      <List horizontal className="users-list">
        {users.map(user => (
          <List.Item className="list-item" key={user.login}>
            <div className="list-item-ct">
              <Image avatar src={user.avatar_url} />
              <List.Content>
                <List.Header as={Link} to={`/${user.login}`}>
                  {user.login}
                </List.Header>
              </List.Content>
            </div>
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default ListExampleImage;
