const reducer = (state, action) => {
  switch (action.type) {
    case 'IS_LOGGED': 
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        isLogged: true
      }

    case 'SET_DATA':
      return {
        ...state,
        users: action.payload.users,
        messages: action.payload.messages,
      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      };

    case 'NEW_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
}

export default reducer