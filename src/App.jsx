import React, { useState } from "react";

function App() {

  const [idea, setIdea] = useState("");

  constant [entered, setEntered] = useState(false);

  const handleClick = () => {
    setSubIdeas(generateSubIdeas(idea));
    setEntered(true);
  };

  const generateSubIdeas = (main) => {
    return [
      'What is ${main}?',
      '${main} examples',
      '${main} problems',
      'Future of ${main}'
    ];
  };

  const [subIdeas, setSubIdeas] = useState([]);


  return (
    <div className="relative w-full h-screen">
      {/* Centre Bubble */}
      <div className = "absolute top-1/2 left-1/2 transform -transform-x-1/2 -translate-y-1/2 bg-blue-400 text-white rounded-full w-32 h-32 flex items-center justify-centre">
        {idea}
      </div>

      {/*Sub bubbles*/}
      {subIdeas.map((sub,index) => {
        const angles = [0,90,180,270];
        const radius = 200;
        const rad = (angles[index] * Math.PI) / 180;

        return (
          <div 
            key = {index}
            className = "absolute bg-green-500 text-white rounded-full w-28 h-28 flex items-center justify-center"
            style = {{
              top: 'calc(50% + ${radius* Math.sin(rad)}px - 56px',
              left: 'calc(50% + ${radius* Math.cos(rad)}px - 56px'
            }}
          >
            {sub}
          </div>
        );
      })}
    </div>
  )
}

export default App;