import React, { createContext, useContext, useRef } from 'react';
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    // states
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    // refs
    const cardParentRef = React.useRef(null);
    // functions
    return (
        <ProjectContext.Provider value={{
            cardParentRef,
            activeSlideIndex, setActiveSlideIndex
        }}>
            {children}
        </ProjectContext.Provider>
    );
};
export const useProjectContext = () => useContext(ProjectContext);
