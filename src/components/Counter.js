import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
 const counter = useSelector(state=>state.counter);
 const show = useSelector(state=>state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({type:'show'})
  };

  const incrementHandler=()=>{
    dispatch({type:'increment'})
  }
  const increase=()=>{
    dispatch({type:'increase',amount:5})
  }
  const decrementHandler=()=>{
    dispatch({type:'decrement'})
  }
  const resetHandler=()=>{
    dispatch({type:'reset'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Incremenet</button>
        <button onClick={increase}>Increase by 5</button>
        <button onClick={decrementHandler}>Decremenet</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={resetHandler}>Reset Counter</button>
    </main>
  );
};

export default Counter;
