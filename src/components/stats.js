export default function Stats({items}) {

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.floor((numPacked / numItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
          ? "You got everything!"
          : `You have ${numItems} items in the list. You already packed ${numPacked} (${percentage}%).`
          }</em>
      </footer>
    );
  }
  