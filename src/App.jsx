import { useState } from 'react'
import './App.css'


function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 49.99,
      category: "Electronics",
      photo: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/cloud-pink/pink-01-solo4.jpg",
    },
    {
      id: 2,
      title: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
      photo: "https://m.media-amazon.com/images/I/61FTABGJz3L.jpg", 
    },
    {
      id: 3,
      title: "Desk Lamp",
      price: 29.99,
      category: "Home Decor",
      photo: "https://i.etsystatic.com/7279722/r/il/63a910/1663885781/il_fullxfull.1663885781_hqr8.jpg", // Add photo URL here
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 59.99,
      category: "Footwear",
      photo: "https://hips.hearstapps.com/hmg-prod/images/wh-index-wide-running-shoes-6493593b562da.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*", 
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
      photo: "https://5.imimg.com/data5/SELLER/Default/2022/10/TA/RV/QJ/78198701/music-mini-bluetooth-speaker.webp", 
    },
    {
      id: 6,
      title: "Cooking Utensil Set",
      price: 24.99,
      category: "Kitchen",
      photo: "https://cutesyhome.com/cdn/shop/products/sleek-matte-finish-cooking-utensils-set-7-pc-cutlery-613.jpg?v=1655627521", 
    },
    {
      id: 7,
      title: "Notebook",
      price: 4.99,
      category: "Stationery",
      photo: "https://target.scene7.com/is/image/Target/GUEST_d820b5aa-46bf-460a-a4c9-f81e0257a69f", 
    },
    {
      id: 8,
      title: "Gaming Mouse",
      price: 34.99,
      category: "Gaming",
      photo: "https://assets2.razerzone.com/images/pnx.assets/c174e90e94ab3f247fa562eaecc282b4/500x500-razer-naga-left-handed.webp", 
    },
    {
      id: 9,
      title: "Sunglasses",
      price: 14.99,
      category: "Accessories",
      photo: "https://ae-pic-a1.aliexpress-media.com/kf/S226c16ab23b34762be7569aec777058e1/Round-Ocean-Lense-Oversized-Sunglasses-Women-Gradient-Fashion-Rimless-Sun-Glasses-Metal-Curved-Temples-Oculos-De.jpg_640x640Q90.jpg_.webp", 
    },
    {
      id: 10,
      title: "Portable Charger",
      price: 25.99,
      category: "Electronics",
      photo: "https://i5.walmartimages.com/seo/OWNTECH-Portable-Charger-Power-Bank-for-iphone-android-with-LED-Display-5000mah-Mini-Fast-Charger-Battery-Pack-Compatible-with-iPhone-15-14-13-12_18b6c9ad-06a3-4cf0-be77-0cf38ba746ba.3dab5e20c6c0cf6342e5e15c795f14e7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", 
    },
  ]);

  const [basket, setBasket] = useState([]);

  const moveToCart = product => {
    const found = basket.find( item => item.id === product.id)
    if(found) {
      found.count++
      setBasket([...basket])
    } else {
      setBasket([...basket, {...product, count: 1}])
    }
  }

  const quantityUp = product => { 
    setBasket(basket.map( item =>
      item.id != product.id ? item : {...item, count: item.count + 1}

    ))
  }

  
  const quantityDown = product => {
    setBasket(basket =>
      basket.map((item) => {
          if (item.id === product.id) {
            if (item.count > 1) {
              return { ...item, count: item.count - 1 }
            }
            return { ...item, count: 0 };
          }
          return item;
        })
        .filter((item) => item.count > 0)
    )
  }
  
 
  const removeProduct = product => {
    setBasket(basket.filter( item => item.id != product.id))
  }

  return (
    <>
      <header className="bg-gray-800 text-white py-6">
        <h1 className="text-4xl font-bold text-center">Online Shop</h1>
      </header>

      {/* Product List */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-gray-700 rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden mb-4">
              <img
                src={item.photo}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl text-white font-semibold mb-2">{item.title}</h2>
            <p className="text-lg text-purple-400">{item.price} USD</p>
            <small className="text-purple-300">{item.category}</small>
            <button 
              onClick={() => moveToCart(item)}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-200"
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>

      {/* Basket Table */}
      <div className="p-8 bg-gray-700 rounded-lg shadow-lg">
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
                  onClick={() => quantityUp(item)}
                    className="px-3 py-1 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors duration-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => quantityDown(item)}
                    className="px-3 py-1 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors duration-200"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeProduct(item)}
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
    </>
  );
}

export default App;
