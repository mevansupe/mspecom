import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter, Route, Link} from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from './Screens/CartScreen';
import SigninScreen from "./Screens/SigninScreen";
import {useSelector} from "react-redux";
import RegisterScreen from "./Screens/RegisterScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";

function App() {

    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    };

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    };

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}>
                            &#9776;
                        </button>
                        <Link to="/">MSPECOM</Link>
                    </div>
                    <div className="header-links">
                        <Link to="/cart">Cart</Link>
                        {
                            userInfo ? <Link to='/profile'>{userInfo.name}</Link> : <Link to="/signin">Signin</Link>
                        }
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Shopping Categories</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    <ul>
                        <li>
                            <a href="index.html">Pants</a>
                        </li>

                        <li>
                            <a href="index.html">Shirts</a>
                        </li>

                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path="/placeorder" component={PlaceOrderScreen} />
                        <Route path="/payment" component={PaymentScreen} />
                        <Route path="/shipping" component={ShippingScreen} />
                        <Route path="/products" component={ProductsScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/signin" component={SigninScreen} />
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                        <Route path="/" exact={true} component={HomeScreen} />
                    </div>

                </main>
                <footer className="footer">
                    All right reserved.
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
