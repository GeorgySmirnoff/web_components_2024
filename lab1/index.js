const languages = {
  en: './greeting_en.js',
  ru: './greeting_ru.js',
  zh: './greeting_zh.js',
  pt: './greeting_pt.js',
  hi: './greeting_hi.js'
};

const lang = process.argv[2] ?? 'ru';

async function loadGreeting(lang) {
  if (languages[lang]) {
    try {
      const greeting = await import(languages[lang]);
      console.log(greeting.default);
    } catch (error) {
      console.error("Ошибка при загрузке файла:", error);
    }
  } else {
    console.error("Возможные языки: 'en', 'ru', 'zh', 'hi','pt'.");
  }
}

loadGreeting(lang);
