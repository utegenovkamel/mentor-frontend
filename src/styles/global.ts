// globalStyles.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }
	
  html {
    font-size: 16px;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%; // Предотвращение масштабирования текста в iOS
    -ms-text-size-adjust: 100%; // Предотвращение масштабирования текста в IE
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    overflow-x: hidden; // Предотвратить горизонтальный скролл
    color: #333; // Базовый цвет текста
    background-color: #fff; // Базовый фон
  }

  // Стили для основных элементов
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  p {
    line-height: 1.5;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%; // Чтобы изображения были адаптивными
    height: auto;
    display: block; // Убирает нижний отступ у изображений
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit; // Формы наследуют шрифты от body
    color: inherit; // Наследование цвета текста
  }

  button {
    background-color: transparent;
    cursor: pointer; // Курсор в виде указателя для кнопок
  }

  // Обнуление отступов у элементов форм
  fieldset {
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    padding: 0;
    display: table; // Чтобы legend не принимало маржин от fieldset
  }

  textarea {
    overflow: auto; // Скролл для многострочного ввода
  }

  // Обнуление стилей для списка и цитат
  blockquote,
  q {
    quotes: none;

    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  // Добавление собственных стилей для элементов по необходимости

`

export default GlobalStyle
