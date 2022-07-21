import AppService from './appService';

export default class MarkupService {
    constructor(language) {
        this.language = language;
        this.appService = new AppService();
    };

    headerHeadingTemplate() {
        return {
            link: '/portfolio',
            portfolio: this.appService.checkLanguage(this.language) ? 'Портфолио' : 'Portfolio',
        };
    };

    footerHeadingTemplate() {
        return {
            link: 'https://github.com/junk-maker',
            github: this.appService.checkLanguage(this.language) ? 'GitHub' : 'GitHub',
        };
    };

    mainHeadingTemplate() {
        return {
            we: this.appService.checkLanguage(this.language) ? 'Мы' : 'We',
            love: this.appService.checkLanguage(this.language) ? 'Любим' : 'Love',
            js: this.appService.checkLanguage(this.language) ? 'Java Script' : 'Java Script',
        };
    };

    notFoundHeadingTemplate() {
        return {
            subtitle: this.appService.checkLanguage(this.language) ? 'Страница не найдена' : 'Page not found',
            title: this.appService.checkLanguage(this.language) ? 'Что-то пошло не так!' : 'Something went wrong!',
        };
    };

};