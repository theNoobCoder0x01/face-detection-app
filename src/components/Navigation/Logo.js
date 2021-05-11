import './Logo.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className="logo-div ma4 mr2 mt0">
            <img className="logo-img" src={logo} alt="hello"></img>
            <span className="logo-text mt4">Object Detection</span>
        </div>
    );
}

export default Logo;