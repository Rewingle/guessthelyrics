import React, { Suspense } from 'react';
import './Login.css';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader,extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { OrbitControls, Html, Boxi,useGLTF} from '@react-three/drei'
import {useState,useRef} from 'react'
import Roboto from './Roboto.JSON'
import Bold from './bold.blob'

export function Login() {

    const [material,setMaterial] = useState('green')
    const [boxPosition,setPosition] = useState([0,0,0])
    
 
    const Block = ()=>{
        const blockRef = useRef()
         useFrame((state) => {
          const t = state.clock.getElapsedTime()
          blockRef.current.rotation.x = -Math.PI / 1 + Math.cos(t / 4) / 8
          blockRef.current.rotation.y = Math.sin(t / 4) / 8
          blockRef.current.rotation.z = (-3 + Math.sin(t / 1.5)) / 10
          blockRef.current.position.y = (1 + Math.sin(t / 0.1)) / 10
        }) 
        return(
            <mesh ref={blockRef} >
            <Html prepend scale={1} rotation={[0, 0, 0]} position={[0, 0, 0.2]} transform occlude>
                    <div className="annotation" style={{color:'white',fontSize: '1.2em'}}>
                      <p> LOGIN WITH SPOTIFY</p>
                     
                    </div>
                  </Html>
              <boxBufferGeometry args={[8,1,0.2]} attach= "geometry" />
               <meshLambertMaterial attach="material" color = {material} />
                    
            </mesh>
        )
    }

    const [isCLick,setClick] = useState(false)
    const [color,setColor] = useState("hotpink");
    const Variant = {
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }
       
      function Spher(){
        const sphereRef = useRef()
        //useFrame(({clock})=>(sphereRef.current.rotation.x = sphereRef.current.position.x = Math.sin(clock.getElapsedTime())*2.2))
        return(
          <mesh ref={sphereRef} onClick={()=>{color!="hotpink"?setColor("hotpink"):setColor("green")}}>
          <sphereGeometry args={[1, 32, 32]}/>
          <meshStandardMaterial wireframe roughness={0} color={color} />
          </mesh>
        )
      }
  function Texte({position}){
        const font = useLoader(FontLoader, Roboto)
        extend({ TextGeometry })
      const textOptions = {
        font,
        size: 1,
        height: 0.5
      };
      const textRef = useRef()
      
      return(
        <mesh ref={textRef} position={position}>
          <Html>
          <div style={{backgroundColor:'white',width:'200px',height:'200px'}}></div>
          
          </Html>
          <textGeometry args={["LOGIN WITH SPOTIFY", textOptions]} />
          <meshNormalMaterial />
      </mesh>
      )
    }
    function Logo(props){
      const logoRef = useRef()
      const { nodes } = useGLTF('/skala.glb')
      return(
        <mesh geometry={nodes}>
        <meshStandardMaterial color='hotpink'/>
        </mesh>
      )
    }
    return (
        <div className='body'>
        <Canvas style={{height:'100vh',width:'100vh'}} camera={{ position: [1,1,20] }}>
        
        <OrbitControls></OrbitControls>
        <ambientLight intensity={2}/>
        <Suspense fallback={null}>
          <Texte className='loginSpotify' position={[-5,0,0]}/>
        </Suspense>      
       
      </Canvas>

      </div>
    )
}

export default Login;
