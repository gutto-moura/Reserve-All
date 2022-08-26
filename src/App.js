import { Router } from "react-router-dom";
import Header from "./components/Header";
import Router from "./routes"
import { Provider } from "react-redux";
import history from "./services/history";

import store from "./store";

function App() {
  return (
    <Provider store = {store}>
      <Router history={history}>
        <Header />
        <Router />
      </Router>
    </Provider>
  );
}

export default App;
