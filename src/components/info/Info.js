import { useMediaQuery } from "react-responsive";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react';
import React from "react";
import './info.css';
import {
    hardSkills,
    softSkills,
    education,
    experiences
} from './content';
import SkillList from "./SkillList";
import { TypeAnimation } from 'react-type-animation';
import { useAnimationContext } from "../../context/TypeAnimationContext";
import { useProjectContext } from "../../context/ProjectContext";
export default function Info() {
    const { triggerAnimation } = useAnimationContext();

    const content = React.useMemo(() => ({
        hardSkills: hardSkills,
        softSkills: softSkills,
        education: education,
        experiences: experiences
    }), []);
    const animeDuration = 0.8;
    const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
    const { fullHeightOfTopImg } = useProjectContext();

    return (
        <section className="container-lg" id="Info" style={{ paddingTop: `${fullHeightOfTopImg}px` }}>
            <div className="row">
                <div className="col-12">
                    <h4 className="f_h4 header_main header_main_dark position-relative mb-5">My Profile</h4>
                    {isTablet ? (
                        <Accordion defaultIndex={0}>
                            <AccordionItem className="border-0">
                                <AccordionButton
                                    className="p-0"
                                    _expanded={{}}
                                    _hover={{ background: 'none' }}
                                >
                                    <Box as='span' flex='1' textAlign='left'>
                                        <h5 className="f_h5 header_sm d-flex justify-content-between position-relative">
                                            Experiences
                                            {/* <div className="experience p_iconParent">
                                                <i className="bi bi-code-slash"></i>
                                            </div> */}
                                            <AccordionIcon />
                                        </h5>
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel pb={4} sx={{ transitionDuration: '3s' }}>
                                    <ul className="list_default check_list text_small">
                                        {content.experiences.map((exp, index) => (
                                            <li key={index}>
                                                <div className="d-flex flex-column">
                                                    <span className="colorComplim">{exp.startDate}- {exp.endDate}</span>
                                                    <span className="f_h6 color_primary">{exp.jobTitle}</span>
                                                    <span className="color_primary">{exp.description}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className="border-0">
                                <AccordionButton
                                    className="p-0"
                                    // eslint-disable-next-line
                                    _expanded={{}}
                                    _hover={{ background: 'none' }}
                                >
                                    <Box as='span' flex='1' textAlign='left'>
                                        <h5 className="f_h5 header_sm d-flex justify-content-between position-relative">
                                            Education
                                            {/* <div className="grad_cap p_iconParent">
                                                <i className="bi bi-mortarboard"></i>
                                            </div> */}
                                            <AccordionIcon />
                                        </h5>
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel pb={4} sx={{ transitionDuration: '3s' }}>
                                    <SkillList
                                        initialID={3}
                                        skillList={content.education}
                                        duration={animeDuration}
                                    />
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className="border-0">
                                <AccordionButton
                                    className="p-0"
                                    _expanded={{}}
                                    _hover={{ background: 'none' }}
                                >
                                    <Box as='span' flex='1' textAlign='left'>
                                        <h5 className="f_h5 header_sm d-flex justify-content-between position-relative">
                                            Soft Skills
                                            {/* <div className="light_bulb p_iconParent">
                                                <i className="bi bi-lightbulb"></i>
                                                <svg className="light" width="74" height="46" viewBox="0 0 74 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0795 40.4417C18.6056 41.4578 17.2619 41.834 16.0781 41.282L7.50446 37.284C6.32068 36.732 5.74514 35.4608 6.21896 34.4447C6.69277 33.4286 8.03651 33.0524 9.22029 33.6044L17.794 37.6024C18.9777 38.1544 19.5533 39.4256 19.0795 40.4417Z" fill="#150906" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M31.6035 9.9642C32.6812 9.65517 33.9907 10.9246 34.5283 12.7995L38.4222 26.3789C38.9598 28.2539 38.522 30.0243 37.4443 30.3333C36.3666 30.6424 35.0571 29.373 34.5195 27.498L30.6256 13.9186C30.088 12.0437 30.5258 10.2732 31.6035 9.9642Z" fill="#150906" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M68.2663 13.8864C69.1847 14.5295 69.3218 15.9181 68.5726 16.9881L63.1466 24.7372C62.3974 25.8072 61.0456 26.1532 60.1272 25.5102C59.2088 24.8671 59.0717 23.4785 59.8209 22.4085L65.2469 14.6593C65.9961 13.5894 67.3479 13.2433 68.2663 13.8864Z" fill="#150906" />
                                                </svg>
                                            </div> */}
                                            <AccordionIcon />
                                        </h5>
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel pb={4} sx={{ transitionDuration: '3s' }}>
                                    <SkillList
                                        initialID={2}
                                        skillList={content.softSkills}
                                        duration={animeDuration}
                                    />
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className="border-0">
                                <AccordionButton
                                    className="p-0"
                                    _expanded={{}}
                                    _hover={{ background: 'none' }}
                                >
                                    <Box as='span' flex='1' textAlign='left'>
                                        <h5 className="f_h5 header_sm d-flex justify-content-between position-relative">
                                            Hard Skills
                                            {/* <div className="gears p_iconParent">
                                                <i className="bi bi-gear"></i>
                                                <i className="bi bi-gear"></i>
                                            </div> */}
                                            <AccordionIcon />
                                        </h5>
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel pb={4} sx={{ transitionDuration: '3s' }}>
                                    <SkillList
                                        initialID='1'
                                        skillList={content.hardSkills}
                                        duration={animeDuration}
                                    />
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    ) :
                        <div className="row">
                            <div className="col-6">
                                <h5 className="f_h5 header_sm d-flex justify-content-between position-relative">
                                    Experiences
                                    <div className="experience p_iconParent">
                                        <i className="bi bi-code-slash"></i>
                                    </div>
                                </h5>
                                <ul className="list_default check_list text_small">
                                    {content.experiences.map((exp, index) => (
                                        <li key={index}>
                                            <div className="d-flex flex-column">
                                                <span className="colorComplim">{exp.startDate}- {exp.endDate}</span>
                                                <span className="f_h6 color_primary">{exp.jobTitle}</span>
                                                {triggerAnimation && (
                                                    <TypeAnimation
                                                        sequence={[
                                                            exp.description,
                                                            500,
                                                        ]}
                                                        wrapper="span"
                                                        speed={25}
                                                        className="color_primary f_inherit"
                                                        repeat={0}
                                                        cursor={false}
                                                    />
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-6">
                                <h5 className="f_h5 header_sm d-flex justify-content-between position-relative">
                                    Education
                                    <div className="grad_cap p_iconParent">
                                        <i className="bi bi-mortarboard"></i>
                                    </div>
                                </h5>
                                <SkillList
                                    initialID={3}
                                    skillList={content.education}
                                    duration={animeDuration}
                                />
                            </div>
                            <div className="col-6">
                                <h5 className="f_h5 header_sm d-flex justify-content-between position-relative">
                                    Soft Skills
                                    <div className="light_bulb p_iconParent">
                                        <i className="bi bi-lightbulb"></i>
                                        <svg className="light" width="74" height="46" viewBox="0 0 74 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0795 40.4417C18.6056 41.4578 17.2619 41.834 16.0781 41.282L7.50446 37.284C6.32068 36.732 5.74514 35.4608 6.21896 34.4447C6.69277 33.4286 8.03651 33.0524 9.22029 33.6044L17.794 37.6024C18.9777 38.1544 19.5533 39.4256 19.0795 40.4417Z" fill="#150906" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M31.6035 9.9642C32.6812 9.65517 33.9907 10.9246 34.5283 12.7995L38.4222 26.3789C38.9598 28.2539 38.522 30.0243 37.4443 30.3333C36.3666 30.6424 35.0571 29.373 34.5195 27.498L30.6256 13.9186C30.088 12.0437 30.5258 10.2732 31.6035 9.9642Z" fill="#150906" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M68.2663 13.8864C69.1847 14.5295 69.3218 15.9181 68.5726 16.9881L63.1466 24.7372C62.3974 25.8072 61.0456 26.1532 60.1272 25.5102C59.2088 24.8671 59.0717 23.4785 59.8209 22.4085L65.2469 14.6593C65.9961 13.5894 67.3479 13.2433 68.2663 13.8864Z" fill="#150906" />
                                        </svg>
                                    </div>
                                </h5>
                                <SkillList
                                    initialID={2}
                                    skillList={content.softSkills}
                                    duration={animeDuration}
                                />
                            </div>
                            <div className="col-6">
                                <h5 className="f_h5 header_sm d-flex justify-content-between position-relative">
                                    Hard Skills
                                    <div className="gears p_iconParent">
                                        <i className="bi bi-gear"></i>
                                        <i className="bi bi-gear"></i>
                                    </div>
                                </h5>
                                <SkillList
                                    initialID='1'
                                    skillList={content.hardSkills}
                                    duration={animeDuration}
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}