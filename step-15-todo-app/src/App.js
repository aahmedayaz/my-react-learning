import React, { useState } from 'react'
import Employees from './components/Employees'
import Modal from './components/Modal'

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const formatDate = () => {
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
    return new Date().toLocaleDateString('en-GB' , options)
  }
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Ahmed Ayaz',
      role: 'Admin',
      createdAt : formatDate(),
      updatedAt: formatDate()
    },
    {
      id: 2,
      name: 'Nouman Afzal',
      role: 'Supervisor',
      createdAt : formatDate(),
      updatedAt: formatDate()
    },
    {
      id: 3,
      name: 'Araib Khan',
      role: 'Supervisor',
      createdAt : formatDate(),
      updatedAt: formatDate()
    },
  ])

  const handleAddEmployeeBtn = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div className='w-[85%] flex flex-col mx-auto relative'>
        <h1 className='text-[#2b124b] text-[26px] font-[600] font-sans'>Employees Management</h1>
        <div className='w-[100%] flex justify-between items-center'>
          <input 
            type="text" 
            className='border rounded-[5px] border-black py-[7px] px-[15px] outline-none w-[50%]' 
            placeholder='Search Employees'
          />
          <select className='border border-black px-[20px] py-[7px] ml-[190px] w-[150px] rounded-[5px] outline-none text-ellipsis overflow-hidden'>
            <option value="All" key="All">All</option>
            <option value="Admin" key="Admin">Admin</option>
            <option value="Supervisor" key="Supervisor">Supervisor</option>
          </select>
          <button 
            className='px-[20px] py-[7px] rounded-[5px] bg-green-800 text-white active:scale-[0.99] active:bg-green-900'
            onClick={handleAddEmployeeBtn}
          >
            Add Employee
          </button>
        </div>

        {/* Employee List */}

        <Employees employees={employees} setEmployees={setEmployees} formatDate={formatDate}/>
      </div>
      {
        isModalOpen && 
        <Modal 
          isModalOpen={isModalOpen} 
          setIsModalOpen={handleAddEmployeeBtn} 
          employees={employees} 
          setEmployees={setEmployees} 
          formatDate={formatDate}
          purpose={"Add"}
        />
      }
    </>

  )
}

export default App