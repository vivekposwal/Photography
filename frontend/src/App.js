import "./bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
//import Clubbed from "./Clubbed";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Services from "./Services/Services";
import CreateQuery from "./CreateQuery/CreateQuery";
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Route exact path="/" component={CreateQuery} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </main>
    </BrowserRouter>
  );
};

export default App;
