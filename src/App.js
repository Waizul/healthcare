import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home/Home';
import ProvideAll from './context/ProvideAll';

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
					</Switch>
				</Router>
			</div>
		</ProvideAll>
	);
}

export default App;
