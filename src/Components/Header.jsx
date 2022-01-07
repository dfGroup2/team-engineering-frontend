import logo from '../images/digital_futures_logo.png';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const Header = props => {

	const navigate = useNavigate();

	const handleLogOut = () => {
		localStorage.setItem('user', '');
		 navigate(`/`);
	}

	return (
		<header className="header-margin">
			<nav className="navbar navbar-expand-sm">
				<img src={logo} alt="df_logo" width="2.5%" height="2.5%" />
				&nbsp;
				<span>DFXtra</span>

				<div className='log-out-btn'>
					{localStorage.getItem(`user`) && <button onClick={handleLogOut} className= 'btn-primary'>Log Out</button>}
				</div>

			</nav>
		</header>
	)
}

Header.propTypes = {

}

export default Header;
