import "./App.css";
import MenuBar from "./Components/MenuBar";
import Homepage from "./Pages/Homepage";
import { useState } from "react";
import LoginPage from "./Pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <MenuBar />
      {user ? <Homepage user={user} /> : <LoginPage setUser={setUser} />}
    </div>
  );
}

export default App;
