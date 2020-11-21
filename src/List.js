import React from 'react';
import './List.css';

const List = ({ itemList, updateItemList }) => {
  const deleteItem = (key) => {
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    updateItemList(newList);
  };
  return (
    <div>
      {itemList.map((itemObj) => {
        return (
          <div key={itemObj.key} className='item'>
            <p>{itemObj.item}</p>
            <button onClick={() => deleteItem(itemObj.key)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
