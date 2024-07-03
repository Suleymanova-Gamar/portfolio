import React, { createContext, useContext, useRef } from 'react';
export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    // states
    const [halfScrolled, setHalfScrolled] = React.useState(false);
    const [activeLink, setActiveLink] = React.useState('Header');
    const [sections, setSections] = React.useState([{ id: 'Header', distanceFromTop: 0 }]);
    const [isMenuActive, setMenuActive] = React.useState(false);
    // refs
    const navRef = useRef(null);
    const prevHalfScrolledRef = React.useRef(false);
    const navLinkContainerRef = React.useRef();
    const sectionsRef = React.useRef(sections);
    const headerRef = React.useRef();
    const navParentRef = React.useRef(null);
    // functions
    const handleMenuBtn = () => {
        if (isMenuActive) setMenuActive(false);
        else setMenuActive(true);
    }
    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('href').slice(1);
        const theSection = document.getElementById(id);
        const offset = navParentRef.current.clientHeight; // Offset value for scrolling 100px above the section
        const scrollPosition = window.scrollY + theSection.getClientRects()[0].top - offset - 24;
        // setActiveLink(id);
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    }
    const handleScroll = () => {
        // const currentScreenHeight = window.innerHeight;
        const passedHalfOfScreen = navRef.current.clientHeight <= window.scrollY;
        setHalfScrolled(passedHalfOfScreen);
        // scroll spying
        const allSections = sectionsRef.current;
        const enteredSections = allSections.filter(s => (s.distanceFromTop - 24) < window.scrollY);
        // console.log(enteredSections);
        const activeSection = enteredSections[enteredSections.length - 1];
        if(activeSection) setActiveLink(activeSection.id);
    }
    return (
        <NavContext.Provider value={{
            activeLink, setActiveLink,
            halfScrolled, setHalfScrolled,
            sections, setSections,
            isMenuActive, setMenuActive,
            handleMenuBtn,
            navRef,
            navParentRef,
            prevHalfScrolledRef,
            navLinkContainerRef,
            sectionsRef,
            headerRef,
            handleClick,
            handleScroll

        }}>
            {children}
        </NavContext.Provider>
    );
};
export const useNavContext = () => useContext(NavContext);
