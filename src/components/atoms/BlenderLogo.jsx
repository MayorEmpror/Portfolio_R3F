import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function BlenderLogo(props) {
  const { nodes, materials } = useGLTF('/free_blender_logo_3d_model.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.173}>
        <group position={[0.495, 0.235, -0.539]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Orange}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Blue}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/free_blender_logo_3d_model.glb')
