import React from 'react'

const App = () => {
  return (
    <>
      <div className='w-[80%] flex flex-col mx-auto '>
        <h1 className='text-[#2b124b] text-[26px] font-[600] font-sans'>Employees Management</h1>
        <div className='w-[100%] flex justify-between items-center'>
          <input 
            type="text" 
            className='border rounded-[5px] border-black py-[7px] px-[15px] outline-none w-[750px]' 
            placeholder='Search Employees'/>
          <select className='border border-black px-[20px] py-[5px] max-w-[150px] w-[150px] rounded-[5px] outline-none text-ellipsis overflow-hidden'>
            <option value="All" key="">All</option>
            <option value="Admin" key="">Admin</option>
            <option value="Supervisor" key="">Supervisor</option>
          </select>
          <button className='px-[20px] py-[5px] rounded-[5px] bg-green-800 text-white active:scale-[0.98]'>Add Employee</button>
        </div>
      </div>
    </>

  )
}

export default App