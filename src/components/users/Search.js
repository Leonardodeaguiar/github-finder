import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const [ text, setText ] = useState();

	const onChange = (event) => {
		// pega o target name e direciona o valor para o igual
		setText(event.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (text === undefined || text === ' ' || text === null || text === '') {
			alertContext.setAlert('Please enter something', 'red');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		// Arrow functions nao precisam de bind(this)
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					onChange={onChange}
					type="text"
					name="text"
					placeholder="Search Users..."
					value={text}
					autoComplete="off"
				/>
				<span className="centralize">
					<button className="btn btn-action btn-dark btn-block" type="submit" value="Search">
						Search
					</button>
					{githubContext.users.length > 0 && (
						<button className="btn btn-action btn-light btn-block" onClick={githubContext.clearUsers}>
							Clear
						</button>
					)}
				</span>
			</form>
		</div>
	);
};

export default Search;
