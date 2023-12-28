import CarDetails from "./components/CarDetails"
import { cars_list } from "./CarList";

function App() {
  return (
    <>
      { cars_list.map((car : {id:number, manufacture:string, model:string, year:number, km:number}) => (
        <CarDetails car={car}/>
      ))}
    </>
  )
}

export default App
