import React from 'react';
import FilmsDetails from './FilmsDetails';
import Spinner from '../../ui/Spinner';

function FilmsList({ isLoading, films, hasError }) {
	return isLoading ? (
		<Spinner />
	) : (
		<section className="cards">
			{!hasError && films.map((film, i) => <FilmsDetails film={film} key={film.episode_id} id={i + 1} />)}
		</section>
	);
}

export default FilmsList;
