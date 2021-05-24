import React from 'react';

import './Logo.css';
import logo from './logo.png';

const Logo = () => {
	return (
		<div className="logo-div ma0">
			<img className="logo-img" src={logo} alt="hello"></img>
			<span className="logo-text">Face Detection</span>
		</div>
	);
}

export default Logo;