<h1 align="center">
    <a href="https://lectrum.io" target="_blank" rel="noopener noreferrer">
        <img src="./static/favicon/favicon-woodsmoke.svg" alt="Lectrum favicon" width="25" />
    </a>
    Интенсив по React
</h1>
<br>

<div align="center">
    <!-- Package version -->
    <img src="https://img.shields.io/github/package-json/v/lectrum/react-online-intensive.svg?longCache=true&style=flat-square"
        alt="Package version" />
    <!-- Last commit -->
    <img src="https://img.shields.io/github/last-commit/lectrum/react-online-intensive.svg?longCache=true&style=flat-square" alt="Last commit"
    />
    <!-- Dependencies -->
    <img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?longCache=true&style=flat-square" alt="Dependencies"
    />
    <!-- Contributors welcome -->
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg?longCache=true&style=flat-square" alt="Last update"
    />
</div>
<div align="center">
    <!-- Наш Facebook -->
    <a href="https://www.facebook.com/lectrum">
        <img src="https://img.shields.io/badge/%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D0%B9%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BD%D0%B0%D1%88-Facebook-blue.svg?longCache=true&style=for-the-badge&link=https://www.facebook.com/lectrum"
            alt="Подписывайся на наш Facebook" />
    </a>
</div>
<br>

<h3 align="center">
    👋🏼 Привет и добро пожаловать!
</h3>
<p>
    📸 Вместе мы построим свой Facebook с основным фокусом на глубокое изучение самых тонких особенностей работы React. Пристегни ремни — будет интересно!
</p>
<br>
<p>
    👨🏼‍🔬 В этой инструкции ты узнаешь как настроить и запустить проект. Документация к API <a href="https://lab.lectrum.io/docs/react/">доступна на этой ссылке</a>.
</p>
<br>

## 📜 Содержание

<img align="right" width="70" src="./static/logos/react.png">

-   [🚀 Инструкция по запуску проекта](#-инструкция-по-запуску-проекта)
-   [🤔 FAQ](#-faq)
<br>

### 🚀 Инструкция по запуску проекта

> Список поддерживаемых нами операционных систем [можно найти здесь](https://github.com/Lectrum/FAQ#%D0%9A%D0%B0%D0%BA%D0%B8%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B-%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%B2%D0%B0%D1%8E%D1%82%D1%81%D1%8F-%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D0%BC%D0%B8-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%D0%BC%D0%B8-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-lectrum).


1. [Скачай и установи](https://nodejs.org/en/) последнюю **`LTS-версию Node 10.14.1`**:
2. Выполни в консоли **`node -v`** и убедись, что установленная версия **`Node.js`** не ниже **`10.14.1`**;
3. Выполни в консоли **`npm -v`** и убедись, что установленная версия **`npm`** не ниже **`6.4.1`**;
> ❗️ Мы поддерживаем только последние **`LTS-версии Node.js`** (текущая LTS — **`Node 10.14.1`**). Мы не даём гарантий работы на других версиях Node. Если у тебя не работает, в первую очередь проверь версию Node.js!
4. Установи [Yeoman](https://github.com/Lectrum/FAQ#%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-yeoman) и
[генератор проекта компании Lectrum](https://github.com/Lectrum/generator-ui):

```bash
npm install -g yo @lectrum/generator-ui@latest
```

> Если ты пользователь Windows, [настрой себе терминал](https://github.com/Lectrum/FAQ#%D0%AF-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-windows-%D0%9A%D0%B0%D0%BA-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D1%8C-%D1%82%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB-%D0%B4%D0%BB%D1%8F-%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D0%BE%D0%B9-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B)
для удобной работы.

5. [Скачай и установи Git](https://git-scm.com/downloads), если его нет на компьютере;
6. Выполни в консоли **`git --version`**, чтобы проверить версию установленного Git, должно быть не ниже **`2.19.0`**;
7. Склонируй этот проект:

```bash
git clone https://github.com/lectrum/react-online-intensive.git
```

8. Перейди в проект, выполнив команду:

```bash
cd react-online-intensive
```

9. В терминале, находясь в директории с текущим проектом, выполни команду:

> ❗️ Пользователям **`Windows`** перед выполнением этой команды нужно **открыть терминал от имени администратора**.

```bash
yo @lectrum/ui
```
> ❗️ Во время установки зависимостей у пользователей **`Ubuntu`** может возникнуть ошибка, связанная с нехваткой памяти:

```bash
Phantom installation failed { Error: spawn ENOMEM
```

> Чтобы исправить эту ошибку [выполни следующие шаги из инструкции](https://github.com/Lectrum/FAQ#%D0%9A%D0%B0%D0%BA-%D0%B8%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D1%83-%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D0%BD%D0%BD%D1%83%D1%8E-%D1%81-%D0%BD%D0%B5%D1%85%D0%B2%D0%B0%D1%82%D0%BA%D0%BE%D0%B9-%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%B8-%D0%BF%D1%80%D0%B8-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B5-phantomjs-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-ubuntu).

> После первой установки генератор попросит разрешения об анонимном сборе статистической информации. На этот вопрос можно ответить на своё усмотрение. Мы рекомендуем отвечать «нет» (нажать клавишу **`n`**).

> Возможно генератор найдёт устаревшие файлы и спросит нужно ли их обновить. Нужно согласиться (нажать клавишу **`y`**).

10. Генератор подготовит все нужные файлы, установит зависимости и запустит проект. Если проект не запустился, выполни
команду **`npm run start`**;
11. Перейди в браузер и открой страницу по адресу [http://localhost:3000](http://localhost:3000/). После загрузки сборки
появится страница со стартовой точкой и сообщением «Добро пожаловать!»;
12. Открой **`Chrome Dev Tools`** и перейди на вкладку **`console`**, там не должно быть каких-либо ошибок.


##### 👉🏼 Хозяйке на заметку
> Все доступные команды и возможности сгенерированного проекта можно [найти по этой ссылке](https://github.com/Lectrum/generator-ui#-%D0%9A%D1%80%D0%B0%D1%82%D0%BA%D0%B8%D0%B9-%D0%BE%D0%B1%D0%B7%D0%BE%D1%80-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0).
<br>

### 🤔 FAQ

Ответы на часто задаваемые вопросы можно найти [здесь](https://github.com/Lectrum/FAQ#-faq).
<br>

### Лицензия

MIT © [Lectrum](https://lectrum.io)

<div align="center">
  <!-- Сделано с любовь -->
    <img src="https://img.shields.io/badge/%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%BD%D0%BE%20%D1%81-%F0%9F%96%A4-red.svg?longCache=true&style=for-the-badge&colorA=000&colorB=fedcba"
      alt="Сделано с любовь" />
</div>
