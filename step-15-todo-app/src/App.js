import React from 'react'
import Employees from './components/Employees'

const App = () => {
  return (
    <>
      <div className='w-[85%] flex flex-col mx-auto '>
        <h1 className='text-[#2b124b] text-[26px] font-[600] font-sans'>Employees Management</h1>
        <div className='w-[100%] flex justify-between items-center'>
          <input 
            type="text" 
            className='border rounded-[5px] border-black py-[7px] px-[15px] outline-none w-[50%]' 
            placeholder='Search Employees'
          />
          <select className='border border-black px-[20px] py-[7px] ml-[190px] w-[150px] rounded-[5px] outline-none text-ellipsis overflow-hidden'>
            <option value="All" key="">All</option>
            <option value="Admin" key="">Admin</option>
            <option value="Supervisor" key="">Supervisor</option>
          </select>
          <button className='px-[20px] py-[7px] rounded-[5px] bg-green-800 text-white active:scale-[0.99] active:bg-green-900'>Add Employee</button>
        </div>

        {/* Employee List */}

        <Employees />
      </div>
    </>

  )
}

export default App