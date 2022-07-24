import {Link} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import React, {useContext} from 'react';
import Context from '../../../context/Context';


const Portfolio = () => {
    const {markupService} = useContext(Context);

    return (
        <>
            <Header type={'portfolio'} markupService={markupService}/>

            <section className={'portfolio'}>
                <Link style={{textDecoration: 'none'}} to={markupService.portfolioHeadingTemplate()['budget-link']} >
                    <div className={'portfolio__budget'}>
                        <span className={'portfolio__heading'}>
                            {markupService.portfolioHeadingTemplate()['budget']}
                        </span>
                    </div>
                </Link>
            </section>

            <Footer markupService={markupService}/>
        </>
    );
};


export default Portfolio;