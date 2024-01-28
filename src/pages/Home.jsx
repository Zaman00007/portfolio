import {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island  from '../models/Island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import Bird from '../models/Bird';

function Home() {
    const [isRotating, setIsRotating] = useState(false);
    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;
        let rotation = [0.1, 4.7, 0];
    
        if (window.innerWidth < 768) {
          screenScale = [0.9, 0.9, 0.9];
          screenPosition = [0, -6.5, -43.4];
        } else {
          screenScale = [1, 1, 1];
          screenPosition = [0, -6.5, -43.4];
        }
    
        return [screenScale, screenPosition, rotation];
      };

        const [isLandScale, isLandPosition, isLandRotation] = adjustIslandForScreenSize();

        const adjustPlaneForScreenSize = () => {
          let screenScale, screenPosition;
          let rotation = [0.1, 4.7, 0];
      
          if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -3, 0];
          } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
          }
      
          return [screenScale, screenPosition];
        };
        const [isPlaneScale, isPlanePosition] = adjustPlaneForScreenSize();

    return (
        <section className='w-full h-screen relative'>
            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab' }`} camera={{near:0.1 , far:1000}}>
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[1,1,1]} intensity={2}/>  
                    <ambientLight intensity={0.5}/>
                    <pointLight/>
                    <spotLight/>
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                    <Bird/>
                    <Sky/>
                    <Island
                        position={isLandPosition}
                        scale={isLandScale}
                        rotation={isLandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Plane
                        position={isPlanePosition}
                        scale={isPlaneScale}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>  
        </section>
  )
}

export default Home
