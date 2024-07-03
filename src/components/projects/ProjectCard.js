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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@fortawesome/free-brands-svg-icons';
export default function ProjectCard({
                                src,
                                isActive,
                                alt,
                                liveLink,
                                info,
                                codeLink,
                                designLink
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
                animate={isActive ? (inView ? { top: [0, -fullHeightOfImg, 0] } : { top: 0 }) : { top: 0 }}
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
                    <a className="proj_link flex_center text_small" rel="noreferrer" href={liveLink} target="_blank">Go Live</a>
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
                                                <FontAwesomeIcon
                                                    className="f_h4 rounded_sm fa_icon_shadow"
                                                    bounce
                                                    key={index}
                                                    icon={tool.toolIcon}
                                                    style={{
                                                        color: tool.iconColor,
                                                        '--fa-animation-delay': `${index}s`,
                                                        '--fa-animation-iteration-count': 1
                                                    }}
                                                    title={tool.toolName}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        {/* <a className="proj_link flex_center text_small" rel="noreferrer" href="https://www.framer.com/motion/examples/" target="_blank">Info</a> */}
                        {codeLink && <a className="proj_link flex_center text_small" rel="noreferrer" href={codeLink} target="_blank">Codes</a>}
                    </div>
                    {designLink&& <a className="proj_link flex_center text_small" rel="noreferrer" href={designLink} target="_blank">Design</a>}
                </div>
            </div>

        </div>
    );
}