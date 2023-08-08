import { useEffect,useState } from "react";
import Wordle from "./components/Wordle";


function App() {

  const [solution,setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/solutions')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])
    

  return (
    <div className="App min-h-screen bg-cyan-200/0 font-mono">
      <h1 className='flex justify-center items-center 
        h-20 bg-gray-200 font-medium text-3xl border-b-2 border-solid border-black'>
          wordle
      </h1>

      {solution && <Wordle solution={solution}/>}
    
    </div>
  );
}

export default App;
