import { useState,  } from 'react' //hooks
import  Header  from './components/Header'
import  Footer  from './components/Footer'
import  Guitar from './components/Guitar'
import { db } from './data/db'


function App() {

  const [data, setData]=useState(db)
  

  return (
    <>
      <Header />
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
              {data.map(()=>{
                return(
                  <Guitar/>
                )
              })}
             
            </div>
        </main>
      <Footer />
    </>
  )
}

export default App
