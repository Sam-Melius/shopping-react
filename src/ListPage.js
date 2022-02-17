import { useState, useEffect } from 'react';
import { deleteAllItems, getListItems } from './services/fetch-utils';
import ListItemForm from './ListItemForm';
import ListItem from './ListItem';

export default function ListPage() {
  const [listItems, setShoppingList] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);
  // on load, call the fetchItems function (remember: useEffect)

  async function fetchItems() {
    const response = await getListItems();
    setShoppingList(response);
    // fetch the list items and inject them into state
  }

  async function handleDeleteClick() {
    await deleteAllItems();
    // delete all items
    await fetchItems();
    // then call your fetchItems function to fetch and re-display
  }

  return (
    <div className="list-page">
      <button onClick={handleDeleteClick}>New List</button>
      <ListItemForm fetchItems={fetchItems} />
      {/* pass fetchItems to the ListItemForm component */}
      <div className='item-list'>
        {listItems.map(listItem => 
          <ListItem key={listItem.id} fetchItems={fetchItems} listItem={ListItem} />)}
        {/* map through all the list items and render them here */}
      </div>

    </div>
  );
}
