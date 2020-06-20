import React from 'react';
import Home from './home';
import Second from './second';
import ReactDom from 'react-dom';

/**
 * 根类
 * 最终渲染到html节点上
 */

if (module.hot) {
  module.hot.accept('./home/index.jsx', function (e) {
    ReactDom.render(<App/>, document.getElementById('root'));
  })
  module.hot.accept('./second/index.jsx', function (e) {
    ReactDom.render(<App/>, document.getElementById('root'));
  })
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Home/>
        <Second/>
      </div>
    )
  }
}

