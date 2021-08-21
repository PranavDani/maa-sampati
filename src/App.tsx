import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./home/Home";

export interface AppProps {

}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;