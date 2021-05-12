import './Logo.css';
import logo from './object-detection.png';

const Logo = () => {
	return (
		<div className="logo-div ma0">
			<img className="logo-img" src={logo} alt="hello"></img>
			<span className="logo-text">Object Detection</span>
		</div>
	);
}

export default Logo;