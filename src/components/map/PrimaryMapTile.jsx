import { usePlane } from "@react-three/cannon";
import { angleToRadians } from "../../helpers/angleToRadians";

export function PrimaryMapTile() {
  const [ref] = usePlane(() => ({
    rotation: [-angleToRadians(90), 0, 0],
  }));

  return (
    <>
      <object3D position={[0, 0, 0]}>
        <mesh ref={ref} rotation={[-angleToRadians(90), 0, 0]}>
          <planeGeometry args={[32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </object3D>
    </>
  );
}

export default PrimaryMapTile;
