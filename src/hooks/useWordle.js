import { useState } from 'react'
import { toast } from 'react-toastify';
import { checkWord } from '../helper/helper';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys,setUsedKeys] = useState({}) //{a:'green',b:'yell'}

  // format a guess into an array of letter objects 
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((l) => {
      return {key: l, color: 'grey'}
    })

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solution[i] === l.key) {
        formattedGuess[i].color = 'green'
        solutionArray[i] = null
      }
    })
    
    // find any yellow letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== 'green') {
        formattedGuess[i].color = 'yellow'
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory(prevHistory => {
      return [...prevHistory, currentGuess]
    })
    setTurn(prevTurn => {
      return prevTurn + 1
    })

    setUsedKeys((prevUsedKeys)=>{
      let newKeys = {...prevUsedKeys}
      
      formattedGuess.forEach(l => {
        const currentColor = prevUsedKeys[l.key]

        // console.log("prevUsedKeys[l.key]",prevUsedKeys[l.key])

        if (l.color === 'green') {
          prevUsedKeys[l.key] = 'green'
          return
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          prevUsedKeys[l.key] = 'yellow'
          return
        }
        if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
          prevUsedKeys[l.key] = 'grey'
          return
        }
      })

      return newKeys
    })

    setCurrentGuess('')
  }


  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = async ({ key }) => {

    // check when enter
    if (key === 'Enter') {

      if (turn>5) {
        return
      }
      // do not allow duplicate words
      else if (history.includes(currentGuess)) {
        toast.error('You already tried that word.');
        return
      }
      // check word is 5 chars
      else if (currentGuess.length !== 5) {
        toast.warn('Word must be 5 chars');
        return
      }
      else{
        // check meaning
        const response = await checkWord(currentGuess)
        if(response.status !== 200){
          toast.error(`The word "${currentGuess}" has no meaning.`);
          return
        }
      }
      const formatted = formatGuess()
      addNewGuess(formatted)
    }
    // del
    if (key === 'Backspace' || key === 'Del') {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }
    // add 
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key)
      }
    }
  }


  return {turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys}
}

export default useWordle
