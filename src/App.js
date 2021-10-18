import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home/Home';
import ProvideAll from './context/ProvideAll';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import Register from './pages/Register';

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
						<Route path='/service'>
							<ServiceDetail></ServiceDetail>
						</Route>
						<Route path='/login'>
							<Login></Login>
						</Route>
						<Route path='/register'>
							<Register></Register>
						</Route>
					</Switch>
				</Router>
			</div>
		</ProvideAll>
	);
}

export default App;
