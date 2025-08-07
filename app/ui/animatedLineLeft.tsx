'use client'
import { useState, useEffect, useRef} from "react";
export default function AnimatedLineLeft(){
    const [lineWidth, setWidth] = useState(0);
    const lineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setWidth(80); // Set width to 80% when the line is in view
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
        <div className="mt-[10vh] bottom-0 left-0 w-full h-10 bg-transparent" ref={lineRef}>
            <div 
                className="h-full bg-[#C6971A] transition-all border-r-4 rounded-r-3xl"
                style={{ width: `${lineWidth}%`,
                transitionDuration:'1s'
                 }}
            ></div>
        </div>
    );
}