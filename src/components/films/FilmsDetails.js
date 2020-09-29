import React from 'react';

import Moment from 'moment';
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
							<strong>Episode: {Moment(film.episode_id).format('DD-MM-YYYY')} </strong>
						</li>
						<li>
							<strong>Director: {film.director}</strong>
						</li>
						<li>
							<strong>Release: {Moment(film.release_date).format('DD-MM-YYYY')}</strong>
						</li>
						<li>
							<strong>Created: {Moment(film.created).format('DD-MM-YYYY')}</strong>
						</li>
						<li>
							<strong> Edited: {Moment(film.edited).format('DD-MM-YYYY')}</strong>
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
