import React from 'react'
import Patient from './Patient'


const PatientList = ({ patients, setPatient, deletePatient }) => {

  // console.log(patients)

  return (
    <div className='md:w-3/5 mt-5 md:mt-0'>

      {patients && patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Patient List</h2>
          <p className='text-lg mt-5 text-center mb-7'>
            Manage your {''}
            <span className='text-indigo-700 font-bold'>Patients and Appointments</span>
          </p>
          <div key={patients.email} className='md:h-screen md:overflow-y-scroll'>
            {patients.map((patient) => (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
              // <h1>{patient.name}</h1>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No Patient List Exists</h2>
          <p className='text-lg mt-5 text-center mb-7'>
            Start Adding Patients {''}
            <span className='text-indigo-600 font-semibold'>/ loading list</span>
          </p>
        </>
      )
      }

    </div>
  )
}

export default PatientList