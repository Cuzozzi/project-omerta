import { useGLTF } from "@react-three/drei";

export default function Astronaut() {
  const gltf = useGLTF("https://thinkuldeep.com/modelviewer/Astronaut.glb");
  return <primitive object={gltf.scene} position={[4, 0, 0]} />;
}
