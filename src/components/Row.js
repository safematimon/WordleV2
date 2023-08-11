import React from 'react'

const Row = ({guess,currentGuess}) => {

  if(guess){
    return (
      <div className='row past flex flex-row'>
      {guess.map((l, i) => {
        // console.log(l.color); // Move the console.log here
        return (
          <div key={i} className={l.color}>{l.key}</div>
          // <div key={i} className={`bg-${l.color}-600`}>{l.key}</div>
        );
      })}
      </div>
    )
  }

  if(currentGuess){
    // console.log("cg",currentGuess)
    let letters = currentGuess.split('')

    return (
      <div className='row current flex flex-row'>
      {letters.map((letter, i) => {
        // console.log(l.color); // Move the console.log here
        return (
          <div key={i} className="filled" >{letter}</div>
        );
      })}
      {[...Array(5-letters.length)].map((_,i)=>(
        <div key={i}></div>
      ))}
      </div>
    )
  }

  return (
    <div className='row flex flex-row'>
      <div className='w-16 h-16 border-4 border-black flex justify-center items-center m-2'></div>
      <div className='w-16 h-16 border-4 border-black flex justify-center items-center m-2'></div>
      <div className='w-16 h-16 border-4 border-black flex justify-center items-center m-2'></div>
      <div className='w-16 h-16 border-4 border-black flex justify-center items-center m-2'></div>
      <div className='w-16 h-16 border-4 border-black flex justify-center items-center m-2'></div>
    </div>
  )
}

export default Row

// import React from 'react'

// export default function Row({ guess }) {

//   if (guess) {
//     console
//     return (
//       <div className="row past">
//         {guess.map((l, i) => (
//           <div key={i} className={l.color}>{l.key}</div>
//         ))}
//       </div>
//     )
//   }

//   return (
//     <div className="row">
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </div>
//   )
  
// }