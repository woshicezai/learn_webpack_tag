import React from 'react';


export default class Second extends React.Component {
  constructor() {
    super();
    this.state = {
      value:''
    }
  }

  componentDidMount() {

  }


  showAlert = () => {
    alert('我是小组件');
  }

  changeValue = (e) => {
    console.log('changeValue',e.target.value)
    this.setState({
      value:e.target.value,
    })
  }

  render() {
    let {value} = this.state;
    return (
      <div>
        <div>{'我是小组件1'}</div>
        <button onClick={this.showAlert}>{'点击我 我会弹窗哦'}</button>
        <input onChange={this.changeValue} value={value}/>
      </div>
    )
  }
}