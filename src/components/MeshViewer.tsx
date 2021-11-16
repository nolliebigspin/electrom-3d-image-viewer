import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

type MeshViewerProps = {
  src?: string;
};

const MeshViewer: React.VFC<MeshViewerProps> = (): JSX.Element => {
  const { scene } = useGLTF("../../assets/threeDimensions/box.gltf");
  return (
    <Canvas>
      <Suspense fallback={<div>Loading...</div>}>
        <primitive object={scene} />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
};

export default MeshViewer;
