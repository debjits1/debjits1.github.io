import React from 'react';
import { animated, useSpring } from 'react-spring';
import "./Banner.css";

const Banner = () => {
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 35}px,0)`;
    const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
    return ( 
        <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y)})} className="banner">
            <div className="bannerCircle">
                <animated.div className="color-1-bg" style={{transform: props.xy.interpolate(trans1)}}></animated.div>
            </div>
            <div className="text-center">
            <animated.h2 className="mainHead" style={{transform: props.xy.interpolate(trans2)}}>Hey there</animated.h2>
            <animated.div className="body-big" style={{transform: props.xy.interpolate(trans2)}}>I am Debjit Sinha</animated.div>
            </div>
        </div>
    );
}
 
export default Banner;