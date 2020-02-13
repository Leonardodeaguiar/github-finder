import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// é possivel desestruturar direto no parametro da função.
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className="card text-center">
			<img src={avatar_url} alt="profile" className="round-img" style={{ width: '60px' }} />
			<h3>{login}</h3>
			<div>
				<Link to={`/user/${login}`} className="btn btn-action btn-dark btn-sm my-1">
					more
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
