import React,{useEffect,useState} from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import QwertyKeypad from './QwertyKeypad'
import { toast } from 'react-toastify';
import useStore from "../store/useStore";


const Wordle = () => {

  const {
    solution,
    turn,
    currentGuess,
    isCorrect,
  } = useStore();

  const handleKeyup = useWordle()
  
  // for real keyboard action
  useEffect(() => {
    window.addEventListener('keyup',handleKeyup)

    if(isCorrect){
      toast.success('Congrats, You win!');
      window.removeEventListener('keyup', handleKeyup)
    }

    if(turn>5){
      toast.error('Unlucky, Out of guesses');
      window.removeEventListener('keyup', handleKeyup)
    }

    return()=> window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup,isCorrect,turn])


  // for virtual keypad action
  const handleKeyClick = (key) => {
    handleKeyup({key})
  };


  return (
    <div className='flex flex-col justify-center items-center p-10' >
      {/* <div>Solution - {solution}</div>  */}
      {/* <div>Current Guess - {currentGuess}</div> */}
      
      {/* <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} /> */}
      <Grid/>

      {/* old keypad (a-z not QWERTY and hot interactive) */}
      {/* <Keypad usedKeys={usedKeys}/> */}

      {/* <QwertyKeypad onKeyClick={handleKeyClick} usedKeys={usedKeys} turn={turn} isCorrect={isCorrect} /> */}
      <QwertyKeypad onKeyClick={handleKeyClick}  />

    </div>
  )
}

export default Wordle