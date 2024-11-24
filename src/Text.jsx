import {
    Center,
    Text3D,
    MeshTransmissionMaterial
  } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { RGBELoader } from 'three/examples/jsm/Addons.js';

function Text({ children, config, font = '/Inter_Medium_Regular.json', overrideMaterial=false, fontSize=3, castShadow=true, ...props}) {
    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  
    return (
      <>
        <group >
          <Center scale={[0.8, 1, 1]} front top {...props}>
            <Text3D
              castShadow={castShadow}
              font={font}
              scale={fontSize}
              letterSpacing={-0.03}
              height={0.25}
              >
              {children}
              {overrideMaterial ? <></> : <MeshTransmissionMaterial {...config} background={texture} />}
              
            </Text3D>
          </Center>
        </group>
      </>
    )
  }

export default Text;