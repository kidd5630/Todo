import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './component/Todo';

const App = () => {
  return <div className="app">
    < Todo />
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);