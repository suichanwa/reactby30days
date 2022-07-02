import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "Hello World!": "Hello World!",
                "This is a subtitle": "This is a subtitle",
                "This is a description": "This is a description",
            },
        },
        fr: {
            translation: {
                "Hello World!": "Bonjour le monde!",
                "This is a subtitle": "Ceci est un sous-titre",
                "This is a description": "Ceci est une description",
            },
        },
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
})

export default i18n;