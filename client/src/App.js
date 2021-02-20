//import logo from './logo.svg';
import Header from "./components/header/header.component.jsx";
import Footer from "./components/footer/footer.component";
import HomePage from "./components/homepage/homepage.component";
import Car from "./components/cars/cars.component";
import Contact from "./components/contact/contact.component";
import Logistic from "./components/logistics/logistics.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";

const store = ConfigureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cars" component={Car} />
            <Route path="/logistics" component={Logistic} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
