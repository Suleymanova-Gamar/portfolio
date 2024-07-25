import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import './projects.css';
import { ReactSVG } from 'react-svg';
import '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({
    src,
    isActive,
    alt,
    liveLink,
    info,
    codeLink,
    designLink,
    links
}) {
    const cardParentRef = useRef(null);
    const [fullHeightOfImg, setFullHeightOfImg] = React.useState(0);
    const vh = window.innerHeight / 100;
    const [cardHeight] = React.useState(64 * vh);
    const projectImgRef = React.useRef(null);
    const inView = useInView(projectImgRef);
    const { isOpen, onOpen, onClose } = useDisclosure();

    // for getting full height of the image instead of 0
    React.useEffect(() => {
        const img = projectImgRef.current;
        function handleImageLoad() {
            setFullHeightOfImg(img.clientHeight - cardHeight);
        }
        if (img.complete) {
            handleImageLoad();
        } else {
            img.addEventListener('load', handleImageLoad);
            return () => img.removeEventListener('load', handleImageLoad);
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div
            className='card_container position-relative'
            style={{ height: `${cardHeight}px` }}
            ref={cardParentRef}
        >
            <motion.img
                className=""
                src={src}
                alt={alt}
                ref={projectImgRef}
                initial={{ top: 0 }}
                animate={
                    // (fullHeightOfImg + cardHeight) respresents actual full height of the image,
                    // because we set hegiht of the image like this:
                    // setFullHeightOfImg(img.clientHeight - cardHeight);
                    ((fullHeightOfImg + cardHeight) >= (cardHeight * 1.2)) ?
                        (isActive ?
                            (inView ? { top: [0, -fullHeightOfImg, 0] } : { top: 0 })
                            : { top: 0 })
                        : ''}
                transition={{
                    delay: 1,
                    duration: inView && isActive ? fullHeightOfImg / 100 : 0, // Only animate if inView and isActive
                    ease: "linear",
                    repeat: isActive && inView ? Infinity : 0,
                    repeatDelay: 0.8
                }}
            >
            </motion.img>
            <div
                className="card_content flex_center">
                <div className="links flex_center flex-column gap-2">
                    <a
                        className={`${liveLink ? '' : 'opacity-75'} proj_link flex_center text_small`}
                        rel="noreferrer" href={liveLink ? liveLink : '#nodlink'}
                        target={`${liveLink ? '_blank' : ''}`}
                        title={`live link`}
                    >
                        Go Live
                    </a>
                    <div className="d-flex middle_links">
                        <Button className="proj_link flex_center text_small" onClick={onOpen}>Info</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader className="f_h5 mb-0 color_primary">{info.header}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <p className="color_primary text_small mb-0">{info.descriptions}</p>
                                </ModalBody>

                                <ModalFooter>
                                    <div className="d-flex align-items-center w-100">
                                        <h6 className="f_h6 color_primary me-3 mb-0">Tools:</h6>
                                        <div className="d-flex gap-2">
                                            {info.tools.map((tool, index) => (
                                                <div
                                                    title={tool.toolName}
                                                    key={index}
                                                >
                                                    <ReactSVG
                                                        src={tool.toolIcon}
                                                        className='childSvgSize'
                                                        style={{
                                                            fill: tool.iconColor,
                                                            animation: `bounce .4s linear ${index}s 1`
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <a
                            className={`${codeLink ? '' : 'opacity-75'} proj_link flex_center text_small`}
                            rel="noreferrer" href={codeLink ? codeLink : '#nodlink'}
                            target={`${codeLink ? '_blank' : ''}`}
                            title={`${codeLink ? '' : "I don't have permission to share the codes"}`}
                        >
                            Codes
                        </a>
                    </div>
                    <a
                        className={`${designLink ? '' : 'opacity-75'} proj_link flex_center text_small`}
                        rel="noreferrer" href={designLink ? designLink : '#nodlink'}
                        target={`${designLink ? '_blank' : ''}`}
                        title={`${designLink ? '' : 'Designed by my former co-worker'}`}
                    >
                        Design
                    </a>
                </div>
            </div>
        </div>
    );
}