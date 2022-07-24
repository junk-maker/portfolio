import AppService from './appService';

export default class MarkupService {
    constructor(language) {
        this.language = language;
        this.appService = new AppService();
    };

    headerHeadingTemplate() {
        return {
            back: '/',
            forward: '/portfolio',
            exit: this.appService.checkLanguage(this.language) ? 'Выход' : 'Exit',
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
            direction: '/',
            link: this.appService.checkLanguage(this.language) ? 'На главную' : 'To main',
            subtitle: this.appService.checkLanguage(this.language) ? 'Страница не найдена' : 'Page not found',
            title: this.appService.checkLanguage(this.language) ? 'Что-то пошло не так!' : 'Something went wrong!',
        };
    };

    portfolioHeadingTemplate() {
        return {
            'budget-link': '/portfolio/budget',
            budget: this.appService.checkLanguage(this.language) ? 'Budget App' : 'Budget App',
        };
    };

    budgetTemplate() {
        return [
            {id: 0, src: '/images/add.png', className: '--add', alt: this.appService.checkLanguage(this.language) ? 'Добавить' : 'Sdd'},
            {id: 1, src: '/images/budget.png', className: '--budget', alt: this.appService.checkLanguage(this.language) ? 'Бюджет' : 'Budget'},
            {id: 2, src: '/images/edit.png', className: '--edit', alt: this.appService.checkLanguage(this.language) ? 'Редактировать' : 'Edit'},
            {id: 3, src: '/images/sign-in.png', className: '--sign-in', alt: this.appService.checkLanguage(this.language) ? 'Авторизация' : 'Sign in'},
            {id: 4, src: '/images/sign-up.png', className: '--sign-up', alt: this.appService.checkLanguage(this.language) ? 'Регистрация' : 'Sign up'},
            {id: 5, src: '/images/settings.png', className: '--settings', alt: this.appService.checkLanguage(this.language) ? 'Настройки' : 'Settings'},
            {id: 6, src: '/images/statistic.png', className: '--statistic', alt: this.appService.checkLanguage(this.language) ? 'Статистика' : 'Statistic'},
            {id: 7, src: '/images/recovery.png', className: '--recovery', alt: this.appService.checkLanguage(this.language) ? 'Восстановление' : 'Recovery'},
            {id: 8, src: '/images/datepicker.png', className: '--datepicker', alt: this.appService.checkLanguage(this.language) ? 'Указатель даты' : 'Datepicker'},
        ];
    };

    budgetHeadingTemplate() {
        return {
            app: 'BUDGET APP',
            icon: '/icons/anchor.svg',
            link: 'https://budget-mern-stack.herokuapp.com/',
            ps: this.appService.checkLanguage(this.language) ? 'P. S.' : 'P. S.',
            anchor: this.appService.checkLanguage(this.language) ? 'Якорь' : 'Anchor',
            wishes: this.appService.checkLanguage(this.language) ? 'С наилучшими пожеланиями!' : 'Best wishes!',
            license: this.appService.checkLanguage(this.language) ? 'Свободное программное обеспечение' : 'Free software',
            title: this.appService.checkLanguage(this.language) ? 'Программа для ведения бюджета': 'Budget management program',
            fiction: this.appService.checkLanguage(this.language) ? 'Все совпадения - вымысел автора.' : 'All coincidences are the author fiction',
            doc: this.appService.checkLanguage(this.language) ? 'Я использовал D3.js для отображения графиков.' : 'I used D3.js for displaying graphs.',
            budget: this.appService.checkLanguage(this.language) ? '- это приложение для ведения бюджета. Я использовал React, Node.js, Express и MongoDB.' : '- this is a budget management app. I used React, Node.js, Express, and MongoDB.',
            functions: this.appService.checkLanguage(this.language) ? 'Пользователи проходят регистрацию и авторизацию, могут добавлять, редактировать, удалять свои значения, менять пароль, почту и удалить свой профиль, а также просматривать графики и делать выборку нужных значений.' : 'Users are registered and authorized, can add, edit, delete their values, change their password, email and delete their profile, as well as view graphs and make a selection of the desired values.',
        };
    };
};