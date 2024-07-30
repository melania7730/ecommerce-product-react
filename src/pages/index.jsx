import Cart from "../components/Cart";
import ImageCarousel from "../components/ImageCarousel";
import ProductDetails from "../components/ProductDetails";

const Home = ({
  //   quantity, // 0
  //   setQuantity,
  handleAddToCart,
  cartItems,
  handleRemoveItem,
  isCartVisible,
}) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-16 items-center ">
        <div className="flex-1">
          <ImageCarousel />
        </div>
        <div className="flex-1">
          <ProductDetails
            // quantity={quantity}
            // setQuantity={setQuantity}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
      {isCartVisible && (
        <Cart items={cartItems} onRemoveItem={handleRemoveItem} />
      )}
    </>
  );
};

export default Home;
