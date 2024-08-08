/* eslint-disable @next/next/no-img-element */
const Products = () => {
  // Dummy data for products
  const products = [
    {
      id: 1,
      name: "Product A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$199.99",
      imageUrl: "https://via.placeholder.com/300",
      purchaseUrl: "#",
    },
    {
      id: 2,
      name: "Product B",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "$299.99",
      imageUrl: "https://via.placeholder.com/300",
      purchaseUrl: "#",
    },
    {
      id: 3,
      name: "Product B",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "$299.99",
      imageUrl: "https://via.placeholder.com/300",
      purchaseUrl: "#",
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-white text-center underline underline-offset-4 mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-bold text-xl">
                    {product.price}
                  </span>
                  <a
                    href={product.purchaseUrl}
                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
