import React, { useEffect, useState } from 'react';
import { prepAuthor } from '../utils/utils';

const Quote = () => {
	const [quotes, setQuotes] = useState([]);
	const [randomQuote, setRandomQuote] = useState(null);
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		fetch('https://type.fit/api/quotes')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setQuotes(data);
				const randomIndex = Math.floor(Math.random() * quotes.length);
				setRandomQuote(data[randomIndex].text);
				setAuthor(data[randomIndex].author);
			});
	}, []);

	return (
		<>
			{randomQuote ? (
				<p className='italic text-sm shadow rounded px-2 py-1 w-full sm:w-1/2'>
					"{randomQuote}" - {prepAuthor(author)}
				</p>
			) : null}
		</>
	);
};

export default Quote;
