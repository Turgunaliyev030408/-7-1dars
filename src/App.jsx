import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./features/counterSlice";
import { useRef } from "react"

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(+inputRef.current.value));
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="number" />
        <button>Submit</button>
      </form>
    </div>
  );  
}

export default App;
