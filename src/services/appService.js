export default class  AppService {
    constructor(language) {
        this.language = language;
        this.locales = this.checkLanguage(this.language) ? this.language?.length <= 2 ? `${language}-RU` : `${language}` : this.language?.length <= 2 ? `${language}-EN` : `${language}`;
    };

    checkLanguage(language = this.language) {
        let lang;
        if (language?.length >= 2 && (language !== 'en' && language !== 'en-EN')) {
            lang = true;
        } else {
            lang = false;
        };

        return lang;
    };
};