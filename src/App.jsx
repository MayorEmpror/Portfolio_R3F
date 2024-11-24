import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Leva } from "leva";
import ScrollIndigator from "./components/atoms/ScrollIndigator.jsx"
import Button from "./components/molecules/Button.jsx";
import { Suspense, useRef } from "react";
import { Loader, PositionalAudio } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three"
import { useThree } from "@react-three/fiber";
import 'animate.css';
const AmbientSound = () => {
  const audioRef = useRef(new Audio('/ambience.mp4'));

  useEffect(() => {
      const audio = audioRef.current;

      // Play the audio
      audio.loop = true; // Loop the sound
      audio.volume = 0.5; // Set volume level (0.0 to 1.0)
      audio.play();

      // Cleanup function to stop the audio when the component unmounts
      return () => {
          audio.pause();
          audio.currentTime = 0; // Reset audio to start
      };
  }, []);
  useFrame(() => {
    const audio = audioRef.current;

    // Check if the audio is not playing
    if (audio.paused) {
        audio.play(); // Resume playback
    }
});

  return null; // This component does not render anything visible
};


const App = () => {
  return (
    <>
      <ScrollIndigator />

      <Leva hidden/>
      <Canvas
        className="animate__animated animate__fadeIn animate__delay-2s"
        shadows
        orthographic
        camera={{ position: [10, 20, 20], zoom: window.innerWidth/25, near: 0.1,}}
      >
        <AmbientSound/>
        <Suspense >
          <Experience />
        </Suspense>
      </Canvas>
      <Loader containerStyles={{background: "#c78269"}}/>
    </>
  );
};
export default App;