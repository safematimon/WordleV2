import Row from './Row'
import useStore from "../store/useStore";

const Grid = () => {

  const {
    turn,
    currentGuess,
    guesses,
  } = useStore();

  return (
    <div>
      {guesses.map((g,i)=>{
        // current guess
        if(turn===i){
          return <Row key={i} currentGuess={currentGuess} />
        }
        // prev guess
        return <Row key={i} guess={g} />
      })}
    </div>
  )
}

export default Grid