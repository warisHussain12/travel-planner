import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import OnboardingCard from "./components/OnboardingCard.jsx";

function App() {
  return (
    <div>
      {/* <h1 className="text-4xl">Plan Your Journey, Your Way!</h1>
      <p>Let's create your personalized travel experience</p> */}
      <OnboardingCard />
    </div>
  );
}

export default App;
