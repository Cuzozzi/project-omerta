import { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import usePersonControls from "./KeyboardMoverment";
import { Vector3 } from "three";

function Scene() {
  const sphereRef = useRef(null);
  const cameraRef = useRef(null);
  const lightRef = useRef(null);
  const astroRef = useRef(null);
  const { forward, backward, left, right } = usePersonControls();
  const [mesh, api] = useSphere(() => ({ mass: 10, position: [10, 0, 0] }));
  /* const [astroRef, astroAPI] = useSphere(() => ({
    mass: 10,
    position: [10, 0, 0],
  })); */
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
    cameraRef.current.position.set(
      astroRef.current.position.x + 0,
      astroRef.current.position.y + 0,
      astroRef.current.position.z + -10
    );
    cameraRef.current.lookAt(astroRef.current.position);
    lightRef.current.lookAt(astroRef.current.position);
  });
  return (
    <>
      <primitive ref={astroRef} object={gltf.scene} position={[0, 0, 0]} />
      <object3D position={[10, 0, 0]} ref={sphereRef}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </object3D>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 10]} />
      <directionalLight
        ref={lightRef}
        color="hotpink"
        position={[-5, 10, -100]}
      />
      <ambientLight intensity={0.1} />
    </>
  );
}

export default Scene;
