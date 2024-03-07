import { buybook } from "./BookTypes";
const initialState = { NumberOfBook: 20 };

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buybook:
      return { ...state, NumberOfBook: state.initialState - 1 };
    default:
      return state;
  }
};

export default BookReducer;
