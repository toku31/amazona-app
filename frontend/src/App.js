import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter >
    <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand" >amazona</Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            { userInfo ? (
              <div className="dropdown">
                <Link to="#">{userInfo.name} <i className="fa fa-caret-down" />{' '} </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signoutHandler}>SignOut</Link>
                </ul>
              </div>
            ) :
            (
              <Link to="/signin">SignIn</Link>           
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} ></Route>
          <Route path='/product/:id' component={ProductScreen} ></Route>
          <Route path='/signin' component={SigninScreen} ></Route>
          <Route path='/register' component={RegisterScreen} ></Route>
          <Route path='/shipping' component={ShippingAddressScreen} ></Route>
          <Route path='/payment' component={PaymentMethodScreen} ></Route>
          <Route path='/placeorder' component={PlaceOrderScreen} ></Route>
          <Route path='/order/:id' component={OrderScreen} ></Route>
          <Route path='/' component={HomeScreen} exact ></Route>
        </main>
        <footer className = "row center">
            All right reserved
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
