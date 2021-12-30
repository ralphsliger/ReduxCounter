import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../actions/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counter);

  console.log(count);

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
      </div>
    </div>
  );
}
