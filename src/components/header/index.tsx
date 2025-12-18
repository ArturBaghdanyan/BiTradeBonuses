import styles from "./styles.module.scss";
import biTrade from "../../assets/header_icons/bi-trade.svg";
import biTradeBlack from "../../assets/header_icons/bi-trade-black.svg";
import uk from "../../assets/header_icons/uk.png";

import { NavLink } from "react-router-dom";

const Header = ({ isHomePage = false }) => {

	return (    
		<header>
			<div className=
			{`
				${isHomePage ? styles.header : styles.header_about} container-spacing
			`}>

			<NavLink to="/">
			<div className={styles.header_logo}>
				{/* When click to another page img will be changed */}
				{isHomePage ? (
					<img src={biTrade} alt="bi-trade" draggable = "false" style={{userSelect:"none"}} />
				) : (
					<img src={biTradeBlack} alt="bi-trade-black" draggable = "false" style={{userSelect:"none"}} />
				)}
			</div>
			</NavLink>
			<div className={styles.header_nav}>
				<nav>
				{/* 
				Use <Link> instead of <a> to enable client-side navigation.
				This prevents full page reloads and provides a smoother user experience.
				*/}
					<NavLink to="/">FREE DEMO</NavLink>
					<NavLink to="/about">About us</NavLink>
					<NavLink to="/contact">Contact</NavLink>
					<select>
						<option>Language</option>
						<option>English</option>
						<option>Armenian</option>
						<option>Russian</option>
					</select>
					<NavLink to="/register">Registration</NavLink>
				</nav>
				<div className={styles.flag}>
					<img src={uk} alt="uk" draggable = "false" style={{userSelect:"none"}} />
				</div>
				<NavLink to="/login" className={styles.header_button}>
					<button>Join Now</button>
				</NavLink>
			</div>
			
			</div>
		
		</header>	
	)
}
export default Header;