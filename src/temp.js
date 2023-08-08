const QwertyKeypad = ({ onKeyClick,usedKeys }) => {

  const letters = [
    {"key": "q"},
    {"key": "w"},
    {"key": "e"},
    {"key": "r"},
    {"key": "t"},
    {"key": "y"},
    {"key": "u"},
    {"key": "i"},
    {"key": "o"},
    {"key": "p"},
    {"key": "a"},
    {"key": "s"},
    {"key": "d"},
    {"key": "f"},
    {"key": "g"},
    {"key": "h"},
    {"key": "j"},
    {"key": "k"},
    {"key": "l"},
    {"key": "z"},
    {"key": "x"},
    {"key": "c"},
    {"key": "v"},
    {"key": "b"},
    {"key": "n"},
    {"key": "m"}
  ]

  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter','Z', 'X', 'C', 'V', 'B', 'N', 'M','Del'],
  ];

  const rows2 = [
    letters.slice(0, 10),
    letters.slice(10, 19),
    letters.slice(19),
  ];

  console.log(rows2)

  return (
    <>
     <div className="qwerty-keypad">
       {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="key-row">
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              className={`key-button ${key === 'Delete' ? 'delete' : key === 'Enter' ? 'enter' : ''}`}
              onClick={() => onKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
{/*     
    <div className="qwerty keypad">
      {letters && letters.map((l) => {
        return (
          <button key={l.key}
          onClick={() => onKeyClick(l.key)} >{l.key}</button>
        )
      })}
    </div>

    <div className="qwerty ">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keypad">
          {row.map((l) => (
            <button
              key={l.key}
              onClick={() => onKeyClick(l.key)}
            >{l.key}</button>
          ))}
        </div>
      ))}
    </div> */}

  </>
  );
};

export default QwertyKeypad;






