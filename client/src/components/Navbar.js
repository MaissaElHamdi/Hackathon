import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from "../Assets/logo.png";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <img className="logo" src={logo}></img>
          
			<nav ref={navRef}>
				<a href="/#" className="navbar-text">Acceuil</a>
				<a href="/#" className="navbar-text">Agenda</a>
				<a href="/#" className="navbar-text">Inscription</a>
				<a href="/#" className="navbar-text">Orateurs</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;