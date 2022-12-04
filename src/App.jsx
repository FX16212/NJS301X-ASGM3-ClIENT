import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from './Share/Footer/Footer';
import Header from './Share/Header/Header';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import Cart from './Cart/Cart';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import Checkout from './Checkout/Checkout';
import History from './History/History';
import Shop from './Shop/Shop';
import Chat from './Share/Chat/Chat';

//! CSS
import './App.css';
import './css/custom.css';
import './css/style.default.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/detail/:id" component={Detail} />
					<Route path="/cart" component={Cart} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/checkout" component={Checkout} />
					<Route path="/history" component={History} />
					<Route path="/shop" component={Shop} />
				</Switch>
				<Footer />
			</BrowserRouter>

			<Chat />

			{/*  ToastContainer  */}
			<ToastContainer
				position="top-right"
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default App;
