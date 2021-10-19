import React from 'react';
import About from './About';
import Feature from './Feature';
import Header from './Header';
import Services from './Services/Services';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<Feature></Feature>
			<Services></Services>
			<About></About>
		</div>
	);
};

export default Home;
