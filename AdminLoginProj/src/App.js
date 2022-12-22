import React, { useState, Fragment } from 'react';
import './App.css';
import Input from './InputForms/Input'
import UsersList from './InputForms/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const usersListHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [...prevList, {name: uName, age: uAge, id: Math.random().toString() }];
    });
  }

  return (
    <Fragment>
      <Input onAddUser={usersListHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
