import Header from '../header/Header';
import Footer from '../footer/Footer';
import React, {useContext} from 'react';
import Context from '../../../context/Context';


const Main = () => {
    const {markupService} = useContext(Context);

    return (
        <>
            <Header markupService={markupService}/>

            <section className={'main'}>
                <div className={'main__content'}>
                    <h1 className={'main__heading'}>
                        {markupService.mainHeadingTemplate()['we']} 
                        <br/>
                        {markupService.mainHeadingTemplate()['love']}
                        <br/>
                        {markupService.mainHeadingTemplate()['js']}
                    </h1>
                </div>
            </section>

            <Footer markupService={markupService}/>
        </>
    );
};


export default Main;