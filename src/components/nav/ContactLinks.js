import './navbar.css';
import React from 'react';
export default function ContactLinks() {
    const c_link_content = React.useMemo(() => [{
        name: 'Git',
        icon: 'github',
        href: 'https://github.com/Suleymanova-Gamar'
    }, {
        name: 'E-mail',
        icon: 'envelope-at-fill',
        href: 'mailto:suleymanovagamar03@gmail.com'
    }, {
        name: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/gamar-suleymanova/'
    }], []);
    return (
        <div className="contact-links d-flex gap-1 align-items-center">
            {c_link_content.map(link => {
                return <InnerItem
                    key={link.name}
                    link={link.href}
                    name={link.name}
                    icon={link.icon}
                />
            })}
        </div>
    );
}
function InnerItem({ link, name, icon }) {
    return (
        <a className="c_link color_primary colorComplim_onHover f_h4 px-2 position-relative flex_center flex-column"
            href={link} target="_blank" rel="noreferrer">
            <i className={`bi bi-${icon} transition`}></i>
            <span className="text_small text-nowrap position-absolute bottom-0 transition">{name}</span>
        </a>
    );
}