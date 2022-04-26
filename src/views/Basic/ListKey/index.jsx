import React from 'react'

const data = [
  { id: 0, name: 'abc' },
  { id: 1, name: 'def' },
  { id: 2, name: 'ghi' },
  { id: 3, name: 'jkl' }
];

const ListItem = (props) => {
  return <li>{props.name}</li>;
};

const List = () => {
  return (
    <div>
      <h2>1. 不用key，控制台会出现 Warning: Each child in a list should have a unique "key" prop. 的警告提示</h2>
      <ul>
        {data.map((item) => (
          <ListItem name={item.name}></ListItem>
        ))}
      </ul>
      <h2>2. key的作用是用于判断元素是新创建的还是被移动的元素，从而减少不必要的元素渲染</h2>
      <h2>3. 如果列表数据渲染中，在数据后面插入一条数据，key的作用并不大</h2>
      <h2>4. 但是如果是在前面或者中间插入数据的时候，react根据key属性匹配原有树上的子元素以及最新树上的子元素，像上述情况只需要将000元素插入到最前面位置，当没有key的时候，所有的li标签都需要进行修改</h2>
      <h2>同样，并不是拥有key值代表性能越高，如果说只是文本内容改变了，不写key反而性能和效率更高

        主要是因为不写key是将所有的文本内容替换一下，节点不会发生变化</h2>
      <br />
      <br />
      <br />
      <p>
        良好使用key属性是性能优化的非常关键的一步，注意事项为：

        key 应该是唯一的

        key不要使用随机值（随机数在下一次 render 时，会重新生成一个数字）

        使用 index 作为 key值，对性能没有优化

      </p>
    </div>

  );
};

export default List