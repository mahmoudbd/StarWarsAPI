import React, { useState, useEffect, Fragment } from 'react';
import Spinner from '../../ui/Spinner';
import { useParams, Link } from 'react-router-dom';
import Moment from 'moment';

function FilmInfo() {
	// let match = useRouteMatch();
	// const id = match.params.id;

	const { id } = useParams();
	const [ films, setFilms ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ hasError, setHasError ] = useState(false);

	useEffect(
		() => {
			const getFilms = async () => {
				try {
					const getData = await fetch(`https://swapi.dev/api/films/${id}`);
					const data = await getData.json();
					setFilms(data);
					setIsLoading(false);
				} catch (err) {
					setIsLoading(false);
					setHasError(true);
					console.log(err);
				}
			};
			getFilms();
		},
		[ id ]
	);

	return isLoading ? (
		<Spinner />
	) : (
		<Fragment>
			{hasError && <h1 className="error">Something Went Wrong...</h1>}
			<div className="cards-film">
				<div className="card-film">
					<h4>{films.title}</h4>
					<ul>
						<li>
							<strong> Episode-id: {films.episode_id}</strong>
						</li>
						<li>
							<strong>Episode: {Moment(films.episode_id).format('DD-MM-YYYY')} </strong>
						</li>
						<li>
							<strong>Director: {films.director}</strong>
						</li>
						<li>
							<strong>Release: {Moment(films.release_date).format('DD-MM-YYYY')}</strong>
						</li>
						<li>
							<strong>Created: {Moment(films.created).format('DD-MM-YYYY')}</strong>
						</li>
						<li>
							<strong> Edited: {Moment(films.edited).format('DD-MM-YYYY')}</strong>
						</li>
						<li>
							<strong> Producer: {films.producer}</strong>
						</li>
						<li>
							<strong> URL: {films.url}</strong>
						</li>
					</ul>
				</div>
				<div>
					<img src="https://i.postimg.cc/HnSM4tjH/C-3PO1.jpg" alt="" />
				</div>
			</div>
			<div className="film-text">
				<h4>{films.opening_crawl}</h4>
			</div>

			<div className="center">
				<Link to="/" className="btn">
					Back
				</Link>
			</div>
		</Fragment>
	);
}

export default FilmInfo;
