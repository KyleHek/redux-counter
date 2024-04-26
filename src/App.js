import  React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })} >Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} >Decrement</button>
    </div>
  );
}

export default App;
