// import { useState } from 'react'
import Form from './components/Form'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className='min-h-screen bg-gray-200'>
        <div className='bg-pink-300 p-2 flex items-center'>
          <h1 className='text-2xl text-white font-bold'>Welcome to HealthCare</h1>
        </div>
        <div className='h-screen flex flex-col justify-center items-center'>
          <Form />
        </div>
      </main>
    </>)
}

export default App
