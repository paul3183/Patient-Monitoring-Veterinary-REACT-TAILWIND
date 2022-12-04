import React from 'react'
import { useEffect } from 'react';

const Patient = ({ patient, setPatient, deletePatient }) => {

  useEffect(() => {
    console.log('el componente esta listo')
  }, [])

  // console.log(patient);
  const { name, owner, email, released, symptoms, id } = patient;

  const handleDeleted = () => {
    const response = confirm('Are you sure to delete this patient?')

    if (response) {
      deletePatient(id)
    }
  }

  return (
    <div className='mx-3 bg-secondary-content shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Pet Name: {''}
        <span className='font-normal normal-case'>{name}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Owner Name: {''}
        <span className='font-normal normal-case'>{owner}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>discharge date: {''}
        <span className='font-normal normal-case'>{released}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Symptoms: {''}
        <span className='font-normal normal-case'>{symptoms}</span>
      </p>

      <div className='flex gap-3 mt-6'>
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl uppercase'
          onClick={() => setPatient(patient)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl uppercase'
          // onClick={() => deletePatient(patient.id)} esta es para eliminar de forma directa funciona bien puede ser patient.id o id simplemente or la destructuring.
          onClick={handleDeleted}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>

    </div>
  )
}

export default Patient