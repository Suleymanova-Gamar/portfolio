import React from "react";
import { useNavContext } from "../../context/NavContext";
import { useAnimationContext } from "../../context/TypeAnimationContext";
import ContactLinks from "./ContactLinks";
import './navbar.css';

export default function Nav() {
    const {
        activeLink,
        halfScrolled,
        setSections,
        navRef,
        navParentRef,
        prevHalfScrolledRef,
        navLinkContainerRef,
        sectionsRef,
        handleClick,
        handleScroll
    } = useNavContext();
    const { setTriggerAnimation } = useAnimationContext();

    React.useEffect(() => {
        const allBtns = [...navLinkContainerRef.current.children];
        allBtns.forEach(btn => btn.classList.remove('active'));
        const theBtn = allBtns.filter(btn => btn.getAttribute('href').slice(1) === activeLink)[0];
        if (theBtn) theBtn.classList.add('active');
        if (activeLink === 'Info') setTriggerAnimation(true);
        // eslint-disable-next-line
    }, [activeLink, navLinkContainerRef]);

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
      }, []);

    React.useEffect(() => {
        if (prevHalfScrolledRef.current !== halfScrolled) {
            if(navRef) navRef.current.classList.toggle('nav_onScroll')
        }
        prevHalfScrolledRef.current = halfScrolled;
        // eslint-disable-next-line
    }, [halfScrolled]);

    React.useEffect(() => {
        // getting distance between sections and the top of the body
        const allSections = [...document.getElementsByTagName('section')];
        function getDistanceFromTop(element) {
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.top + scrollTop - navParentRef.current.clientHeight - 24;
        }
        const newSections = allSections.map((s) => ({
            id: s.getAttribute('id'),
            distanceFromTop: getDistanceFromTop(s),
        }));

        setSections((prevSections) => {
            const uniqueSections = [...new Map([...prevSections, ...newSections]
                    .map(item => [item.id, item]))
                    .values()];
            sectionsRef.current = uniqueSections;
            return uniqueSections;
        });
        // adjusting header's main content's distance from top to navbar
        // headerRef.current.style.paddingTop = navRef.current.clientHeight + 'px';
        // eslint-disable-next-line
    }, [halfScrolled]);
    return(
        <nav className="navbar navbar-expand-lg w-100 z_index_1" ref={navParentRef}>
                <div className="container-lg transition py-3" ref={navRef}>
                    <div>
                        {/* eslint-disable-next-line */}
                        <a className="brand no_underline color_primary f_kaushan"
                            href="#Header" onClick={handleClick} title="Gamar Suleymanova"></a>
                    </div>
                    <ContactLinks />
                    <NavLinks />
                </div>
        </nav>
    );
}
function NavLinks() {
    const {
        activeLink,
        isMenuActive,
        handleMenuBtn,
        navLinkContainerRef,
        handleClick,
    } = useNavContext();
    const nav_link_content = React.useMemo(() => [
        'Info', 'Projects',
        // 'Contact'
    ], []);
    return (
        <div className='links_container d-flex position-relative'>
            <button onClick={handleMenuBtn} className={`menu_btn ${(isMenuActive === true) ? 'active ' : ''} d-lg-none transition btn_default color_primary flex_center`}><i className="bi bi-list f_h5 transition"></i></button>
            <div className="nav_links transition align-items-end d-flex justify-content-lg-end flex-column flex-lg-row gap-2 gap-lg-0 px-2 px-lg-0"
                ref={navLinkContainerRef}>
                {nav_link_content.map((link, index) => {
                    return <InnerLink
                        key={index}
                        name={link}
                        activeLink={activeLink}
                        handleClick={handleClick}
                    />
                })}
            </div>
        </div>
    );
}
function InnerLink({ name, activeLink, handleClick }) {
    return (
        <a className={`nav_link w_fit transition p_lg_relative px-4 py-1 no_underline text_medium ${(activeLink === name) ? 'active ' : ''}`}
            href={`#${name}`} onClick={handleClick}>{name} </a>
    );
}