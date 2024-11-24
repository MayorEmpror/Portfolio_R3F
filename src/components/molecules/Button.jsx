import { RoundedBox } from "@react-three/drei";

export default function Button(props) {
    return <>
        <RoundedBox args={[2,1]} radius={0.1}>
            <meshBasicMaterial color={"red"}/>
        </RoundedBox>
    </>
}