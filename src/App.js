import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState('');
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItem = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem('');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Never Miss A Task</h3>
        <div className='wrapper'>
          <div className='input-wrapper'>
            <input value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItem}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
