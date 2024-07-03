import React, { createContext, useState, useContext } from 'react';

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    return (
        <AnimationContext.Provider value={{ triggerAnimation, setTriggerAnimation }}>
            {children}
        </AnimationContext.Provider>
    );
};
export const useAnimationContext = () => useContext(AnimationContext);
