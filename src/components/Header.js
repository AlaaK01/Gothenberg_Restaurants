import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'


class Header extends Component {
	state = {  } 
	render() { 
		return (
			<div className="header">
				<h1>Gothenberg <span>Restaurants</span></h1>
				<nav className="navbar">
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="./allrestaurants">AllRestautants</NavLink>
					
					
					<NavLink to="./meal">Meal</NavLink>
					<NavLink to="./about">About us</NavLink>
					<button className="subscribe" type="button">
					Subscribe
					</button>
				</nav>
			</div>
		);
	}
}
 
export default Header;