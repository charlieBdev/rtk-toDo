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
		<div>
			{randomQuote ? (
				<p className='italic text-sm'>
					"{randomQuote}" - {prepAuthor(author)}
				</p>
			) : null}
		</div>
	);
};

export default Quote;
