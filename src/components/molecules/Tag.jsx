import ReactIcon from "../atoms/React";
import HTML5Model from "../atoms/HTML5";
import BlenderLogo from "../atoms/BlenderLogo";
import { PivotControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Color, TextureLoader } from "three";
import { useControls } from "leva";

export default function IconTag() {
  const js = useLoader(TextureLoader, "/js_cover.png");
  const jquery = useLoader(TextureLoader, "/jquery.png");
  const fastapi = useLoader(TextureLoader, "/fastapi-alpha.png");
  const {positions} = useControls({
    positions: {
      value:{x:-2.5, y:-2.6, z:-3}
    }
  })
  return (
    <group rotation={[Math.PI * 0.5, 0, 0]} position-y={0.4}>
      <ReactIcon />
      <group rotation={[-Math.PI * 0.5, -Math.PI * 0.2, 0]} position-x={-11}>
        <PivotControls scale={1.5}>
          <HTML5Model scale={0.4} />
        </PivotControls>
      </group>
      <group position-x={-8} position-y={5} position-z={0.3}>
        <PivotControls scale={1.5}>
          <BlenderLogo />
        </PivotControls>
      </group>
      <mesh
        position={[1, 2.5, -11]}
        rotation={[0, Math.PI * 0.5, -Math.PI * 0.5]}
      >
        <boxGeometry args={[2, 0.1, 2]} />
        <meshBasicMaterial map={js} />
      </mesh>

      <mesh position={[-5, 5, 0]} rotation={[0, Math.PI * 0.5, -Math.PI * 0.5]}>
        <boxGeometry args={[5.5, 0, 1.5]} />
        <meshBasicMaterial map={jquery} transparent />
      </mesh>

      <mesh position={[positions.x, positions.y, positions.z]} rotation={[Math.PI * 0.5, 0, -Math.PI * 0.2]}>
        <circleGeometry/>
        <meshBasicMaterial  transparent color={new Color("#189789")} alphaMap={fastapi} side={2}/>
      </mesh>
    </group>
  );
}
