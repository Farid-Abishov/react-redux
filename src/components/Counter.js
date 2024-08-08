import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/store';
const Counter = () => {
  const dispatch = useDispatch();
 const counter = useSelector(state=>state.counter);
 const show = useSelector(state=>state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounterHandler())
  };

  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const increase=()=>{
    dispatch(counterActions.increase(5))
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }
  const resetHandler=()=>{
    dispatch(counterActions.reset())
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
