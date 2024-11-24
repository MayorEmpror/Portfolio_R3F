import { RandomizedLight, AccumulativeShadows } from "@react-three/drei";

const ExperienceShadows = ({
  frames = 50,
  shadowColor = "#000000",
  position = [0, -1.01, 0],
  scale = 30,
  ...props
}) => {
  return (
    <AccumulativeShadows
      frames={frames}
      resolution={1024*4}
      color={shadowColor}
      colorBlend={5}
      toneMapped={true}
      alphaTest={0.9}
      opacity={1}
      scale={scale}
      position={position}
      {...props}
    >
      <RandomizedLight
        amount={4}
        radius={10}
        ambient={0.5}
        intensity={1}
        position={[0, 10, -10]}
        size={15}
        mapSize={512}
        bias={0.0001}
      />
    </AccumulativeShadows>
  );
}

export default ExperienceShadows
