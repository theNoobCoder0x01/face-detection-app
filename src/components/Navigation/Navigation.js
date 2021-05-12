import './Navigation.css';
import Logo from "./Logo";

const Navigation = () => {
	return (
		<nav className="nav">
			<Logo />
			<p className="sout f4 link dim black underline pointer">Sign Out</p>
		</nav>
	);
}

export default Navigation;