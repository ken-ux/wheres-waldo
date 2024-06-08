import { Link } from "react-router-dom";

export default function GoalCard() {
  return (
    <div className="test-border">
      <div>img goes here</div>
      <p>Name</p>
      <Link to="/">Start</Link>
    </div>
  );
}
