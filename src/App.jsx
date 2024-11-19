// import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'



function App() {
  return (
    <>
      <main className='min-h-screen bg-gray-100'>
        <div className='flex items-center justify-between p-3 bg-blue-300'>
          <h1 className='p-2 text-2xl font-bold rounded-sm text-slate-100 ring ring-slate-200'>
            <Link to={"/"}>Welcome to HealthCare</Link>
          </h1>
          <Link to={`/dashboard`} className="p-1 bg-blue-100 rounded-md focus-visible:bg-blue-300 hover:bg-blue-200 hover:ring-1 hover:ring-blue-600">Dashboard</Link>
        </div>
        <Outlet />
      </main>
    </>)
}

export default App
