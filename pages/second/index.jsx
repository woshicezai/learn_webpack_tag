import React from 'react';


export default class Second extends React.Component {
  constructor() {
    super();
  }

  showAlert = () => {
    alert('我是小组件');
  }


  render() {
    return (
      <div>
        <div>{'我是小组件'}</div>
        <button onClick={this.showAlert}>{'点击我 我会弹窗哦'}</button>
      </div>
    )
  }
}