import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Header = ({markupService}) => {
    return (
        <header className={'header'}>
            <div className={'header__portfolio'}>
                <Link style={{textDecoration: 'none'}} to={markupService.headerHeadingTemplate()['link']}>
                    <span className={'header__heading'}>{markupService.headerHeadingTemplate()['portfolio']}</span> 
                </Link>
            </div>
        </header>
    );
};

Header.propTypes = {
    markupService: PropTypes.object,
};


export default Header;