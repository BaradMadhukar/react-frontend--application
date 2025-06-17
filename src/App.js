import React, { useState } from "react";
import Login from "./Login.js";
import Logout from "./Logout.js"
import ProductList from "./ProductsList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <ProductList /> : <Login onLoginSuccess={() => setIsLoggedIn(true)} />}
    </div>
  );
}

export default App;
