import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Contact from './Contact';
// import CurryingExample from './CurryingExample'
// import Forms from './Forms';
// import ContextExample from './ContextExample'
// import ImageGridApplication from './ImageGridApplication'
import ReducerExample from './ReducerExample';
import { store } from './ReduxToolkit/store'
import { Provider } from 'react-redux';
import ReduxTodo from './ReduxToolkit/ReduxTodo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // The strict mode render a dom for 2 times just to verify unsafe lifecycle, legacy context api, deprecated findDOMNode usage
  <React.StrictMode>
    {/* <App /> */}
    {/* <Contact /> */}
    {/* <CurryingExample /> */}
    {/* <Forms /> */}
    {/* <ContextExample /> */}
    {/* <ImageGridApplication /> */}
    {/* <ReducerExample /> */}
    <Provider store={store}>
      <ReduxTodo />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
