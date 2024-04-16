import { useSpring, animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react';

function Loading(props) {
    const countAnimation = useSpring({
        number: 100,
        from: { number: 0 },
        config: {
            duration: 4800,
        }
    });

    const fadeAnimation = useSpring({ opacity: countAnimation.number.to(n => (n === 100 ? 0 : 1)), from: { opacity: 1 }, config: { duration: 1000 } });

    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {
        // Disable scrolling on mount
        document.body.classList.add('no-scroll');

        const timeout = setTimeout(() => {
            // Enable scrolling after 5 seconds
            document.body.classList.remove('no-scroll');
            setScrollEnabled(true);
        }, 5000);

        return () => {
            // Enable scrolling on unmount and clear timeout
            document.body.classList.remove('no-scroll');
            clearTimeout(timeout);
        };
    }, []);

    return (
        <animated.div className="fixed h-screen bg-black top-0 left-0 w-full h-full flex justify-center items-center z-50" style={{ ...fadeAnimation, pointerEvents: 'none' }}>

            <animated.div className=" text-white text-9xl font-bold" style={{ zIndex: 9999 }}>
                {countAnimation.number.to(val => `${Math.floor(val)}%`)}
            </animated.div>
        </animated.div>
    );
}

export default Loading;
