export const incrementCounter = () => async (dispatch) => {
  dispatch({
    type: "INCREMENT"
  });
};

export const decrementCounter = () => async (dispatch) => {
  dispatch({
    type: "DECREMENT"
  });
};
