import { hot } from 'react-hot-loader/root';
import React from 'react';
import Home from './home';
import Second from './second';

/**
 * 根类
 * 最终渲染到html节点上
 */

 class App extends React.Component {
  render() {
    return (
      <div>
        <Home/>
        <Second/>
      </div>
    )
  }
}

export default hot(App);

