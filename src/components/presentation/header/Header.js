
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Header = ({type, markupService}) => {
    return (
        <header id={'anchor'} className={'header'}>
            <div className={'header__portfolio'}>
                <Link style={{textDecoration: 'none'}} to={markupService.headerHeadingTemplate()[type === undefined ? 'forward' : 'back']}>
                    <span className={'header__heading'}>
                        {markupService.headerHeadingTemplate()[type === undefined ? 'portfolio' : 'exit'] }
                    </span> 
                </Link>
            </div>
        </header>
    );
};

Header.propTypes = {
    markupService: PropTypes.object,
};


export default Header;