import { useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Wordle from "./components/Wordle";
import { getSolution } from "./helper/helper";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [solution,setSolution] = useState(null)

  useEffect(() => {
    const fetchSolutionData = async () => {
      try {
        const data = await getSolution();
        const randomSolution = data[Math.floor(Math.random()*data.length)]
        setSolution(randomSolution.word)
      } catch (error) {
        console.error(error);
      }
    };
    fetchSolutionData();
  }, []);


  return (
    <div className="App min-h-screen bg-cyan-200/0 font-mono">
      <h1 className='flex justify-center items-center 
        h-20 bg-gray-200 font-medium text-3xl border-b-2 border-solid border-black'>
          wordle
      </h1>

      {solution && <Wordle solution={solution}/>}
      <ToastContainer />
    </div>
  );
}

export default App;
