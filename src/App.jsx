import { useState } from "react";
import UserSearch from "./components/UserSearch";
import Timer from "./components/Timer";
//import './App.css'

function App() {
  const [showTimer, setShowTimer] = useState(true);

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  return (
    <>
      <div>
        <UserSearch />
        <button onClick={toggleTimer}>Toggle timer</button>
        {showTimer ? <Timer /> : null}
      </div>
    </>
  );
}

export default App;
