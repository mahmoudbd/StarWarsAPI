import React, { useState, useEffect } from 'react';

import FilmsList from './components/films/FilmsList';
import Header from './ui/Header';
import Search from './ui/Search';
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
					console.log(data.results);
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
		<div className="container">
			<Header />
			<Search getQuery={(q) => setQuery(q)} />
			{hasError && <h1 className="error">Something Went Wrong...</h1>}
			<FilmsList isLoading={isLoading} films={films} hasError={hasError} />
		</div>
	);
}

export default App;
