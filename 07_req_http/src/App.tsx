import './App.css'

import ProductsList from './components/ProductsList'
import ProductsAdder from './components/ProductsAdder'

function App() {
  return (
    <>
      <div>
        <ProductsList></ProductsList>
      </div>
      <ProductsAdder/>
    </>
  )
}

export default App
