import React, { useState } from "react";

function App() {

  const [idea, setIdea] = useState("");

  const handleClick = () => {
    console.log("You entered:", idea);
  };

  return (
    <div>
      <h1>ExpandAI</h1>
      <input
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder = "Enter your idea..."
      />
      <button onClick={handleClick}>Brainstorm!</button>
    </div>
  );
}

export default App;