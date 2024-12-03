
export const BasketTable = ({ basket,onQuantityUp, onQuantityDown, onRemoveProduct }) => {
  return (<div className="p-8 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-2xl text-white font-semibold mb-4">Your Basket</h2>
        <table className="min-w-full bg-gray-800 text-white rounded-lg overflow-hidden">
          <thead className="border-b-2 border-purple-600">
            <tr>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Count</th>
              <th className="py-3 px-4">Subtotal</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item) => (
              <tr key={item.id} className="border-b border-purple-600">
                <td className="py-3 px-4">{item.title}</td>
                <td className="py-3 px-4">{item.price} USD</td>
                <td className="py-3 px-4">{item.count}</td>
                <td className="py-3 px-4">{item.price * item.count} USD</td>
                <td className="py-3 px-4 space-x-2">
                  <button
                  onClick={() => onQuantityUp (item)}
                    className="px-3 py-1 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors duration-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onQuantityDown (item)}
                    className="px-3 py-1 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors duration-200"
                  >
                    -
                  </button>
                  <button
                    onClick={() => onRemoveProduct (item)}
                    className="px-3 py-1 bg-red-600 rounded-full hover:bg-red-500 transition-colors duration-200"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )}