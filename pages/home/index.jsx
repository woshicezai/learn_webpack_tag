import React from 'react';

/**
 * 首页
 */
export default class Home extends React.Component {
  onError = () => {
    throw new Error('出错啦');
  }

  render() {
    return (
      <div>
        <div>{'这里是首页'}</div>
        <button onClick={this.onError}>{'点击我试试 会出错哦'}</button>
      </div>
    )
  }
}