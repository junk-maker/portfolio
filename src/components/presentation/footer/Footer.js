import React from 'react';
import PropTypes from 'prop-types';


const Footer = ({markupService}) => {
    return (
        <footer className={'footer'}>
            <nav className={'footer__navigation'}>
                <div className='footer__content'>
                    <a target={'blank'} rel={'noreferrer'} className={'footer__link'}  href={markupService.footerHeadingTemplate()['link']}>
                        <span className={'footer__heading'}>{markupService.footerHeadingTemplate()['github']}</span> 
                    </a>
                </div>
            </nav>
        </footer>
    );
};


Footer.propTypes = {
    markupService: PropTypes.object,
};


export default Footer;