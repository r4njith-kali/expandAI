import React, { useState } from "react";

function App() {
  const [idea, setIdea] = useState("");
  const [entered, setEntered] = useState(false); 
  const [subIdeas, setSubIdeas] = useState([]);

  const handleClick = () => {
    setSubIdeas(generateSubIdeas(idea));
    setEntered(true);
  };

  const generateSubIdeas = (main) => {
    return [
      `What is ${main}?`,         
      `${main} examples`,
      `${main} problems`,
      `Future of ${main}`
    ];
  };

  const angles = [0, 90, 180, 270];
  const radius = 200;

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white">
      {/* Prompt Input */}
      {!entered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <input
            type="text"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Enter your idea..."
            className="p-2 rounded-md text-black"
          />
          <button
            onClick={handleClick}
            className="ml-2 p-2 bg-blue-600 rounded-md"
          >
            Enter
          </button>
        </div>
      )}

      {/* Center Bubble */}
      {entered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center text-white text-center">
          {idea}
        </div>
      )}

      {/* Sub-Ideas Bubbles */}
      {entered &&
        subIdeas.map((sub, index) => {
          const rad = (angles[index] * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <div
              key={index}
              className="absolute bg-green-500 rounded-full w-28 h-28 flex items-center justify-center text-center"
              style={{
                top: `calc(50% + ${y}px - 56px)`,
                left: `calc(50% + ${x}px - 56px)`
              }}
            >
              {sub}
            </div>
          );
        })}
    </div>
  );
}

export default App;
