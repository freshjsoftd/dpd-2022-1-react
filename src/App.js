import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import CallbackItem from './components/CallbackItem';
// import TypeProps from './components/TypeProps/TypeProps';
// import WatchForm from './components/WatchForm/WatchForm';
// import WatchList from './components/WatchList/WatchList';
// import moviesService from './movies-service.js';
// import initialState from './model/initial-to-watch';

function freezeCompute(numb, pause){
  console.log('Is freeze');
  let start = new Date().getTime();
  let end = start;
  while (end < start + pause) {
    end = new Date().getTime()
  }
  return numb;
}

function App() {
  
  const [numb, setNumb] = useState(20);

	const [colored, setColored] = useState(false);

  const styles = useMemo(() => (
    {
      color: colored ? 'red' : 'green',
    }
  ), [colored])

  useEffect(() =>{
    console.log('Styles has been updated');
  }, [styles] )

  const pause = 1000;

  const computed = useMemo(() => freezeCompute(numb, pause), [numb])
  // const computed = freezeCompute(numb, pause)

  return (
		<>
			<div className='app'>
				<h1 style={styles}>Compute property: {computed}</h1>
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
        <CallbackItem />
			</div>
		</>
	);
}

export default App;
