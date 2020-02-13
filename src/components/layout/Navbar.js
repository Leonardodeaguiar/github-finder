import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
	return (
		<nav className="navbar">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					{/* Link é o a href do react, aqui usa-se to dentro do Link para manter o estado */}
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

// quando os componentes são stateless ou seja
// funções e não classes voce adciona o componente ao inves de static.
Navbar.defaultProps = {
	title: 'Github Finder ',
	icon: 'fab fa-github'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};
export default Navbar;
