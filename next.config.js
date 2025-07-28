// next.config.js
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: true,
  },
};
