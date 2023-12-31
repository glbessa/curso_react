import './App.css'

import MyForm from './components/MyForm'

function App() {
  let user = {
    name: "Gabriel",
    email: "gabrielleitebessa@gmail.com",
    bio: "Biografia",
    role: "admin"
  }

  return (
    <>
      <MyForm user={user}></MyForm>
    </>
  )
}

export default App
