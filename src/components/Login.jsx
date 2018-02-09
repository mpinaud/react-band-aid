import React from 'react';

function Login() {
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
      <h2>Login</h2>
      <label for="user-email">Email</label>
      <input type="email"></input>
      <label for="user-password">Password:</label>
      <input type="password"></input>
      <button>Login!</button>
    </div>
  );
}

export default Login;
