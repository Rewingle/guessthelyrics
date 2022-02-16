import React, { useState } from 'react';
import {useFrame} from '@react-three/fiber'
import {useSpring,animated} from 'react-spring'
import './Skala.css'
function Skala() {
    function Column(){
        const heightState = {
            h0: 0.9,
            h1: 1,
            h2: 0.9,
            
        }
        const defColumnHeight = 360;
    const [heights,setHeights] = useState(heightState)
    const [border,setBorder] = useState('')
    const [glow,setGlow] = useState(0) 
    const [mouseOver,setMouseOver] = useState('')
    const borderStyle ='4px solid black'
    const borderShadow ='0 0 '+glow.toString()+'px yellow'
    const anim = useSpring({height: mouseOver == 'col0'?defColumnHeight: defColumnHeight*heights.h0, delay:10})
    const anim1 = useSpring({height: mouseOver == 'col1'?defColumnHeight: defColumnHeight*heights.h1, delay:10})
    const anim2 = useSpring({height: mouseOver == 'col2'?defColumnHeight: defColumnHeight*heights.h2, delay:10})
    return(
            <div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <animated.div className='col' style={anim} onMouseEnter={()=>{setMouseOver('col0');setHeights({  h1: 0.9,h2: 0.8,h3: 0.7,h4: 0.6,h5: 0.5,h6: 0.4})}}> </animated.div>
                    <animated.div className='col' style={anim1} onMouseEnter={()=>{setMouseOver('col1');setHeights({  h0: 0.9,h2: 0.9,h3: 0.8,h4: 0.7,h5: 0.6,h6: 0.5})}}> </animated.div>
                    <animated.div className='col' style={anim2} onMouseEnter={()=>{setMouseOver('col2');setHeights({  h0: 0.8,h1: 0.9,h3: 0.9,h4: 0.8,h5: 0.7,h6: 0.6})}}> </animated.div>

                </div>
            </div>
            
        )
    }
  return (
    <div>
       <Column />
    </div>
  )
  
}

export default Skala;
