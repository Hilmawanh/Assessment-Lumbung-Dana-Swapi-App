import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import List from "./pages/List";
import Story from "./pages/Story";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={"/"} exact>
          <Home />
          <List />
        </Route>

        <Route exact path="/list/detail/:id" component={Detail} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/Film" component={Movies} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
