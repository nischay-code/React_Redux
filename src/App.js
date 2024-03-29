import { Provider } from "react-redux";
import store from "./redux/Store";
import BookContainer from "./redux/BookContainer";
function App() {
  return (
    <Provider store={store}>
      <BookContainer />
    </Provider>
  );
}

export default App;
