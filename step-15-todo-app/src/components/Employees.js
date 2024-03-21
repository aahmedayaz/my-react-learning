import React, { useState } from 'react'
import Modal from './Modal'

const Employees = ({employees, setEmployees, formatDate}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [data, setData] = useState('')


  const handleEdit = (employee) => {
    setIsEditModalOpen(true)
    setData(employee)
  }


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
          employees.map((employee, index) => {
            return <div className='flex py-[15px] items-center' key={index}>
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
                <button className='px-[10px] py-[7px] w-[90px] bg-blue-500 rounded-lg' onClick={() => handleEdit(employee)}>Edit</button>
                <button className='px-[10px] py-[7px] w-[90px] bg-red-500 rounded-lg' onClick={() => setIsEditModalOpen(true)}>Delete</button>
              </div>
            </div>
          })
        }
      </div>
      {
        isEditModalOpen && 
        <Modal 
          purpose={"Edit"}
          setIsModalOpen={setIsEditModalOpen}
          setEmployees={setEmployees} 
          data={data}
          formatDate={formatDate}
        />
      }
    </>
  )
}

export default Employees