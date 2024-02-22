import "../styles/Tasks.css";

function Cart({ item, deleteItem }) {
  return (
    <div className="task-card" key={item.id}>
      <div className="task-content">
        <div className="task-name">{item.name}</div>
        <div className="task-desr">{item.colors}</div>
        <div className="task-price">Due: {item.price}</div>
      </div>
      <div className="task-actions">
        <button className="task-button" onClick={() => deleteItem(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cart;
