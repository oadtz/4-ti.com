const { nextI18NextRewrites } = require('next-i18next/rewrites')
const phrases = require('./data/phrases');
const fs = require('fs');

const localeSubpaths = {}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    
    if (isServer) {
      console.log ('Creating translation files from data/phrases.json');
      let translations = [];
      for (const phrase in phrases) {
        for (const lang in phrases[phrase]) {
          if (!translations[lang])
            translations[lang] = {};

          translations[lang][phrase] = phrases[phrase][lang];
        }
      }
      
      for (const lang in translations) {
        fs.writeFileSync(`./public/translations/${lang}/common.json`, JSON.stringify(translations[lang]));
        console.log (`Created translation file to public/translations/${lang}/common.js`);
      }
    }

    // Important: return the modified config
    return config
  },
}
