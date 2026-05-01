export function ProductListPage() {
  const products = [
    { id: 1, name: 'Smartphone', price: 699, category: 'Electronics', description: 'Latest model with high-res camera.' },
    { id: 2, name: 'T-Shirt', price: 19, category: 'Clothing', description: '100% cotton, comfortable fit.' },
    { id: 3, name: 'Coffee Maker', price: 49, category: 'Home & Garden', description: 'Brew your favorite coffee at home.' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Products</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {product.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                <button className="text-primary hover:text-blue-700 font-medium transition duration-200">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
