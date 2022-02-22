import "./bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Clubbed from "./Clubbed";
import Contact from "./Contact/Contact";
import About from "./About/About";
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Route exact path="/" component={Clubbed} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </main>
    </BrowserRouter>
  );
};

export default App;
