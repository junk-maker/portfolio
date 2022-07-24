import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import React, {useMemo, useContext} from 'react';
import Context from '../../../../context/Context';


const Budget = () => {
    const {markupService} = useContext(Context);
    const item = useMemo(() => markupService.budgetTemplate(), [markupService]);

    const renderItem = useMemo(() => item.map(val => (
        <figure key={val.id} className={`budget__screenshots budget__screenshots${val.className}`}>
            <img src={val.src} alt={val.alt} className={'budget__img'}/>
        </figure>
    )), [item]);

    return (
        <>
            <Header markupService={markupService}/>

            <section className={'budget'}>
                <div className={'budget__anchor'}>
                    <a href={'#anchor'}>
                        <img 
                            className={'budget__icon'}
                            src={markupService.budgetHeadingTemplate()['icon']} 
                            alt={markupService.budgetHeadingTemplate()['anchor']}
                        />
                    </a>
                </div>

                <div className={'budget__content'}>
                    <h1 className={'budget__title'}>{markupService.budgetHeadingTemplate()['title']}</h1>
                    <p className={'budget__license'}>{markupService.budgetHeadingTemplate()['license']}</p>
                    <div className={'budget__description'}>
                        <p>
                            <a target={'blank'} className={'budget__link'} rel={'noreferrer'} href={markupService.budgetHeadingTemplate()['link']}>
                                {markupService.budgetHeadingTemplate()['app']}
                            </a> {markupService.budgetHeadingTemplate()['budget']}
                        </p>
                        <p>{markupService.budgetHeadingTemplate()['functions']}</p>
                        <p>{markupService.budgetHeadingTemplate()['doc']}</p>
                    </div>

                    <div className={'budget__container'}>{renderItem}</div>

                    <div className={'budget__postscriptum'}>
                        <p style={{marginTop: '2em'}}>{markupService.budgetHeadingTemplate()['ps']}</p>
                        <p>
                            <a target={'blank'} className={'budget__link'} rel={'noreferrer'} href={markupService.budgetHeadingTemplate()['link']}>
                                {markupService.budgetHeadingTemplate()['fiction']}
                            </a>
                        </p>
                        <p className={'budget__wishes'}>{markupService.budgetHeadingTemplate()['wishes']}</p>
                    </div>
                </div>
            </section>

            <Footer markupService={markupService}/>
        </>
    );
};


export default Budget;