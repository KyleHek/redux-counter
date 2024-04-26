import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an asynchronous action
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch({ type: 'SET_COUNT', payload: 10 });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <>
          <h1>Count: {count}</h1>
          <button onClick={() => dispatch({ type: 'INCREMENT' })} >Increment</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })} >Decrement</button>
        </>
      )}
    </div>
  );
}

export default App;