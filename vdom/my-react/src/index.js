// import React from 'react';
// import ReactDOM from 'react-dom';
import React from './myreact'
let ReactDOM = React;
let element = <div>
  <h1 title="标题">我的react</h1>
  <p>开始啦</p>
  <a href='http://baidu.com'>跳转</a>
</div>
ReactDOM.render(
  element,
  document.getElementById('root')
);