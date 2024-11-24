import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HTML5Model(props) {
  const { nodes, materials } = useGLTF('/html5_logo.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.014, 0.001, 0]} rotation={[-Math.PI / 2, 0.006, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[11.813, 52.914, -1.08]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={82.789}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_orange_0.geometry}
              material={materials.orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Plane001_orange-lite_0'].geometry}
              material={materials['orange-lite']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane_escudo-2_0'].geometry}
            material={materials['escudo-2']}
            position={[0, 0, -1.08]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_five_0.geometry}
            material={materials.five}
            position={[61.853, 307.492, 35.171]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/html5_logo.glb')
