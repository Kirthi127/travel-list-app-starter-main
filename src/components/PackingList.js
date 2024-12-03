export default function PackingList({items, onDeleteItem, onUpdateItem}) {

    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item 
            packingitem={item}
            key={item.id} 
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem} 
            />
          ))}
        </ul>
      </div>
    );
  }

  function Item({packingitem, onDeleteItem, onUpdateItem}) {
    return (
      <li> 
        <input 
        type="checkbox" 
        value={packingitem.packed} 
        onChange={() => onUpdateItem(packingitem.id)}/>
        <span style={
          packingitem.packed ? {
            textDecoration: "line-through"
          } : {}
          } >
          {packingitem.quantity} {packingitem.description}
        </span>
        <button onClick={() => onDeleteItem(packingitem.id)}>Delete</button>
      </li>
    );
  }
  