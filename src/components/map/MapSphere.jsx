import { useRef } from "react";

function MapSphere() {
  const sphereRef = useRef(null);

  return (
    <object3D position={[0, 0.5, 0]} ref={sphereRef}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </object3D>
  );
}

export default MapSphere;
