import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

// We grab the properties from App since it shares the children UsersList and Input
// Therefore, this just grabs the array that was created in App that holds our key, username and age

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul className={classes.ul}>
        {props.users.map((user) => (
          <li className={classes.li} key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;