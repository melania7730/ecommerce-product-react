import React from "react";

const Cart = ({ items, onRemoveItem }) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute top-16 right-6 bg-white shadow-lg p-4 rounded-lg w-72">
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <img src={item.image} alt={item.name} className="w-12 h-12" />
              <div className="flex-1 ml-4">
                <p className="text-sm">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} x ${item.price}
                </p>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
          <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg w-full">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
