import React,{useEffect,useState} from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import QwertyKeypad from './QwertyKeypad'

const Wordle = ({solution}) => {

  const {currentGuess,handleKeyup,guesses,isCorrect,turn,usedKeys} = useWordle(solution)
  const [input, setInput] = useState('');
  
  // useEffect(() => {
  //   console.log(guesses,isCorrect,turn)
  // }, [guesses,isCorrect,turn]);
 
  // for real keyboard action
  useEffect(() => {
    // console.log("tick")
    window.addEventListener('keyup',handleKeyup)

    if(isCorrect){
      console.log('Congrats, You win!')
      window.removeEventListener('keyup', handleKeyup)
    }
    if(turn>5){
      console.log('Unlucky, Out of guesses')
      window.removeEventListener('keyup', handleKeyup)
    }


    return()=> window.removeEventListener('keyup', handleKeyup)

  }, [handleKeyup,isCorrect,turn])


  // for virtual keypad action
  const handleKeyClick = (key) => {
    handleKeyup({key})
  };


  return (
    <div className='flex flex-col justify-center items-center' >
      {/* <div>Solution - {solution}</div>  */}
      {/* <div>Current Guess - {currentGuess}</div> */}
      
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      {/* old keypad (a-z not QWERTY and hot interactive) */}
      {/* <Keypad usedKeys={usedKeys}/> */}
      <QwertyKeypad onKeyClick={handleKeyClick} usedKeys={usedKeys} turn={turn} isCorrect={isCorrect} />

    </div>
  )
}

export default Wordle