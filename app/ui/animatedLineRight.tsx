'use client'

import { useState, useEffect, useRef } from 'react';

function AnimatedLineRight() {
    const [lineWidth, setWidth] = useState(0);
    const lineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setWidth(40); // Set width to 80% when the line is in view
                } else {
                    setWidth(0); // Reset width to 0% when the line is out of view
                }
            },
            {
                threshold: 0.1 // Trigger when 10% of the line is visible
            }
        );

        if (lineRef.current) {
            observer.observe(lineRef.current);
        }

        return () => {
            if (lineRef.current) {
                observer.unobserve(lineRef.current);
            }
        };
    }, []);

    return (
        <div className="mt-[5vh] bottom-0 right-0 w-full h-10 bg-transparent" ref={lineRef}>
            <div 
                className="h-10 bg-[#C6971A] transition-all duration-700 border-l-4 rounded-l-3xl"
                style={{ 
                    width: `${lineWidth}%`,
                    position: 'absolute',
                    right: 0,
                    transitionDuration: '3s' // Custom 3-second duration for slower effect
                }}
            ></div>
        </div>
    );
}

export default AnimatedLineRight;
