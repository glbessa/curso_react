import './App.css'

// Assets
import City from './assets/city.jpg';

// Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import { useState } from 'react';
import UsersRender from './components/UsersRender';

function App() {
  let [ users, setUsers ] = useState([
    { id: 1, name: 'Gabriel', age: 20, occupation: 'Student'},
    { id: 2, name: 'Alexandra', age: 49, occupation: 'Secretary'},
    { id: 3, name: 'Charles', age: 48, occupation: 'Manager'},
    { id: 4, name: 'Sophia', age: 19, occupation: 'Student'}
  ]);

  return (
    <>
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      <UsersRender users={users}/>
    </>
  )
}

export default App
