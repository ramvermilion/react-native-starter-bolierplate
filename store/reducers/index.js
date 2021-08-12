const initialState = {
  isauthenticated: false,
  modal: false,
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        login: !state.login,
      };
    case 'modal':
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default RootReducer;
