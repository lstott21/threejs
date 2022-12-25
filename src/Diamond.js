import { useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  useGLTF,
  MeshRefractionMaterial,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  OrbitControls,
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { RGBELoader } from 'three-stdlib'

function Diamond(props) {
  const ref = useRef()
  const { nodes } = useGLTF('/dflat.glb')
  // Use a custom envmap/scene-backdrop for the diamond material
  // This way we can have a clear BG while cube-cam can still film other objects
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  const config = {
    bounces: 5,
    aberrationStrength: .05,
    ior: 6,
    fresnel: 1,
    color: 'hotpink',
    fastChroma: true
  }
  return (
        <mesh castShadow ref={ref} geometry={nodes.Diamond_1_0.geometry} {...props}>
          <MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} />
        </mesh>
      )
}

// const texture = useLoader(RGBELoader, "/textures/royal_esplanade_1k.hdr")
// return (
//   <mesh geometry={diamondGeometry} {...props}>
//     <RefractionMaterial envMap={texture} />



export default function App() {
  return (
    <>
    <section className='App-header'>
      <Canvas shadows camera={{ position: [1, 1, 2.5], fov: 45}}>
        <color attach="background" args={['white']} />
        <Diamond position={[0, 0, 0]} />
        <AccumulativeShadows
          temporal
          frames={100}
          color='white'
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.9}
          opacity={.75}
          scale={10}
          position={[0, -.45, 0]}
          >
          <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.01} />
        </AccumulativeShadows>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.2} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <EffectComposer>
          <Bloom luminanceThreshold={1.75} intensity={1.5} levels={3} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </section>
    </>
  );
}
