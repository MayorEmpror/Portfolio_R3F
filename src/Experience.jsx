import { ScrollControls } from "@react-three/drei";
import User3DInterface from "./User3DInterface";
import AppEnviornment from "./components/molecules/AppEnviornment";
import { useControls } from "leva";
import { Perf } from "r3f-perf";


export default function App() {

  const { background, showPerformance } = useControls("General", {
    background: "#f2f2f5",
    showPerformance: {
      label: "Show performance metrics",
      value: false,
    },
  });

  return (
    <>
      {/** The text and the grid */}
      <ScrollControls damping={0.5} distance={5}>
        <User3DInterface />
      </ScrollControls>

      <mesh position={[1.5, -1, 6]}>
        <boxGeometry args={[0.1, 0.1, 5]} />
        <meshMatcapMaterial color={"#c78269"} />
      </mesh>
      <mesh position={[1.5, -1, 8.5]}>
        <boxGeometry args={[15, 0.1, 0.1]} />
        <meshMatcapMaterial color={"#c78269"} />
      </mesh>
      <mesh position={[1.5, -1, 8.8]}>
        <boxGeometry args={[13, 0.1, 0.1]} />
        <meshMatcapMaterial color={"#c78269"} />
      </mesh>

      {showPerformance ? <Perf position="top-left" /> : ""}

      <color attach="background" args={[background]} />
      <AppEnviornment />
    </>
  );
}
