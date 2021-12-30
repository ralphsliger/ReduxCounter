const INITIAL_STATE = {
  count: 0
};

export const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 10 };
    }

    case "DECREMENT": {
      return { ...state, count: state.count - 10 };
    }

    default:
      return state;
  }
};
