import React from 'react';

import './Navigation.css';
import Logo from "./Logo";

const Navigation = ({ route, setRoute }) => {
	const signOut = () => {
		setRoute("signout");
	}

	return (
		<nav className="nav">
			<Logo />
			{ route === "mainpage"
			? (<p className="sout f4 link dim black underline pointer" onClick={signOut}>
				Sign Out
			</p>)
			: (<></>) }
		</nav>
	);
}

export default Navigation;