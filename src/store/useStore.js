import {create} from 'zustand';

const useStore = create((set) => ({
  solution: null,
  setSolution: (newSolution) => set({ solution: newSolution }),

  turn: 0,
  incrementTurn: () => {
    set((state) => ({ turn: state.turn + 1 }));
  },

  currentGuess: '',
  setCurrentGuess: (newCurrentGuess) => set({ currentGuess: newCurrentGuess }),
  addCurrentGuess: (newCurrentGuess) => {
    set((state) => ({ currentGuess: state.currentGuess + newCurrentGuess }));
  },
  delCurrentGuess: () => {
    set((state) => ({ currentGuess: state.currentGuess.slice(0, -1) }));
  },
  
  guesses: [...Array(6)],
  addGuesses: (turn, formattedGuess) => {
    set((state) => {
      const newGuesses = [...state.guesses];
      newGuesses[turn] = formattedGuess;
      return { guesses: newGuesses };
    });},

  history: '',
  addToHistory: (currentGuess) => {
    set((state) => ({ history: [...state.history, currentGuess] }));
  },

  isCorrect: false,
  setIsCorrect: (newIsCorrect) => set({ isCorrect: newIsCorrect }),

  usedKeys: {},
  updateUsedKeys: (formattedGuess) => {
    set((state) => {
      const newUsedKeys = { ...state.usedKeys };

      formattedGuess.forEach((l) => {
        const currentColor = state.usedKeys[l.key];

        if (l.color === 'green') {
          newUsedKeys[l.key] = 'green';
          return;
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          newUsedKeys[l.key] = 'yellow';
          return;
        }
        if (l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
          newUsedKeys[l.key] = 'grey';
          return;
        }
      });

      return { usedKeys: newUsedKeys };
    });
  },

}));

export default useStore;