import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { angleToRadians } from "../../helpers/angleToRadians";

export function MapTile(props) {
  const [ref] = usePlane(() => ({
    rotation: [-angleToRadians(90), 0, 0],
  }));

  const planeRef = useRef(null);
  return (
    <>
      <object3D position={props.position} ref={planeRef}>
        <mesh ref={ref} rotation={[-angleToRadians(90), 0, 0]}>
          <planeGeometry args={[32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </object3D>
    </>
  );
}

export default MapTile;
