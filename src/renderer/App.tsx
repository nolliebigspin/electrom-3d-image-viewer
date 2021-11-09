import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import React, { ReactElement } from "react";
import { useGLTF } from "@react-three/drei";
import "./App.css";

const Test: React.FC = (): ReactElement => {
  return <div>Hello</div>;
};

useGLTF.preload("../../assets/3dObjects/avocado.gltf");

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Test} />
      </Switch>
    </Router>
  );
}
