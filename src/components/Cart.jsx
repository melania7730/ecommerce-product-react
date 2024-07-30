import React from "react";
import deleteIcon from "../assets/images/icon-delete.svg";

const Cart = ({ items, onRemoveItem }) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute top-16 right-6 bg-white shadow-lg p-6 rounded-lg w-80">
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md"
                />
                <div className="flex-1 ml-4">
                  <p className="text-sm">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x ${item.price.toFixed(2)}{" "}
                    <span className="font-bold text-gray-900">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <img src={deleteIcon} alt="delete" className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-lg font-bold mb-4">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
