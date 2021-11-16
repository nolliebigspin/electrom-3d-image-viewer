import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import MeshViewer from "components/MeshViewer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MeshViewer} />
      </Switch>
    </Router>
  );
}
