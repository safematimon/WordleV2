import create from 'zustand';

const useKeyboardStore = create((set) => ({
  currentGuess: '',
  setCurrentGuess: (newCurrentGuess) => set({ currentGuess: newCurrentGuess }),
}));

// You can use this hook in your component to interact with the state
function MyComponent() {
  const { currentGuess, setCurrentGuess } = useKeyboardStore();

  const handleKeyPress = (event) => {
    const key = event.key;
    setCurrentGuess((prev) => prev + key);
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyPress} />
      <p>Current Guess: {currentGuess}</p>
    </div>
  );
}