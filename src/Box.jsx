import React from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Box = () => {

    const timeline = gsap.timeline(
        {
            repeat : -1, repeatDelay : 1 , yoyo : true
        }
    );
    

    useGSAP(()=>{
        timeline.to('#box' , {
            x : "250px" , 
            rotation : '360' , 
            borderRadius : '100%',
            duration : 2 , 
            ease : "back.inOut"
        })
    } , [])


    return <div id="box" className="bg-blue-500 w-20 h-20 rounded-lg">
    
    </div>
}

export default Box