import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
