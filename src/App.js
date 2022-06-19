import React, {useState} from 'react';
import { useCallback } from 'react';
import './App.css';
import CallbackItem from './components/CallbackItem';
// import TypeProps from './components/TypeProps/TypeProps';
// import WatchForm from './components/WatchForm/WatchForm';
// import WatchList from './components/WatchList/WatchList';
// import moviesService from './movies-service.js';
// import initialState from './model/initial-to-watch';



function App() {
  
  const [numb, setNumb] = useState(1);

	const [colored, setColored] = useState(false);

  const styles = {
  color: colored ? 'red' : 'green',
}


  const createItems = useCallback(() => {
    return new Array(numb).fill('')
    .map((_, index) => `Element #${index +1}`)
  }, [numb])

  return (
		<>
			<div className='app'>
				<h1 style={styles}>Compute property: {numb}</h1>
				<button onClick={() => setNumb((prevNumb) => prevNumb + 1)}>
					Plus
				</button>
				<button onClick={() => setNumb((prevNumb) => prevNumb - 1)}>
					Minus
				</button>
				<button
          onClick={() => setColored((prevColor) => !prevColor)}
					>
					Change Color
				</button>
        <CallbackItem getItems={createItems}/>
			</div>
		</>
	);
}

export default App;
