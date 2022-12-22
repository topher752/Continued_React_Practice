import React, { useState, useRef } from "react";
import classes from "./Input.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal";
import Wrappers from "../Helpers/Wrappers.js"

const Input = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // These are our variables and our "setters"
  const [error, setError] = useState()

  // When we click submit, we check if username and age is valid and if it is, call the AddUser class with the variables above
  const inputHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // Below only works IF this condition is NOT met: (last if statement, the '+' translates a string to an int)
    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      +enteredUserAge < 1
    ) {
      setError({header:'Invalid information', message: 'Make sure the age and name are correct'})
      return;
    }

    // From App, the property is only a function call in App that takes in our age and username variables
    props.onAddUser(enteredName, enteredUserAge);
    
    // Don't EVER really do this
    nameInputRef.current.value='';
    ageInputRef.current.value='';
  };

  // Function for if we closed the error modal
  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrappers>
      {error && <ErrorModal
        header={error.header}
        message={error.message}
        onButtonPress={errorHandler}
      />}
      <Card className={classes.input}>
        <form onSubmit={inputHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrappers>
  );
};

export default Input;
