/*
webpack编译会把jsx
转成createElement的形式
*/
function createElement(type, props, ...children) {
  delete props.__source //删除调试代码属性
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === 'object' ? child : createTextVnode(child)
      })
    }
  }
}
/*
创建文本类型的vdom
*/
function createTextVnode(text) {
  return {
    type: "TEXT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}
/*


/**
 * @param  {虚拟dom} vdom
 * @param  {容器} container
 */
function render(vdom, container) {
  /*
  创建dom节点
  如果是文本vnode创建文本节点
  如果是标签vnode 创建标签节点
  */
  const dom = vdom.type === 'TEXT' ?
    document.createTextNode('') :
    document.createElement(vdom.type)


  /*
  挂载属性
  */
  Object.keys(vdom.props)
    .filter(key => key !== 'children')
    .forEach(attr => {
      //@todo 事件处理  属性兼容
      dom[attr] = vdom.props[attr]
    })

  /*
  将创建出的节点添加到到父级dom节点上
  */
  container.appendChild(dom)
  vdom.props.children.forEach(child => {
    render(child, dom)
  });
  //container.innerHTML = `<pre>${JSON.stringify(vdom,null,2)}</pre>`
}



//下一个单元任务
let nextUnitOfWork = null;
//render会初始化第一个任务
/*
调度  diff或渲染任务
*/
function workLoop(deadline) {
  //有任务且有空闲时间
  while (nextUnitOfWork && deadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitWork(nextUnitOfWork)
  }
  requestIdleCallback(workLoop)
}

/*
启动空闲时间处理
*/
requestIdleCallback(workLoop)

/*
获取下一个任务
*/
function performUnitWork(fiber) {
  //根据当前任务 获取下一个任务
}
export default {
  createElement,
  render
}