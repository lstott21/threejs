import { useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  useGLTF,
  MeshRefractionMaterial,
  CubeCamera,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  OrbitControls
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { RGBELoader } from 'three-stdlib'

function Diamond(props) {
  const ref = useRef()
  const { nodes } = useGLTF('/dflat.glb')
  // Use a custom envmap/scene-backdrop for the diamond material
  // This way we can have a clear BG while cube-cam can still film other objects
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  // Optional config
  // const config = useControls({
  //   bounces: { value: 4, min: 0, max: 8, step: 1 },
  //   aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
  //   ior: { value: 2.4, min: 0, max: 10 },
  //   fresnel: { value: 1, min: 0, max: 1 },
  //   color: 'white',
  //   fastChroma: true
  // })
  const config = {
    bounces: 8,
    aberrationStrength: .1,
    ior: 8,
    fresnel: 1,
    color: 'hotpink',
    fastChroma: true
  }
  return (
    <CubeCamera resolution={512} frames={1} envMap={texture}>
      {(texture) => (
        <mesh castShadow ref={ref} geometry={nodes.Diamond_1_0.geometry} {...props}>
          <MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} />
        </mesh>
      )}
    </CubeCamera>
  );
}



export default function App() {
  return (
    <>
    <section className='App-header'>
      <Canvas shadows camera={{ position: [-2, 1, 3], fov: 45 }}>
        <color attach="background" args={['white']} />
        <ambientLight intensity={0.5} color={0x404040} />
        <spotLight position={[5, 5, -10]} angle={0.1} penumbra={5} />
        <pointLight position={[-5, -5, -5]} color={0x404040} intensity={.5} />
        <Diamond position={[0, 0, 0]} />
        <AccumulativeShadows
          temporal
          frames={100}
          color='black'
          colorBlend={10}
          toneMapped={true}
          alphaTest={0.8}
          opacity={1}
          scale={12}
          position={[0, -0.5, 0]}>
          <RandomizedLight amount={1} radius={10} ambient={0.5} intensity={.1} position={[5, 5, -10]} bias={0.01} />
        </AccumulativeShadows>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.2} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <EffectComposer>
          <Bloom luminanceThreshold={2} intensity={1} levels={9} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </section>
    </>
  );
}
