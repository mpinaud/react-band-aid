import React from 'react';
import PropTypes from 'prop-types';

function SignUp(props) {
  let _email = null;
  let _password = null;
  let _name = null;

  function handleNewUserSubmissionForm(event) {
    event.preventDefault();
    props.newUserProfile({email: _email.value, password: _password.value, name: _name.value});
  }

  return (
    <div>
      <style jsx>{`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        font-family: 'Roboto Condensed', sans-serif;
        color: #BA5624;
        h2 {
          margin: 90px 0 20px;
          font-size: 33px;
        }
        input {
          margin-bottom: 20px;
          border: 3px solid #617073;
          background: none;
          width: 200px;
          height: 28px;
        }
        button {
          background: none;
          border: 3px solid #617073;
          color: #BA5624;
          font-family: 'Roboto Condensed', sans-serif;
          height: 32px;
          font-size: 15px;
        }
      `}</style>
      <h2>Sign Up</h2>
      <form onSubmit={handleNewUserSubmissionForm}>
        <label>Email</label>
        <input type="email" ref={(input) => {_email = input;}}></input>
        <label>Password:</label>
        <input type="password" ref={(input) => {_password = input;}}></input>
        <label>Name:</label>
        <input type="name" ref={(input) => {_name = input;}}></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  newUserProfile: PropTypes.func
};

export default SignUp;
