import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts"
import Portfolio from "./Pages/Portfolio"
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
 
const Animated = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Switch
                location={location}
                key={location.pathname}
            >
                <Route
                    exact
                    path="/home"
                    component={Home}
                ></Route>
                <Route
                    exact
                    path="/About"
                    component={About}
                ></Route>
                <Route
                    exact
                    path="/Contacts"
                    component={Contacts}
                ></Route>
                <Route
                    exact
                    path="/Portfolio"
                    component={Portfolio}
                ></Route>
            </Switch>
        </AnimatePresence>
    );
};
 
function App() {
    return (
        <div className="App">
            <>
                <Router>
                  <Navbar />
                    <Animated />
                </Router>
            </>
        </div>
    );
}
 
export default App;
