import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projects.css';
import projectTop from '../../assets/clipPath/projectsTop.svg';
import ProjectCard from './ProjectCard';
import content from './content';
import { useProjectContext } from '../../context/ProjectContext';
import { useMediaQuery } from 'react-responsive';

export default function Projects() {
    const { activeSlideIndex, setActiveSlideIndex,
            setFullHeightOfTopImg,
            projectTopImgRef
     } = useProjectContext();
    const sliderRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(min-width: 0px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });
    React.useEffect(() => {
        const img = projectTopImgRef.current;
        function handleImageLoad() {
            setFullHeightOfTopImg(img.clientHeight);
        }
        if (img.complete) {
            handleImageLoad();
        } else {
            img.addEventListener('load', handleImageLoad);
            return () => img.removeEventListener('load', handleImageLoad);
        }
        // eslint-disable-next-line
    }, []);
    const settings = {
        // autoplay: true,
        pauseOnHover: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: current => handleAfterChange(current)
    };

    useEffect(() => {
        // Initial call to handleAfterChange to set the initial classes
        handleAfterChange(0);
        // eslint-disable-next-line
    }, []);

    const handleAfterChange = (current) => {
        const slides = sliderRef.current.innerSlider.list.querySelectorAll('.slick-slide');
        const activeSlide = [...slides].filter(s => s.classList.contains('slick-active'))[0];
        const prevSLide = activeSlide.previousElementSibling;
        // const lastSlide = [...slides].length;
        // console.log([...slides]);
        slides.forEach(slide => slide.classList.remove('previous-slide'));
        if (prevSLide) prevSLide.classList.add('previous-slide');
        const activeSlideIndex = activeSlide.getAttribute('data-index');
        setActiveSlideIndex(activeSlideIndex);
    };

    return (
        <section className="bg_projects pb-5 clip-path overflow-hidden" id="Projects">
            <img
                className='w-100'
                src={projectTop}
                alt='clip path to top'
                ref={projectTopImgRef}/>
            <div className="container-lg position-relative">
                <div className="row">
                    <div className='col-12'>
                        <h4 className="f_h4 header_main header_main_light position-relative mb-5 color_secondary">My Projects</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-11 col-sm-9 col-xxl-11'>
                        <Slider
                            className='custom_slider mt-4'
                            ref={sliderRef}
                            {...settings}
                        >
                            {content.map((card, index) => {
                                let src;
                                if (isDesktop) {
                                    src = card.imgSrc.laptopSize;
                                } else if (isTablet) {
                                    src = card.imgSrc.tabletSize;
                                } else if (isMobile) {
                                    src = card.imgSrc.mobileSize;
                                }
                                return (<ProjectCard
                                    key={index}
                                    src={src}
                                    alt={card.imgAlt}
                                    liveLink={card.liveLink}
                                    info={card.info}
                                    codeLink={card.codesLink}
                                    designLink={card.designLink}
                                    links={card.links}
                                    isActive={parseInt(activeSlideIndex) === parseInt(index)}
                                />)
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}
