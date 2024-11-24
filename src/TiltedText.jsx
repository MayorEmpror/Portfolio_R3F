import Text from "./Text";

export default function TiltedText(props) {
  return (
    <Text
      overrideMaterial
      rotation={[-Math.PI / props.rotFactor, 0, 0]}
      fontSize={1}
      castShadow={false}
      {...props}
    >
      {props.children}
      <meshBasicMaterial color={"#c78269"} />
    </Text>
  );
}
