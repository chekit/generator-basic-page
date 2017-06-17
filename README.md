![](https://fontmeme.com/permalink/170617/1dcc71d7d21a1883084b89138a19b268.png)

# Версия 2.0.0

В новой редакции отказался от ~~Yeoman~~.

Теперь проект представляет собой предопределённую базовую структуру с необходимыми файлами.

## Технологии

- Для HTML используется препроцессор **[Pug](https://pugjs.org/api/getting-started.html)** (*Jade*)
- Для CSS используется препроцессор **[Sass](https://sass-scss.ru/)** (*Scss*)
- JS транспилируется с помощью **[Babel](https://babeljs.io/)** и **[Browserify](http://browserify.org/)** из ES2015 в ES5.
- Подключена библиотека **Modernizr** (необходимые проверки, модули настраиваются в файле `modernizr-config.json`)

> Для выбора настроек: https://modernizr.com/download?setclasses

- Подключен **[normalize.css](https://necolas.github.io/normalize.css/)** (его Scss версия)
- Проверка кода осущетсвляется с помощью **[EsLint](http://eslint.org/)** (настройки в корне проекта, файл `.eslintrc`)

> Настройка путей для gulp тасков в файле `project.paths.json`

> Gulp таски вынесены в отдельный каталог `./gulp/`. В основном `gulpfile.js` настраиваются только основные таски для работы спроектом
