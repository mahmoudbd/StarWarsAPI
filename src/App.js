import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FilmsList from './components/films/FilmsList';
import Header from './ui/Header';
import Search from './ui/Search';
import FilmInfo from './components/films/FilmInfo';
import './App.css';

function App() {
	const [ films, setFilms ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ query, setQuery ] = useState('');
	const [ hasError, setHasError ] = useState(false);
	useEffect(
		() => {
			const getFilms = async () => {
				try {
					const getData = await fetch(`https://swapi.dev/api/films/?search=${query}`);

					const data = await getData.json();
					setFilms(data.results);
					setIsLoading(false);
				} catch (err) {
					setIsLoading(false);
					setHasError(true);
					console.log(err);
				}
			};
			getFilms();
		},
		[ query ]
	);

	return (
		<Fragment>
			<div className="container">
				<Header />

				<Router>
					<Switch>
						<Route path="/" exact>
							<Search getQuery={(q) => setQuery(q)} />
							{films.length === 0 &&
							!isLoading && <h1 className="card center">No Character found ...</h1>}
							{hasError && <h1 className="error">Something Went Wrong...</h1>}
							<FilmsList isLoading={isLoading} films={films} hasError={hasError} />
						</Route>
						<Route path="/:id" exact>
							<FilmInfo />
						</Route>
					</Switch>
				</Router>
			</div>
		</Fragment>
	);
}

export default App;
