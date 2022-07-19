import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from "../../helpers/angleToRadians";
import { getRecoil } from "recoil-nexus";
import { MapTilePosition } from "../../atoms/MapTilePosition";

export default function MapCamera() {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 0));
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current === true) {
      console.log(getRecoil(MapTilePosition));
    }
  });

  const tilePosition = getRecoil(MapTilePosition);
  console.log(getRecoil(MapTilePosition));
  return (
    <>
      <PerspectiveCamera makeDefault position={tilePosition} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(10)}
        maxPolarAngle={angleToRadians(80)}
      />
    </>
  );
}
