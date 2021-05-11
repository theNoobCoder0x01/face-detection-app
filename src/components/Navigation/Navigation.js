import './Navigation.css';
import Logo from "./Logo";

const Navigation = () => {
    return (
        <nav className="nav">
            <Logo />
            <p className="sout f4 link dim black underline pt3 pl3 pb3 pointer">Sign Out</p>
        </nav>
    );
}

export default Navigation; 