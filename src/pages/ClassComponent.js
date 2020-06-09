import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
    //存储状态
    this.state = {
      date: new Date()
    }
  }
  //组件挂载后执行
  componentDidMount () {
    this.time = setInterval(() => {
      //更新状态 不能用this.state赋值
      this.setState({
        date: new Date()
      })
    }, 1000)

  }

  //组件卸载前执行
  componentWillMount () {
    clearInterval(this.timer)
  }


  render () {
    const { date } = this.state;
    return (
      <div>
        <h3>Class Component</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
