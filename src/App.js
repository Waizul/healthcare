import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home/Home';
import ProvideAll from './context/ProvideAll';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './pages/PrivateRoute';
import Appointment from './pages/Appointment';
import Emergency from './pages/Emergency';
import NotFound from './pages/NotFound';
import Footer from './pages/Footer';

function App() {
	return (
		<ProvideAll>
			<div className='app'>
				<Router>
					<Navbar></Navbar>
					<Switch>
						<Route exact path='/'>
							<Home></Home>
						</Route>
						<Route path='/home'>
							<Home></Home>
						</Route>
						<Route path='/login'>
							<Login></Login>
						</Route>

						<Route path='/register'>
							<Register></Register>
						</Route>
						<PrivateRoute path='/service/:serviceId'>
							<ServiceDetail></ServiceDetail>
						</PrivateRoute>

						<PrivateRoute path='/appointment'>
							<Appointment></Appointment>
						</PrivateRoute>
						<PrivateRoute path='/emergency'>
							<Emergency></Emergency>
						</PrivateRoute>
						<Route path='*'>
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</Router>
			</div>
		</ProvideAll>
	);
}

export default App;
