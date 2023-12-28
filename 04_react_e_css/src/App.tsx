import './App.css'

import MyComponent from './components/MyComponent'
import MyTitle from './components/MyTitle';

function App() {
  let n = 1;

  return (
    <>
      <MyComponent></MyComponent>
      <p>Este parágrafo é global!</p>
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      <h2 style={n < 10 ? {color: "magenta"} : {color: "blue"} }>CSS inline dinâmico</h2>
      <MyTitle></MyTitle>
    </>
  )
}

export default App
