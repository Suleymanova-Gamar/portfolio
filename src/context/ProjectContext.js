import React, { createContext, useContext, useRef } from 'react';
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    // states
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    const [fullHeightOfTopImg, setFullHeightOfTopImg] = React.useState(0);
    // refs
    const cardParentRef = React.useRef(null);
    const projectTopImgRef = useRef(null)
    // functions
    return (
        <ProjectContext.Provider value={{
            cardParentRef,
            activeSlideIndex, setActiveSlideIndex,
            fullHeightOfTopImg, setFullHeightOfTopImg,
            projectTopImgRef
        }}>
            {children}
        </ProjectContext.Provider>
    );
};
export const useProjectContext = () => useContext(ProjectContext);
