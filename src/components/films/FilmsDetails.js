import React from 'react';

import FilmsCover from '../../PHOTO.json';

function FilmsDetails({ film }) {
	const cover = FilmsCover.filter((cover) => cover.name === film.title);

	return (
		<div className="card">
			<div className="card-inner">
				<div className="card-front">
					<img src={cover[0].src} alt={film.title} />
				</div>
				<div className="card-back">
					<h4>{film.title}</h4>
					<ul>
						<li>
							<strong>Episode: {film.episode_id} </strong>
						</li>
						<li>
							<strong>Director: {film.director}</strong>
						</li>
						<li>
							<strong>Release: {film.release_date}</strong>
						</li>
						<li>
							<strong>Created: {film.created}</strong>
						</li>
						<li>
							<strong> Edited: {film.edited}</strong>
						</li>
						<li>
							<strong> Producer: {film.producer}</strong>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default FilmsDetails;
