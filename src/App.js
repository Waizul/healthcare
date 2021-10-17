import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
	return (
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
	);
}

export default App;
