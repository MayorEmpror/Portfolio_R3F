import { Text as Txt } from "@react-three/drei";
import { useState } from "react";

export default function TDHref(props) {
  const [shouldChangeColor, setShouldColorChange] = useState(false)
  return (
    <Txt
      rotation={[-Math.PI / 2.2, 0, 0]}
      position-z={props.offset}
      position-x={-4}
      fontSize={0.5}
      font="/FiraCode-VariableFont_wght.ttf"
      color={shouldChangeColor ? '#0066ff' : 'white'}
      onPointerEnter={(e) => {
        document.body.style = "cursor:pointer";
        setShouldColorChange(true)
      }}
      onPointerLeave={() => {
        document.body.style = "cursor:auto";
        setShouldColorChange(false)
      }}
      onClick={() => {
        window.open(props.href);
      }}
      anchorX="left"
    >
      ⦿ {props.text}
    </Txt>
  );
}
