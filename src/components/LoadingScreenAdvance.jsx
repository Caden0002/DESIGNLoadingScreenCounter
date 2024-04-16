import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import box from '/boxloading.gif';

function LoadingScreenAdvance(props) {
    const countAnimation = useSpring({
        number: 100,
        from: { number: 0 },
        config: {
            duration: 4600,
            easing: t => 1 - Math.pow(1 - t, 3) // Start slower easing function
        }
    });

    const fadeAnimation = useSpring({ opacity: countAnimation.number.to(n => (n === 100 ? 0 : 1)), from: { opacity: 1 }, config: { duration: 300 } });

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
        <animated.div className="fixed bg-backgroundColorPrimary h-screen top-0 left-0 w-full h-full flex justify-center items-center z-50" style={{ ...fadeAnimation, pointerEvents: 'none' }}>
            <div className="p-4 rounded-md">
                <div className="flex justify-center">
                    <animated.img src={box} alt="Boxes" style={{ width: '50%', height: 'auto' }} />
                </div>
            </div>
            <animated.div className="fixed bottom-0 left-0 p-2 text-emerald-200 text-9xl font-bold" style={{ zIndex: 9999 }}>
                {countAnimation.number.to(val => `${Math.floor(val)}%`)}
            </animated.div>
        </animated.div>
    );
}

export default LoadingScreenAdvance;
