import { HashRouter as Router, Routes as Switch, Route } from "react-router-dom";

import MyProvider from "../context/MyProvider";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../components/Home";
import About from "../components/pages/About";

import Weather from "../components/pages/Weather";

import NotFound404 from "../components/pages/NotFound404";


const Routes = () => (
    <MyProvider>
        <Router>
            <Header />
            <Switch>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About />} />
                <Route path='/weather' element={<Weather />} />
                <Route path='*' element={<NotFound404 />} />
            </Switch>
            <Footer />
        </Router>
    </MyProvider>
)

export default Routes
