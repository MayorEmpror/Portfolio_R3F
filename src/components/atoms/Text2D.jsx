import { Text } from "@react-three/drei";

export default function Text2D(props) {
  return <>
        {props.text.map((x,i) => {
            <Text position-z={i} rotation={[-Math.PI / 2.2, 0, 0]} fontSize={0.5} anchorX={"left"}>{x}</Text>
        })}
  </>
}
