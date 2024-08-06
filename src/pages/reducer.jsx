import { useReducer } from "react";

//
const products = [
  {
    id: 1,
    name: "Baju",
    price: 120000,
  },
  {
    id: 2,
    name: "Celana",
    price: 125000,
  },
  {
    id: 3,
    name: "Jaket",
    price: 130000,
  },
];

function cartReducer(state, action) {
  // buatkan kode untuk menghandle addToCart pada reducer ini.
  // contoh : dispatch({ type: "addToCart", {
  // quantity: 1,
  // product: {id: 1, name: "Baju"}}
  // })
  // ubah kode dibawah
  console.log(state);
  if (action == "increment")
    return (state = { ...state, quantity: state.quantity + 1 });
  console.log(state);
  // ubah kode diatas

  return state;
}

const cart = {
  quantity: 0,
  products: [],
};

const Reducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cart);

  return (
    <>
      {products.map((product) => (
        <div className="border" key={product.id}>
          <p>ID:{product.id}</p>
          <p>Nama:{product.name}</p>
          <p>Harga :{product.price}</p>
          <button
            className="px-2 text-white bg-sky-700 mr-1"
            onClick={() => dispatch("increment")}
          >
            +
          </button>
          <button className="border px-2" onClick={() => dispatch("decrement")}>
            -
          </button>
        </div>
      ))}
      <p className="text-xl mt-4">Cart : {state.quantity}</p>
      {/* <div>
        {state.products.map((product) => (
          <p key={product.id}> - nama produk : {product.name}</p>
        ))}
      </div> */}
    </>
  );
};

export default Reducer;
