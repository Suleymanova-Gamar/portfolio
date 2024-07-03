import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function SkillList({ skillList, duration, initialID }) {
    const ulRef = useRef();
    const [inView, setInView] = useState(false);
    const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1 }
        );
        if (ulRef.current) {
            observer.observe(ulRef.current);
        }
        return () => {
            if (ulRef.current) {
                // eslint-disable-next-line
                observer.unobserve(ulRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (inView && currentAnimationIndex < skillList.length) {
            const timer = setTimeout(() => {
                setCurrentAnimationIndex((prev) => prev + 1);
            }, duration * 1000); // duration is in seconds, convert to milliseconds
            return () => clearTimeout(timer);
        }
    }, [inView, currentAnimationIndex, skillList.length, duration]);

    return (
        <motion.ul
            className="list_default check_list text_small"
            ref={ulRef}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: duration }}>
            {skillList.map((skill, index) => (
                <SkillItem
                    key={initialID + index}
                    skill={skill}
                    duration={duration}
                    shouldAnimate={index < currentAnimationIndex}
                />
            ))}
        </motion.ul>
    );
}

function SkillItem({ skill, duration, shouldAnimate }) {
    const ref = useRef();

    return (
        <motion.div
            className="motion_div"
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: duration }}>
            <li>
                {skill}
                <motion.div
                    className="child_motion"
                    initial={{ opacity: 0, y: -10 }}
                    animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: duration }}>
                </motion.div>
            </li>
        </motion.div>
    );
}
