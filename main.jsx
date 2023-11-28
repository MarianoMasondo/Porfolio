const { default: i18next } = require("i18next");

i18next
.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    zh: {  
      global: global_zh,
    },
    pt: {
      global: global_pt,
    },
  },
});
