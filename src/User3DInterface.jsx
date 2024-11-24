import { Html, useScroll } from "@react-three/drei";
import Text from "./Text";
import { useControls } from "leva";
import Grid from "./Grid";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import ExperienceShadows from "./components/molecules/StandardShadows";
import { Blender } from "./components/atoms/Blender";
import React, { useState, useEffect } from "react";
import Laptop from "./components/atoms/Laptop";
import Factory from "./components/atoms/Factory";
import Text2D from "./components/atoms/Text2D";
import { Text as Txt } from "@react-three/drei";
import TDHref from "./TDHref";
import { Color, TextureLoader } from "three";
import IconTag from "./components/molecules/Tag";
import TiltedText from "./TiltedText";

export default function User3DInterface() {
  const { text, shadow, position, ...config } = useControls("Text3D", {
    text: "Hammad Ali",
    shadow: "#d88161",
    backside: true,
    backsideThickness: { value: 0.28, min: 0, max: 2 },
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 512, min: 64, max: 2048, step: 64 },
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.3, min: 0, max: 5 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
    color: "#e8caca",
    position: {
      value: { x: -27.3, y: -41, z: -38.7 },
    },
  });

  const scroll = useScroll();
  const github = useLoader(TextureLoader, "/github-mark.png");
  const sketchfab = useLoader(TextureLoader, "/sketchfab-logo.png");
  const medium = useLoader(TextureLoader, "/medium_logo.webp");
  const textGroupRef = useRef();
  useFrame((state) => {
    const scrollPercentage = scroll.offset;
    state.camera.position.z = scrollPercentage * 50 + 20;
  });
  return (
    <group ref={textGroupRef}>
      <Text
        config={config}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, -1]}
      >
        {text}
      </Text>

      <TiltedText
        rotFactor={2.2}
        fontSize={1}
        position={[0, -1.25, 2.5]}
        font="/Fira_Code Light_Regular.json"
      >
        Making the digital Magnum Opus
      </TiltedText>

      <Grid />
      <ExperienceShadows shadowColor={shadow} scale={150} />
      <group position={[2, -1.2, 12]}>
        <mesh position-x={-3} position-z={-0.25}>
          <cylinderGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color={"#0066ff"} />
        </mesh>

        <Text
          overrideMaterial
          rotation-x={-Math.PI * 0.5}
          fontSize={0.6}
          castShadow={false}
          position-x={-2.95}
          position-z={0.05}
          position-y={0.15}
          font="/Fira_Code Light_Regular.json"
        >
          i
        </Text>

        <Html
          transform
          distanceFactor={1.17}
          rotation-y={Math.PI * 0.2}
          position-x={position.x}
          position-z={position.y}
          position-y={position.z}
          scale={1.5}
          portal={{ current: scroll.fixed }}
          style={{ overflow: "hidden", overscrollBehavior: "contain" }}
        >
          <iframe
            src="https://wordsworth.vercel.app"
            style={{ border: "none", overflow: "clip" }}
            width={1024}
            height={670}
          ></iframe>
        </Html>

        <Laptop
          rotation-y={Math.PI * 0.2}
          position-z={1}
          // rotation-z={Math.PI * 0.2}
          position-x={-6}
          position-y={-0.35}
          scale={1.5}
        />
        <Factory rotation-y={-Math.PI * 0.5} position-x={-3} position-z={13} />

        <TiltedText rotFactor={2.2} fontSize={0.8}>
          About Me
        </TiltedText>

        {[
          "I'm a professional remote web developer",
          "specializing in React. I'm also a skilled",
          "freelancer proficient in React, React",
          "Three Fiber (R3F), Next.js, and Three.js.",
          "Additionally, I have strong expertise",
          "in backend development using Python.",
          "Ready to make your ideas into marvels",
        ].map((x, i) => (
          <Txt
            font={"/JosefinSans-Regular.ttf"}
            position-z={(i !== 6 ? i : i * 1.2) * 0.8 + 1}
            position-x={-2}
            color={i !== 6 ? new Color("#333333") : "black"}
            rotation={[-Math.PI / 2.2, 0, 0]}
            fontSize={i !== 6 ? 0.5 : 0.6}
            anchorX={i !== 6 ? "left" : "center"}
          >
            {x}
          </Txt>
        ))}
      </group>
      <group position={[2, -1.2, 30]}>
        <mesh position={[6, -1, 6]}>
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
        <TiltedText
          rotFactor={2.1}
          fontSize={1}
          position-x={-8}
        >
          My Skills
        </TiltedText>

        <mesh position={[-7, 0, 0.5]}>
          <boxGeometry args={[5, 0.1, 0.1]} />
          <meshMatcapMaterial color={"#c78269"} />
        </mesh>
        <mesh position={[-9, 0, -2.25]}>
          <boxGeometry args={[5, 0.1, 0.1]} />
          <meshMatcapMaterial color={"#c78269"} />
        </mesh>
        <IconTag />

        {[
          "Being a web developer, my main proficiencies",
          "include HTML, CSS and JavaScript",
          "for static web development and ReactJS,",
          "Next and R3F for Immersive 3D and corpo-",
          "rate websites. Apart from Frontend Tech,",
          "I have experience with JS runtimes",
          "including Bun and NodeJS, for Server-Side",
          "development.",
        ].map((x, i) => (
          <Txt
            font={"/JosefinSans-Regular.ttf"}
            position-z={(i !== -1 ? i : i * 1.2) * 0.8 + 3.3}
            position-x={-3.5}
            color={i !== -1 ? new Color("#333333") : "black"}
            rotation={[-Math.PI / 2.2, 0, 0]}
            fontSize={i !== -1 ? 0.5 : 0.6}
            anchorX={i !== -1 ? "left" : "center"}
          >
            {x}
          </Txt>
        ))}
      </group>
      <group position={[2, -1.2, 45]}>
        <Text
          overrideMaterial
          rotation={[-Math.PI / 2.1, 0, 0]}
          fontSize={1}
          position-x={-8}
          castShadow={false}
        >
          Projects:
          <meshBasicMaterial color={"#c78269"} />
        </Text>
        <mesh
          position-x={-10}
          position-y={-1}
          onClick={() => {
            window.open("https://github.com/Hammad-hab");
          }}
          onPointerEnter={() => {
            document.body.style = "cursor:pointer";
          }}
          onPointerLeave={() => {
            document.body.style = "cursor:auto";
          }}
        >
          <boxGeometry args={[1, 0, 1]} />
          <meshBasicMaterial map={github} transparent />
        </mesh>

        <mesh
          position-x={-8.5}
          position-y={-1}
          onClick={() => {
            window.open("https://sketchfab.com/meta-creators");
          }}
          onPointerEnter={() => {
            document.body.style = "cursor:pointer";
          }}
          onPointerLeave={() => {
            document.body.style = "cursor:auto";
          }}
        >
          <boxGeometry args={[1, 0, 1]} />
          <meshBasicMaterial map={sketchfab} transparent />
        </mesh>

        <mesh
          position-x={-7}
          position-y={-1}
          onClick={() => {
            window.open("https://medium.com/@hammadalibutt30");
          }}
          onPointerEnter={(e) => {
            document.body.style = "cursor:pointer";
          }}
          onPointerLeave={() => {
            document.body.style = "cursor:auto";
          }}
        >
          <boxGeometry args={[1, 0, 1]} />
          <meshBasicMaterial map={medium} transparent />
        </mesh>
        <TDHref
          text="CWShell"
          href="https://github.com/Hammad-hab/CWShell-2.0"
          offset={0}
        />
        <TDHref
          text="Wordsworth (Google Gemini Competition)"
          href="https://wordsworth.vercel.app"
          offset={1}
        />
        <TDHref
          text="USL (Unified Shader Language)"
          href="https://github.com/Hammad-hab/USL"
          offset={2}
        />
        <TDHref
          text="Protexa"
          href="https://github.com/Hammad-hab/Protexa"
          offset={3}
        />
        <TDHref
          text="Croton"
          href="https://github.com/Hammad-hab/Croton"
          offset={4}
        />

        <Text
          overrideMaterial
          rotation={[-Math.PI / 2.1, 0, 0]}
          fontSize={1}
          castShadow={false}
          position={[-5, 0, 8]}
        >
          Interested in my services?
          <meshBasicMaterial color={"#c78269"} />
        </Text>
        <mesh position={[-9, 0, 8]}>
          <boxGeometry args={[5, 0.1, 0.1]} />
          <meshMatcapMaterial color={"#c78269"} />
        </mesh>
        <mesh position={[-2, 0, 6.2]}>
          <boxGeometry args={[5, 0.1, 0.1]} />
          <meshMatcapMaterial color={"#c78269"} />
        </mesh>

        <Txt
          rotation={[-Math.PI / 2.2, 0, 0]}
          position={[-5, 0, 9]}
          fontSize={0.5}
          color={"white"}
        >
          Contact me at
        </Txt>
        <Txt
          rotation={[-Math.PI / 2.2, 0, 0]}
          position={[-5, 0, 10]}
          fontSize={0.5}
          color={"#1565C0"}
          onPointerEnter={(e) => {
            document.body.style = "cursor:pointer";
          }}
          onPointerLeave={() => {
            document.body.style = "cursor:auto";
          }}
          onClick={() => {
            window.open("mailto:hammadalibutt30@gmail.com");
          }}
        >
          hammadalibutt30@gmail.com
        </Txt>
      </group>
    </group>
  );
}
