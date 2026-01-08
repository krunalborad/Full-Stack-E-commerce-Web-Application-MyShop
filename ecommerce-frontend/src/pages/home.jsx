export default function Home({ products, addToCart }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 mx-auto object-contain mb-4"
            />

            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-700 mt-1">₹{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="mt-3 px-4 py-2 border rounded hover:bg-gray-100"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}