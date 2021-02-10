import { useState } from 'react';
import './App.css';

const GIFS = [
	'https://media1.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e479g7anepdyx6ntej13bmyd3g1qk2glva0mjuf42yq&rid=200w.webp',
	'https://media0.giphy.com/media/TObbUke0z8Mo/200.webp?cid=ecf05e479g7anepdyx6ntej13bmyd3g1qk2glva0mjuf42yq&rid=200.webp',
];

const DIFFERENT_GIFS = [
	'https://media2.giphy.com/media/14aUO0Mf7dWDXW/giphy.webp?cid=ecf05e479g7anepdyx6ntej13bmyd3g1qk2glva0mjuf42yq&rid=giphy.webp',
];

function App() {
	const [gifs, setGifs] = useState(GIFS);

	return (
		<div className="App">
			<section className="App-content">
				{gifs.map(singleGif => (
					<img src={singleGif} />
				))}
			</section>
		</div>
	);
}

export default App;
