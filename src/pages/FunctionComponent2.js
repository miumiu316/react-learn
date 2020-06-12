import React, { useState, useEffect } from 'react'
export default function FunctionComponent2 (props) {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log('effect')
    document.title = `${count}次`
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      //componentWillUnmount 处理
      clearInterval(timer)
    }
  }, [count])
  return (
    <div>
      <h3>hookComponent</h3>
      <p>count：{count}</p>
      <button onClick={() => {
        setCount(count + 1)
      }
      }>count加上1</button>
    </div>
  )

};
