import { useState } from "react";

import "./App.css";
import { NavigationBar } from "./components/navigationbar";
import { HomePage } from "./components/homepag";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavigationBar />
        {/* <CenterSection/> */}
        <HomePage />
      </div>
    </>
  );
}

export default App;
