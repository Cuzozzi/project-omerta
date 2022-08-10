import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { angleToRadians } from "../../helpers/angleToRadians";
import { getRecoil } from "recoil-nexus";
import { SpherePosition } from "../../atoms/SpherePosition";

export default function MapCamera() {
  const [spherePosition, setSpherePosition] = useState(
    getRecoil(SpherePosition)
  );
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 0));
      orbitControlsRef.current.update();
    }
  });

  /* useEffect(() => {
    console.log(spherePosition);
  }, [spherePosition]); */

  return (
    <>
      <PerspectiveCamera makeDefault position={spherePosition} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(10)}
        maxPolarAngle={angleToRadians(80)}
      />
    </>
  );
}
