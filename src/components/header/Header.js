
import './main.css';
import model  from '../../assets/images/dev-model.png';
import React from 'react';
import { useNavContext } from '../../context/NavContext';
import { useProjectContext } from '../../context/ProjectContext'
export default function Header() {
    const { fullHeightOfTopImg } = useProjectContext();
    const {
        headerRef,
        handleClick,
    } = useNavContext();

    return (
        <header id="Header" ref={headerRef}>
            <div className="container-lg pb-5 align-items-stretch">
                <div className="row flex-md-row-reverse">
                    <div className="col-md-6 d-flex align-items-center overflow-hidden">
                        <div className="bg_devImg position-relative m-5">
                            <img className='devModel_img w-100 h-auto rounded-circle' src={model} alt="Developer model" title='Developer model' />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <p className="text_medium mb-0">Hi there, I’m a </p>
                        <span className="mainText_highlight font_h3">Front End Developer</span>
                        <p className="text_medium mb-0">who lives in Baku, Azerbaijan. If you would like to get familiar with my work please check out the website.</p>
                    </div>
                    <div className='col-12'>
                        <a className='btn_navigate p-3 p-md-4 arrowEffect_onHover smaller_onHover position-relative transition btn_navigate_horLines btn_navigate_verLines d-flex flex-column flex-sm-row text-center text-lg-start gap-2 gap-md-4 justify-content-center align-items-center no_underline color_primary f_h4 px-4 mt-4'
                        href='#Projects' onClick={(e) => handleClick(e, fullHeightOfTopImg)}>
                            <span>Transforming Ideas into Interactive Reality</span>
                            <svg className='arrow_down h-100' width="40" viewBox="0 0 52 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='first' fillRule="evenodd" clipRule="evenodd" d="M5.35095 27.8836C5.98555 27.067 7.01445 27.067 7.64905 27.8836L26 51.497L44.351 27.8836C44.9856 27.067 46.0144 27.067 46.649 27.8836C47.2836 28.7001 47.2836 30.0241 46.649 30.8407L27.149 55.9326C26.5144 56.7492 25.4856 56.7492 24.851 55.9326L5.35095 30.8407C4.71635 30.0241 4.71635 28.7001 5.35095 27.8836Z" fill="#150906" stroke="#150906" strokeLinecap="round" strokeLinejoin="round" />
                                <path className='second' fillRule="evenodd" clipRule="evenodd" d="M5.35095 11.1555C5.98555 10.3389 7.01445 10.3389 7.64905 11.1555L26 34.7689L44.351 11.1555C44.9856 10.3389 46.0144 10.3389 46.649 11.1555C47.2836 11.9721 47.2836 13.2961 46.649 14.1126L27.149 39.2046C26.5144 40.0212 25.4856 40.0212 24.851 39.2046L5.35095 14.1126C4.71635 13.2961 4.71635 11.9721 5.35095 11.1555Z" fill="#150906" stroke="#150906" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}