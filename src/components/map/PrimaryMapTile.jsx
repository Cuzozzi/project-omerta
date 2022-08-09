import { usePlane } from "@react-three/cannon";
import { useRef, useEffect } from "react";
import { angleToRadians } from "../../helpers/angleToRadians";
import { getRecoil, setRecoil } from "recoil-nexus";
import { MapTilePosition } from "../../atoms/MapTilePosition";

export function PrimaryMapTile() {
  const [ref] = usePlane(() => ({
    rotation: [-angleToRadians(90), 0, 0],
  }));

  const planeRef = useRef(null);

  useEffect(() => {
    if (!!planeRef.current) {
      setRecoil(MapTilePosition, planeRef.current.position);
    }
  });
  return (
    <>
      <object3D position={[5, 0, 0]} ref={planeRef}>
        <mesh ref={ref} rotation={[-angleToRadians(90), 0, 0]}>
          <planeGeometry args={[32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </object3D>
    </>
  );
}

export default PrimaryMapTile;
