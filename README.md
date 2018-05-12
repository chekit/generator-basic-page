![](https://fontmeme.com/permalink/170617/1dcc71d7d21a1883084b89138a19b268.png)

Проект представляет собой предопределённую базовую структуру со всеми необходимыми файлами и настроенными процессами для создания web-проекта.

# Версия 2.1.0

- В новой редакции JavaScript заменён на TypeScript.

## Технологии

- Для HTML используется препроцессор **[Pug](https://pugjs.org/api/getting-started.html)** (*Jade*)
- Для CSS используется препроцессор **[Sass](https://sass-scss.ru/)** (*Scss*)
- ~~JS транспилируется с помощью **[Babel](https://babeljs.io/)** и **[Browserify](http://browserify.org/)** из ES2015 в ES5~~.
- Подключена библиотека **Modernizr** (необходимые проверки, модули настраиваются в файле `modernizr-config.json`)

> Для выбора настроек: https://modernizr.com/download?setclasses

- Подключен **[normalize.css](https://necolas.github.io/normalize.css/)** (его Scss версия)
- ~~Проверка кода осущетсвляется с помощью **[EsLint](http://eslint.org/)** (настройки в корне проекта, файл `.eslintrc`)~~

> Настройка путей для gulp тасков в файле `project.config.json`

> Gulp таски вынесены в отдельный каталог `./gulp/`. В основном `gulpfile.babel.js` настраиваются только основные таски для работы с проектом

## TODO

> 2.1.1

- Добавить глобальные настройки для создания sourcemaps в dev режиме