import React from 'react';
import FilmsDetails from './FilmsDetails';
import Spinner from '../../ui/Spinner';

function FilmsList({ isLoading, films, hasError }) {
	return isLoading ? (
		<Spinner />
	) : (
		<section className="cards">
			{!hasError && films.map((film) => <FilmsDetails film={film} key={film.episode_id} />)}
		</section>
	);
}

export default FilmsList;
