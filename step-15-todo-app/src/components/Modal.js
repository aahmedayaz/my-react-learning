import React, {useEffect, useState} from "react";

const Modal = ({setIsModalOpen, employees, setEmployees, formatDate, purpose, data}) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')

    useEffect(() => {
        if(data){
            setName(data.name)
            setRole(data.role)
        }
    }, [])


    const addEmployee = () => {
        if(name != '' && role != ''){
            setEmployees([
                ...employees ,
                {
                    id: employees.length+1,
                    name: name,
                    role: role,
                    createdAt : formatDate(),
                    updatedAt: formatDate()
                }
            ])
            setIsModalOpen(false)
        }
    }

    const updateEmployee = () => {
        setEmployees((prev) => {
            return prev.map((employee) => {
                return employee.id == data.id ? {
                    ...employee,
                    name: name,
                    role: role,
                    updatedAt: formatDate()
                } : employee
            })
        })
        setIsModalOpen(false)
    }

    return (
        <div className="absolute h-[100vh] w-[100%] top-0 flex justify-center items-center bg-opacity-40 backdrop-blur-10">
            <div className="w-[500px] px-[20px] py-[20px] border translate-y-[-50%] bg-white flex flex-col justify-between items-center gap-2">
                <span className="text-black font-bold cursor-pointer self-end" onClick={() => setIsModalOpen(false)}>X</span>
                <input type="text" value={name} placeholder="Name" className="border border-black px-[20px] py-[5px] rounded-sm " onChange={(e) => setName(e.target.value)}/>
                <input type="text" value={role} placeholder="Role" className="border border-black px-[20px] py-[5px] rounded-sm " onChange={(e) => setRole(e.target.value)}/>
                <button
                className="border border-black px-[20px] py-[5px]"
                onClick={data ? updateEmployee : addEmployee} 
                >
                {purpose}
                </button>
            </div>
        </div>
    );
};

export default Modal;
