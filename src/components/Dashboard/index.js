import { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import Login from "../Login";
import Home from "./home";

function Dashboard() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  return <>{user ? <Home /> : <Login />}</>;
}

export default Dashboard;
