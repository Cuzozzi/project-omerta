import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import usePersonControls from "./KeyboardMoverment";
import { Vector3 } from "three";

function MapSphere() {
  const sphereRef = useRef(null);
  const astroRef = useRef(null);
  const { forward, backward, left, right, jump } = usePersonControls();
  const [mesh, api] = useSphere(() => ({ mass: 10, position: [0, 1, 0] }));
  const gltf = useGLTF("https://thinkuldeep.com/modelviewer/Astronaut.glb");

  useFrame(() => {
    let frontVector = new Vector3(0, 0, 0);
    let sideVector = new Vector3(0, 0, 0);
    let direction = new Vector3(0, 0, 0);

    frontVector.set(0, 0, Number(forward) - Number(backward));
    sideVector.set(Number(right) - Number(left), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(20);

    api.velocity.set(direction.x, 0, direction.z);
  });

  useFrame(() => {
    mesh.current.getWorldPosition(astroRef.current.position);
  });
  return (
    <>
      <primitive ref={astroRef} object={gltf.scene} position={[4, 0, 0]} />
      <object3D position={[0, 1, 0]} ref={sphereRef}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </object3D>
    </>
  );
}

export default MapSphere;
