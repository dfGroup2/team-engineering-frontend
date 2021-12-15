import logo from '../images/digital_futures_logo.png';
import PropTypes from 'prop-types'

const Header = props => {
	return (
		<header className="header-margin">
			<nav className="navbar navbar-expand-sm">
				<img src={logo} alt="df_logo" width="2.5%" height="2.5%" />
				&nbsp;
				<span>DFXtra</span>
			</nav>
		</header>
	)
}

Header.propTypes = {

}

export default Header;
