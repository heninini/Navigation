import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <div>
      <h1> count is {count}</h1>
      <Button onClick={increment}>Click</Button>
    </div>
  );
}

export default CounterPage;
