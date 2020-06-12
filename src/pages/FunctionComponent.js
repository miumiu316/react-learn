import React, { useState, useEffect } from 'react'
export function FunctionComponent (props) {
  const [date, setDate] = useState(new Date())
  /*
  useEffect
  是三个生命周期的集合
  1.componentDidMount执行第一次
  2.如果第二个参数依赖项不填 则只要函数组件中数据改变都会再次执行useEffect中的代码
    如果填上第二个参数  只有依赖项改变才会再次执行useEffect中的代码
    依赖项的取值相当于componentDidUpdate中执行的代码
  3.return中的函数 为componentWillUnmount执行的代码
  */

  useEffect(() => {
    console.log('useEffect')
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearInterval(timer)
    }

  }, [])
  return (
    <div>
      {console.log(1)}
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}