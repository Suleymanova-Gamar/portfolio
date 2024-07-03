// images
import img1 from '../../assets/projects/1.png';
import img2 from '../../assets/projects/2.png';
import img3 from '../../assets/projects/3.png';
// icons
import { faHtml5, faCss3Alt, faBootstrap} from '@fortawesome/free-brands-svg-icons';
import { faJ } from '@fortawesome/free-solid-svg-icons';
// import { faJquery } from '@fortawesome/free-brands-svg-icons';

import { faSquareJs } from '@fortawesome/free-brands-svg-icons/faSquareJs';

const content = [
    {
        imgSrc: {
            laptopSize: img1,
            tabletSize: img2,
            mobileSize: img3
        },
        imgAlt: 'Screenshot of the Helply website',
        liveLink: 'https://helply.ae/',
        info: {
            header: 'Helply',
            descriptions: "The goal of the Helply is to provide users with a personalized therapists match tailored to their preferences and needs.",
            tools: [
                {
                    toolName: 'HTML',
                    toolIcon: faHtml5,
                    iconColor: '#F08959'
                },
                {
                    toolName: 'CSS',
                    toolIcon: faCss3Alt,
                    iconColor: '#51709F'
                },
                {
                    toolName: 'JS',
                    toolIcon: faSquareJs,
                    iconColor: '#EDD858'
                },
                {
                    toolName: 'Boostrap',
                    toolIcon: faBootstrap,
                    iconColor: '#a020f0'
                },
                {
                    toolName: 'JQuery',
                    toolIcon: faJ,
                    iconColor: '#0769ad'
                }
            ]
        },
        codesLink: '',
        designLink: ''
    },
];

export default content;
