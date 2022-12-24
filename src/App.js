import "./App.css";
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./component/Cylinder3d";
import Diamond from "./Diamond";
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
 
function App() {
  return (
    <>
      <section className='App-header'>
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} /> 
        </Canvas>
      </section>
    </>
  );
}
 
