function MapSphere() {
  return (
    <mesh position={[0, 0.5, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default MapSphere;
