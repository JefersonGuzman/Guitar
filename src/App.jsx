import { useState,  } from 'react' //hooks
import  Header  from './components/Header'
import  Footer  from './components/Footer'
import  Guitar from './components/Guitar'
import { db } from './data/db'


function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([]) 

  function addToCart(item){
    const itemExist = cart.findIndex(guitar => guitar.id === item.id)
    if(itemExist >= 0){
      const updatedCart = [...cart] // REALIZAMOS UNA COPIA DEL ARRAY DE CART PARA NO MUTARLO
      updatedCart[itemExist].quantity++ // AGREGAMOS  1 UNIDAD AL PRODUCTO POR CADA CLICK
      setCart(updatedCart) // 
    }else{
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  return (
    <>
      <Header 
        cart={cart}
      />
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
              {data.map((guitar)=>{
                return(
                  <Guitar 
                    key={guitar.id}
                    guitar = {guitar}
                    cart = {cart}
                    setCart={setCart}
                    addToCart={addToCart}

                  />
                )
              })}
             
            </div>
        </main>
      <Footer />
    </>
  )
}

export default App
