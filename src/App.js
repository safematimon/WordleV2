import { useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Wordle from "./components/Wordle";
import { getSolution } from "./helper/helper";
import useStore from "./store/useStore";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { solution, setSolution } = useStore();

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


  // 
  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Ctrl key and 'A' key are pressed together (event.key === "a" or "A")
      if (event.ctrlKey && (event.key === "a" || event.key === "A")) {
        // Prevent the default behavior of Ctrl+A
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <div className="App min-h-screen bg-cyan-200/0 font-mono" onMouseDown={handleMouseDown} >
      <h1 className='flex justify-center items-center 
        h-20 bg-gray-200 font-medium text-3xl border-b-2 border-solid border-black'>
          wordle
      </h1>

      {solution && <Wordle />}
      <ToastContainer />
    </div>
  );
}

export default App;
