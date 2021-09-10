import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./home/Home";
import Quotation from "./quotation/Quotation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./products/Products";

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
            <Route path="/quotation">
              <Quotation />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
