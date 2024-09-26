// src/components/DriverLogin.js
import React from 'react';

function DriverLogin() {
  return (
    <div className="driver-login">
      <h1>Driver Login</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default DriverLogin;
