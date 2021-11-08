import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";

const Hello = () => {
  return <div className="container mx-auto" />;
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
