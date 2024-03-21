import React, { useState } from 'react'

const Employees = () => {


  // function for date time format

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

  return (
    <>
      <div className='flex w-[100%] flex-col bg-[#f3f2f2] rounded-lg px-[30px] mt-[40px]'>
        {/* Head of Table */}
        <div className='flex py-[15px] items-center  font-bold border-b border-b-black'>
            <div className='w-[60px]'>
              ID
            </div>
            <div className='w-[200px]'>
              Name
            </div>
            <div className='w-[130px]'>
              Role
            </div>
            <div className='w-[150px]'>
              CreatedAt
            </div>
            <div className='w-[150px]'>
              UpdatedAt
            </div>
            <div className='flex gap-[20px]'>
            </div>
          </div>
        {
          employees.map((employee) => {
            return <div className='flex py-[15px] items-center'>
              <div className='w-[60px]'>
                {employee.id}
              </div>
              <div className='w-[200px]'>
                {employee.name}
              </div>
              <div className='w-[130px]'>
                {employee.role}
              </div>
              <div className='w-[150px]'>
                {employee.createdAt}
              </div>
              <div className='w-[150px]'>
                {employee.updatedAt}
              </div>
              <div className='flex gap-[20px] justify-end w-[300px]'>
                <button className='px-[10px] py-[7px] w-[90px] bg-blue-500 rounded-lg'>Edit</button>
                <button className='px-[10px] py-[7px] w-[90px] bg-red-500 rounded-lg'>Delete</button>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Employees