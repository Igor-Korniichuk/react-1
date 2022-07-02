// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// =======================================================================================
// import React from 'react';
import ReactDOM from 'react-dom';
import paintings from './paintings.json';
import App from './app'

// const elem1 = React.createElement('span', { children: 'Привет' });
// const elem2 = React.createElement('span', { children: 'мир' });

// const elem1 = <span>Hello</span>;
// const elem2 = <span>World</span>;;
// // const element = React.createElement('div', { a: 5, b: 10, children: 'Hello World' });
// const jsxElement =
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// console.log(jsxElement);

// ReactDOM.render(jsxElement, document.querySelector('#root'));

//===========================================================================

// const data = {
//   id: "id-1",
//   url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/"
//   },
//     "quantity": 10
// }
// const data = paintings[0];
// function Painting(props) {
//   const {url, title, profileUrl, authorName, price} = props
//   return (<div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//       Автор: <a href={profileUrl}>{authorName}</a>
//       </p>
//     <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>)
// }
// const painting = (
//   <div>
//       <img src={data.url} alt={data.title} width="480" />
//       <h2>{data.title}</h2>
//       <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//       </p>
//     <p>Цена: {data.price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
// )

// {/* <Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price}
// />  */}

// const painting = paintings[0];

ReactDOM.render(<App />, document.querySelector('#root'));