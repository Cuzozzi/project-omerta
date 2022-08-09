import { setRecoil } from "recoil-nexus";
import { SpherePosition } from "../../atoms/SpherePosition";
import { useRef, useEffect } from "react";

function MapSphere() {
  const sphereRef = useRef(null);

  useEffect(() => {
    if (!!sphereRef.current) {
      setRecoil(SpherePosition, sphereRef.current.position);
    }
  });

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
