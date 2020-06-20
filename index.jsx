import React from 'react';
import ReactDom from 'react-dom';
import Home from './pages/home';

/**
 * 根类
 * 最终渲染到html节点上
 */
class App extends React.Component {
  render() {
   return (
     <div>
       <Home/>
     </div>
   )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));