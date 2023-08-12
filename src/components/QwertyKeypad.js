import useStore from "../store/useStore";


const QwertyKeypad = ({ onKeyClick}) => {

  const {
    turn,
    isCorrect,
    usedKeys
  } = useStore();

  const letters = [
    {key: "q"},
    {key: "w"},
    {key: "e"},
    {key: "r"},
    {key: "t"},
    {key: "y"},
    {key: "u"},
    {key: "i"},
    {key: "o"},
    {key: "p"},
    {key: "a"},
    {key: "s"},
    {key: "d"},
    {key: "f"},
    {key: "g"},
    {key: "h"},
    {key: "j"},
    {key: "k"},
    {key: "l"},
    {key: "Enter"},
    {key: "z"},
    {key: "x"},
    {key: "c"},
    {key: "v"},
    {key: "b"},
    {key: "n"},
    {key: "m"},
    {key: "Del"},
  ]

  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter','Z', 'X', 'C', 'V', 'B', 'N', 'M','Del'],
  ];

  const rows2 = [
    letters.slice(0, 10),
    letters.slice(10, 19),
    letters.slice(19, 28)
  ];

  return (
    <div className="qwerty ">
      {rows2.map((row, rowIndex) => (
        <div key={rowIndex} className="row keypad">
        {row.map((l) => {
          const color = usedKeys[l.key]
          return(
            <button
              key={l.key} className={color}
              onClick={() => onKeyClick(l.key)}
              disabled={ isCorrect || turn > 5}
            >{l.key}</button>
          )
        })}
      </div>
      ))}
    </div>
  );
};

export default QwertyKeypad;