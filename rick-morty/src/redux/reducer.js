const stateInit = {
  characters: [],
  activeCharacter: {},
  isLoading: true
};

const reducer = (state = stateInit, action) => {
  switch(action.type) {
    case 'LOADING': {
      return { ...state, isLoading: true }
    }
    case 'FETCHCHARACTERS': {
      return { 
        ...state,
        characters: [ ...state.characters, ...action.payload ],
        isLoading: false
      }
    }
    case 'SEARCHCHARACTER': {
      return { 
        ...state,
        activeCharacter: { ...state.activeCharacter, ...action.payload},
        isLoading: false
      }
    }
    default: {
      return state
    }
  }
};

export default reducer;