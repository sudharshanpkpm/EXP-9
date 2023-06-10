import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
    <ul className="App-header">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/About">About Us</Link>
			</li>
			<li>
				<Link to="/Contact">Contact Us</Link>
			</li>
			</ul>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/About' element={< About />}></Route>
				<Route exact path='/Contact' element={< Contact />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
 