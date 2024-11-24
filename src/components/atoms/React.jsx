
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Color } from 'three'

export default function ReactIcon(props) {
  const { nodes, materials } = useGLTF('/react_logo.glb')
  return (
    <group dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        >
          <meshBasicMaterial color={new Color("#67DAFB")}/>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/react_logo.glb')