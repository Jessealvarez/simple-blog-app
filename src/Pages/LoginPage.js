import React from "react";
import { useState } from "react";
const LoginPage = ({ setUser }) => {
  const [signInForm, setSignInForm] = useState({
    userName: "",
    profilePhotoUrl: "",
  });
  console.log("signInForm ------>", signInForm);
  return (
    <div className="card">
      <div>
        <input
          type="text"
          placeholder="email"
          value={signInForm.userName}
          onChange={(event) => {
            const { value } = event.target;
            setSignInForm({ ...signInForm, userName: value });
          }}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="photo url"
          value={signInForm.profilePhotoUrl}
          onChange={(event) => {
            const { value } = event.target;
            setSignInForm({ ...signInForm, profilePhotoUrl: value });
          }}
        ></input>
      </div>
      <div>
        <button type="submit" onClick={() => setUser(signInForm)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
