import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        value: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.value,
        value: 0,
      };
    default:
      return state;
  }
};
function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    value: 0,
  });
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handlechange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
    console.log(state);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg"> count is {state.count}</h1>
      <div className="flex">
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.value || ""}
          type="number"
          onChange={handlechange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
