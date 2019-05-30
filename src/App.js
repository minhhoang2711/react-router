import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const MenuLink =({label, to, activeOnlyWhenExact})=>{
    return(
        <Route
            path = {to}
            exact = {activeOnlyWhenExact}
            children = {({match})=>{//đổi tượng match có nhiệm vụ xác định cái url hiện tại có trùng khớp với cái link của menu hay ko
                var active = match ? 'active abc' : '';
                return (
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    );
}

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-default" role="navigation">
                    <ul className="nav navbar-nav">
                        {/* <li className="active"> */}
                            {/* <Link to="/">Trang chủ</Link> */}
                            {/* activeStyle={{backgroundColor: '#080808', color: 'white'}} activeStyle*/}
                            {/*  activeClassName="menu-active" activeClassName*/}
                            {/* <NavLink exact to="/">Trang chủ</NavLink> */}
                            <MenuLink label="Trang Chủ" to="/" activeOnlyWhenExact={true}/>
                        {/* </li> */}
                        {/* <li> */}
                            {/* <Link to="/about">Giới thiệu</Link> */}
                            {/* <NavLink to="/about">Giới thiệu</NavLink> */}
                            <MenuLink label="Giới thiệu" to="/about" activeOnlyWhenExact={true}/>
                        {/* </li> */}
                        {/* <li> */}
                            {/* <Link to="/contact">Liên hệ</Link> */}
                            {/* <NavLink to="/contact">Liên hệ</NavLink> */}
                            {/* <MenuLink label="Liên hệ" to="/contact" activeOnlyWhenExact={true}/> */}
                            {MenuLink({label:"Liên hệ" , to:"/contact", activeOnlyWhenExact:true})}
                        {/* </li> */}
                    </ul>
                </nav>
                <div className="container">
                    <div className="row">
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
