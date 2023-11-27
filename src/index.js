import React from 'react';
import {createRoot} from 'react-dom/client';
import {createElement} from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  listId: 7,

  list: [
    {code: 1, title: 'Название элемента',selectedCounts: 0},
    {code: 2, title: 'Некий объект',selectedCounts: 0},
    {code: 3, title: 'Заголовок',selectedCounts: 0},
    {code: 4, title: 'Очень длинное название элемента из семи слов',selectedCounts: 0},
    {code: 5, title: 'Запись',selectedCounts: 0},
    {code: 6, title: 'Шестая запись',selectedCounts: 0},
    {code: 7, title: 'Седьмая запись',selectedCounts: 0},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);
