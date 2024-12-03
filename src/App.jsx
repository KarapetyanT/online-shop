import { useState } from 'react'
import './App.css'
import { BasketTable } from './components/basket-table';
import { ProductList } from './components/product-list';
import { Header } from './components/header';


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
      <Header />

      <ProductList
       products={products} 
       onMoveToCart={moveToCart} 
       />

      <BasketTable
      basket={basket}
      onQuantityUp={quantityUp}
      onQuantityDown={quantityDown}
      onRemoveProduct={removeProduct}
      />  
    </>
  )
}

export default App
