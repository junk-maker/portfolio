import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import Context from '../../../context/Context';


const NotFound = () => {
    const {markupService} = useContext(Context);

    return (
        <section className={'not-found'}>
            <div className={'not-found__link'}>
                <Link style={{textDecoration: 'none'}} className={'not-found__link-heading'} to={markupService.notFoundHeadingTemplate()['direction']}>
                    {markupService.notFoundHeadingTemplate()['link']}
                </Link>
            </div>
            <div className={'not-found__container'}>
                <h2 className={'not-found__title'}>
                    {markupService.notFoundHeadingTemplate()['title']}
                </h2>
                <h1>404</h1>
                <p className={'not-found__subtitle'}>
                    {markupService.notFoundHeadingTemplate()['subtitle']}
                </p>
            </div>
        </section>
    );
};


export default NotFound;