import React from 'react';

function Search({ getQuery }) {
	const onChange = (q) => {
		getQuery(q);
	};
	return (
		<section>
			<form>
				<input
					type="text"
					className="form-control"
					onChange={(e) => onChange(e.target.value)}
					placeholder="Search movies"
					autoFocus
				/>
			</form>
		</section>
	);
}

export default Search;
