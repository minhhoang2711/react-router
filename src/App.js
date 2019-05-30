import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            {/* <Link to="/">Trang chủ</Link> */}
                            <NavLink to="/" activeStyle={{}}>Trang chủ</NavLink>
                        </li>
                        <li>
                            {/* <Link to="/about">Giới thiệu</Link> */}
                            <NavLink to="/about">Giới thiệu</NavLink>
                        </li>
                        <li>
                            {/* <Link to="/contact">Liên hệ</Link> */}
                            <NavLink to="/contact">Liên hệ</NavLink>
                        </li>
                    </ul>
                </nav>
                
                <div class="container">
                    <div class="row">
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
