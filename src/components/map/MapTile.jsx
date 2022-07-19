import { usePlane } from "@react-three/cannon";
import { useRef, useEffect, useState } from "react";
import { angleToRadians } from "../../helpers/angleToRadians";
import { getRecoil, setRecoil } from "recoil-nexus";
import { MapTilePosition } from "../../atoms/MapTilePosition";

export function MapTile() {
  const [ref] = usePlane(() => ({
    rotation: [-angleToRadians(90), 0, 0],
  }));

  const planeRef = useRef(null);

  useEffect(() => {
    if (!!planeRef.current) {
      console.log(planeRef.current);
      console.log(planeRef.current.position);
      setRecoil(MapTilePosition, planeRef.current.position);
      console.log(getRecoil(MapTilePosition));
    }
  });
  return (
    <>
      <object3D position={[10, 0, 0]} ref={planeRef}>
        <mesh ref={ref} rotation={[-angleToRadians(90), 0, 0]}>
          <planeGeometry args={[32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </object3D>
    </>
  );
}

export default MapTile;
