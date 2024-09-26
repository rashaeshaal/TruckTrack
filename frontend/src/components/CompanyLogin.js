// src/components/CompanyLogin.js
import React from 'react';

function CompanyLogin() {
  return (
    <div className="company-login">
      <h1>Company Login</h1>
      <form>
        <label>
          Company ID:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default CompanyLogin;
