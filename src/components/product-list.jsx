
export const ProductList = ({products, onMoveToCart}) => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-gray-700 rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden mb-4">
              <img
                src={item.photo}
                alt={item. title}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl text-white font-semibold mb-2">{item.title}</h2>
            <p className="text-lg text-purple-400">{item.price} USD</p>
            <small className="text-purple-300">{item.category}</small>
            <button 
              onClick={() => onMoveToCart(item)}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-200"
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>
  )
}